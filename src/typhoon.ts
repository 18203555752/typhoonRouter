import type mapboxgl from 'mapbox-gl'
// import mapbox from 'mapbox-gl';
import {
  BaseLayer,
  LineLayer,
  windRouteCircleLayer,
  forecastRouterLayer,
} from './base/Layer'
import type { HasFeater } from './base/Layer'
import myAnimation from './myAnimation'
import type { AnimationParmas } from './myAnimation'
import { createWindCircle } from './base/windCircle'
import type { WindCircle } from './base/windCircle'
import './style/base.scss'
import * as turf from '@turf/turf'

class Typhoon {
  protected map: mapboxgl.Map
  protected live_circle: any //台风路径上的点 pointer
  protected live_line: any //台风路径上的线 line
  protected live_icon!: mapboxgl.Marker //台风风眼图标
  data: any
  protected forecastData: any[] = []
  protected forecastLayer: {[x:string]: forecastRouterLayer | null} = {} //此台风的预报路径
  protected windCircle!: any
  protected mapbox: typeof mapboxgl
  protected center: [number, number] | undefined
  protected closeAnimation: any 
  protected forecastType: any 
  protected loaded: ()=>void
  constructor(mapbox: typeof mapboxgl, map: mapboxgl.Map, data: any, loaded: ()=>void, forecastType: {[x:string]: boolean}) {
    this.map = map
    this.mapbox = mapbox
    this.loaded = loaded
    this.forecastType = forecastType
    Object.keys(forecastType).forEach((item)=> {
      this.forecastLayer[item] = null
    })
    
    this.data = data
    // console.log(data)
    this.drawLive()
    this.backCenter()
    
  }
  reDraw() {
    this.remove()
    this.drawLive()
    // this.backCenter()
  }
  remove() {
    if(this.closeAnimation) this.closeAnimation()
    if(this.live_line){
      this.live_circle.clearLayer()
      this.live_line.clearLayer()
      this.live_icon.remove()
      this.removeForecast()
    }
    this.removeWindCircle()    
  }
  removeForecast() {
    for(let i in this.forecastLayer) {
      if(this.forecastLayer[i]) {
        this.forecastLayer[i]!.clearLayer()
      }
      this.forecastLayer[i] = null
    }
  }

  removeWindCircle() {
    if (this.windCircle) {
      this.windCircle.clear()
    }
  }
  backCenter() {
    const pointers = this.data.points
    const frist = [ Number(pointers[0].lng), Number(pointers[0].lat) ]
    const polygon = turf.polygon([[...pointers.map((item: any)=> [Number(item.lng), Number(item.lat)]), frist]])
    // debugger
    this.center = turf.centroid(polygon).geometry.coordinates as [number, number]
    // const lngs = polygon.geometry.coordinates[0].map((item)=> item[0])
    // const lats = polygon.geometry.coordinates[0].map((item)=> item[1])
    // const maxLon = Math.max(...lngs)
    // const minLon = Math.min(...lngs)
    // const maxLat = Math.max(...lats)
    // const minLat = Math.min(...lats)
    
    this.map.flyTo({
      center: this.center ,
      zoom:4.3 ,
      bearing: 0,
      speed: 3, // make the flying slow
      curve: 1, // change the speed at which it zooms out
      easing: function (t) { return t; }
    });
  }
  /**
   * 初始化台风路径，带动画的绘制
   */
  drawLive() {
    // 台风路径上的线 line
    this.live_line = new LineLayer(this.mapbox, this.map)
    this.live_line.addLineLayer()

    // 台风路径上的点 pointer
    this.live_circle = new windRouteCircleLayer(
      this.mapbox,
      this.map,
      [],
      this.data
    )
    this.live_circle.addCircleLayer('#333', [0, 0], 4)
    
    
    // 台风风眼图标
    const div = document.createElement('div')
    div.innerHTML = `<div class="img-pos"></div>`
    let data = this.data.points
    this.live_icon = new this.mapbox.Marker({ element: div })
    // 默认第一个点添加路径名称
    this.live_circle.addNamePop(this.data)
    // 渲染路径的每一步
    const callBack = (cur: number) => {
      this.live_line.addCoordinates(data[cur])
      this.live_circle.addFeature(this.getFeature(cur, data))
      this.refreshLive_icon(data[cur])
    }
    // 渲染路径完成后的成功回调
    const successBack = () => {
      // 风圈
      this.drawWindCircle(data[data.length - 1])
      this.drawForecast(data[data.length - 1])
      this.loaded()
    }
    // 调用动画
    this.closeAnimation = myAnimation({
      length: this.data.points.length,
      successCallback: successBack,
      callBack: callBack,
    })
  }
  private refreshLive_icon(point: any) {
    if (this.live_icon) {
      const el = this.live_icon.getElement()
      el.innerHTML = `<div class="img-pos s${point.power} "></div>`
      this.live_icon.setLngLat([point.lng, point.lat]).addTo(this.map)
    }
  }
  /**
   * @desc 任意时间段--绘制从开始到任意点的路径
   * @param {number} index  自定义绘制的终点
   * @param {boolean} isAnimate  是否被 动画animate函数调用
   * @return {void}
   */
  anyDraw(index: number, isAnimate: boolean) {
    if(index< 0) index = this.data.points.length - 1
    this.removeForecast()
    const data = this.data.points.slice(0, index+1)
    this.live_line.setCoordinates(data)

    this.live_circle.setFeature(this.getFeatures(data))
    this.refreshLive_icon(data[data.length - 1])
    // console.log(data[data.length - 2], data[data.length - 1])

    this.windCircle.refresh(data[data.length - 1])
    if(!isAnimate) this.drawForecast(data[data.length - 1])
    
  }
  drawWindCircle(pointer: WindCircle) {
    this.windCircle = createWindCircle(this.mapbox, this.map, pointer)
  }
  /**
   * @desc 添加预报路径
   * @param {WindCircle} pointer 实况点
   */
  drawForecast(pointer: WindCircle) {
    this.forecastData = pointer.forecast!
    this.removeForecast()
    this.forecastData.forEach((data) => {
      
      if(!this.forecastType[data[1].issuer]) return
      this.forecastLayer[data[1].issuer] = (
        new forecastRouterLayer(this.mapbox, this.map, data)
      )
    })
  }
  
  checkForecast(type: string ) {
    
    if(this.forecastType[type]){
      const findData = this.forecastData.find((item)=> item[1].issuer === type)
      
      this.forecastLayer[type] = new forecastRouterLayer(this.mapbox, this.map, findData)
    }else{
      this.forecastLayer[type] && this.forecastLayer[type]!.clearLayer()
      this.forecastLayer[type] = null
    }
  }
  getFeature(n: number, data: any[]) {
    const el = data[n]
    el.color = 's' + el.power
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [Number(el.lng), Number(el.lat)],
      },
      properties: el,
    }
  }

  getFeatures( data: any[]) {
    const Features: any[] = []
    data.forEach((el)=> {
      el.color = 's' + el.power
      Features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [Number(el.lng), Number(el.lat)],
        },
        properties: el,
      })
    })
    
    return Features
  }
}

export default Typhoon
