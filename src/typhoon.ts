import type mapboxgl from 'mapbox-gl'
// import mapbox from 'mapbox-gl';
import {
  BaseLayer,
  LineLayer,
  windRouteCircleLayer,
  forecastRouterLayer,
} from './base/Layer'
import type { Option, Pointer, Tdata } from './types/type'
import myAnimation from './myAnimation'
import type { AnimationParmas } from './myAnimation'
import { createWindCircle } from './base/windCircle'
import './style/base.scss'
import * as turf from '@turf/turf'

/**
 * @desc 台风路径类(包含预报路径)
 * @param mapbox插件
 * @param 地图对象
 * @param option(data: 当前台风信息+pinters路径点集合; loaded: 台风动画完成后成功回调; forecastType: 预报机构名称及起色系)
 * */ 
class Typhoon {
  protected map: mapboxgl.Map
  protected live_circle: windRouteCircleLayer | null = null //台风路径上的点 pointer
  protected live_line: LineLayer | null = null //台风路径上的线 line
  protected live_icon!: mapboxgl.Marker //台风风眼图标
  data: Tdata
  protected forecastData: any[] = []
  protected forecastLayer: {[x:string]: forecastRouterLayer | null} = {} //此台风的预报路径
  protected windCircle!: any
  protected mapbox: typeof mapboxgl
  protected center: [number, number] | undefined
  protected closeAnimation: (()=> void) | null = null
  protected forecastType: {[x: string]: boolean} 
  protected forecastStrokeColor: {[x: string]: string} 
  protected loaded: ()=>void
  constructor(mapbox: typeof mapboxgl, map: mapboxgl.Map, option: Option) {
    this.map = map
    this.mapbox = mapbox
    this.loaded = option.callBack
    this.forecastType = option.forecastType
    this.forecastStrokeColor = option.forecastStrokeColor
    Object.keys(this.forecastType).forEach((item)=> {
      this.forecastLayer[item] = null
    })
    
    this.data = option.data
    // console.log(data)
    this.drawLive()
    this.backCenter()
    
  }
  /**
   * @desc 删除当前台风内部leyer后重新绘制
   */
  reDraw() {
    this.remove()
    this.drawLive()
    // this.backCenter()
    return this
  }

  /**
   * @desc 删除当前台风
   */
  remove() {
    if(this.closeAnimation) this.closeAnimation()
    if(this.live_line){      
      this.live_line.clearLayer()
      this.live_icon.remove()
      this.removeForecast()
    }
    if(this.live_circle) this.live_circle.clearLayer()
    this.removeWindCircle()
    return this  
  }
  removeForecast() {
    for(let i in this.forecastLayer) {
      if(this.forecastLayer[i]) {
        this.forecastLayer[i]!.clearLayer()
      }
      this.forecastLayer[i] = null
    }
    return this
  }

  removeWindCircle() {
    if (this.windCircle) {
      this.windCircle.clear()
    }
    return this
  }

  /**
   * @desc 控制地图中心点至当前台风区域
   */
  backCenter() {
    const pointers = this.data.points
    const frist = [ Number(pointers[0].lng), Number(pointers[0].lat) ] as [number, number]
    this.center = frist
    if(pointers.length && pointers.length>=4) {
      const polygon = turf.polygon([[...pointers.map((item: any)=> [Number(item.lng), Number(item.lat)]), frist]])
      // debugger
      this.center = turf.centroid(polygon).geometry.coordinates as [number, number]
    }
    
    this.map.flyTo({
      center: this.center ,
      zoom:4.3 ,
      bearing: 0,
      speed: 3, // make the flying slow
      curve: 1, // change the speed at which it zooms out
      easing: function (t) { return t; }
    });
    return this
  }
  /**
   * @desc 受保护方法: 初始化台风路径，带动画的绘制
   */
  protected drawLive() {
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
      if( this.live_line ) this.live_line.addCoordinates(data[cur])
      if( this.live_circle ) this.live_circle.addFeature(this.getFeature(cur, data))
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

  /**
   * @desc 受保护方法: 绘制动画过程中更新台风风眼图标icon
   * */ 
  protected refreshLive_icon(point: any) {
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
    if(!this.windCircle) return this //无windCircle 说明台风首次未完成
    if(index< 0) index = this.data.points.length - 1
    this.removeForecast()
    const data = this.data.points.slice(0, index+1)
    if(this.live_line) this.live_line.setCoordinates(data)

    if(this.live_circle) this.live_circle.setFeature(this.getFeatures(data))
    this.refreshLive_icon(data[data.length - 1])

    this.windCircle.refresh(data[data.length - 1])
    if(!isAnimate) this.drawForecast(data[data.length - 1])
    return this
  }

  /**
   * @desc 绘制动画完毕后绘制风圈
   * */ 
   drawWindCircle(pointer: Pointer) {
    this.windCircle = createWindCircle(this.mapbox, this.map, pointer)
    return this
  }

  /**
   * @desc 受保护方法: 添加预报路径
   * @param {Pointer} pointer 实况点
   */
  protected drawForecast(pointer: Pointer) {
    this.forecastData = pointer.forecast!
    this.removeForecast()
    this.forecastData.forEach((data) => {      
      if(!this.forecastType[data[1].issuer]) return
      this.forecastLayer[data[1].issuer] = (
        new forecastRouterLayer(this.mapbox, this.map, data, this.forecastStrokeColor[data[1].issuer])
      )
    })
    return this
  }

  /**
   * @desc 控制单条预报路径显隐
   * @param {string} issuer 预报机构
   * @param {boolean} isShow 是否显示
   */
  checkForecast(issuer: string, isShow: boolean ) {
    if(isShow && !this.forecastLayer[issuer]){
      const findData = this.forecastData.find((item)=> item[1].issuer === issuer)
      if(findData){
        this.forecastLayer[issuer] = new forecastRouterLayer(this.mapbox, this.map, findData, this.forecastStrokeColor[findData.issuer])
      }      
    }else{
      this.forecastLayer[issuer] && this.forecastLayer[issuer]!.clearLayer()
      this.forecastLayer[issuer] = null
    }
    return this
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
