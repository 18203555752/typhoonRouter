import type mapboxgl from 'mapbox-gl'
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
// class

class Typhoon {
  protected map: mapboxgl.Map
  protected live_circle: any
  protected live_line: any
  live_marker: mapboxgl.Marker | null
  data: any
  protected forecastData: any[] = []
  protected forecastLayer: any[] = []
  protected mapbox: typeof mapboxgl
  constructor(mapbox: typeof mapboxgl, map: mapboxgl.Map, data: any) {
    this.map = map
    this.mapbox = mapbox
    this.live_marker = null
    this.data = data
    console.log(data)
    this.drawLive()
  }

  drawLive() {
    // 台风路径上的线 line
    this.live_line = new LineLayer(this.mapbox, this.map)
    this.live_line.addLineLayer()

    // 台风路径上的点 pointer
    this.live_circle = new windRouteCircleLayer(this.mapbox, this.map, [])
    this.live_circle.addCircleLayer('#333', [0, 0], 4)
    this.addForecast()
    // 台风图标
    const div = document.createElement('div')
    div.innerHTML = `<div class="img-pos"></div>`
    let data = this.data[0].points
    this.live_marker = new this.mapbox.Marker({ element: div })

    // 渲染路径的每一步
    const callBack = (cur: number) => {
      this.live_line.addCoordinates(data[cur])
      this.live_circle.addFeature(this.getFeature(cur, data))
      if (this.live_marker) {
        const el = this.live_marker.getElement()
        el.innerHTML = `<div class="img-pos s${data[cur].power}"></div>`
        this.live_marker
          .setLngLat([data[cur].lng, data[cur].lat])
          .addTo(this.map)
      }
    }
    // 渲染路径完成后的成功回调
    const successBack = () => {
      if (this.live_marker) {
        const el = this.live_marker.getElement()
        const child = el.querySelector('div')
        if (child) {
          child.className += ' active'
        }
      }
      console.log(this.live_circle)
      // 风圈
      this.drawWindCircle(data[data.length - 1])
    }
    // 调用动画
    myAnimation({
      length: this.data[0].points.length,
      successCallback: successBack,
      callBack: callBack,
    })
  }
  drawWindCircle(pointer: WindCircle) {
    createWindCircle(this.map, pointer)
  }
  drawForecast() {
    this.forecastLayer.forEach((layer) => {
      layer.clearLayer()
    })
    this.forecastLayer = []
    this.forecastData.forEach((data) => {
      this.forecastLayer.push(
        new forecastRouterLayer(this.mapbox, this.map, data)
      )
    })
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

  /**
   * 添加预报路径
   */
  addForecast() {
    this.map.on('click', this.live_circle.layers[0].id, (e: HasFeater) => {
      if (e.features) {
        console.log(e.features[0].properties)
        this.forecastData = [
          getthisPoointerForecast(e.features[0].properties, 0.5),
          getthisPoointerForecast(e.features[0].properties, 0.8),
        ]
        console.log(this.forecastData)
        this.drawForecast()
      }
    })
  }
}

function getthisPoointerForecast(pointer: any, ratio: number) {
  let arr = []
  for (let i = 0; i < 6; i++) {
    let lng = pointer.lng + ratio * (Math.random() * i)
    let lat = pointer.lat + ratio * i
    arr.push({
      color: '8',
      forecast: null,
      lat,
      lng,
      move_dir: '西西北',
      move_speed: 25,
      power: 8,
      pressure: 998,
    })
  }
  return arr
}
export default Typhoon
