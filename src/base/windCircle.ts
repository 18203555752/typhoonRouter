import mapboxgl from 'mapbox-gl'
import { WindCircleLayer } from './Layer'
type Quad = {
  ne: number
  se: number
  sw: number
  nw: number
}
type strOrNum = string | number
export interface WindCircle {
  color: string
  forecast: any[] | null
  lat: number
  lng: number
  move_dir: strOrNum
  move_speed: strOrNum
  power: number
  pressure: number
  radius7: strOrNum
  radius7_quad: Quad
  radius10: strOrNum
  radius10_quad: Quad
  radius12: strOrNum
  radius12_quad: Quad
  remark: string
  speed: number
  strong: string
  time: string
}
/**
 * 台风中心风圈
 * @param map
 * @param pointer
 * @returns
 */
    
export function createWindCircle(mapbox: typeof mapboxgl, map: any, pointer: WindCircle) {
  let radius7: WindCircleLayer
  let radius10: WindCircleLayer
  let radius12: WindCircleLayer
  console.log(pointer)
  const quad7 = Object.values(pointer.radius7_quad).reverse()
  const quad10 = Object.values(pointer.radius10_quad).reverse()
  const quad12 = Object.values(pointer.radius12_quad).reverse()
  // if (pointer.radius7)
    radius7 = new WindCircleLayer(
      mapbox,
      map,
      [pointer.lng, pointer.lat],
      quad7,
      '#62E3CE', 
      'rgba(69, 96, 204, 0.5)',
      '七级风圈'
    ).addCircleLayer()
  // if (pointer.radius7)
    radius10 = new WindCircleLayer(
      mapbox,
      map,
      [pointer.lng, pointer.lat],
      quad10,
      '#62E371',
      'rgba(255, 252, 0, 0.6)',
      '十级风圈'
    ).addCircleLayer()
  // if (pointer.radius7)
    radius12 = new WindCircleLayer(
      mapbox,
      map,
      [pointer.lng, pointer.lat],
      quad12,
      '#A5E362',
      'rgba(250, 48, 48, 0.6)',
      '十二级风圈'
    ).addCircleLayer()

  return {
    refresh: (pointer: WindCircle)=> {
      const quad7 = Object.values(pointer.radius7_quad).reverse()
      const quad10 = Object.values(pointer.radius10_quad).reverse()
      const quad12 = Object.values(pointer.radius12_quad).reverse()
      if (radius7) radius7.refresh([pointer.lng, pointer.lat], quad7)
      if (radius10) radius10.refresh([pointer.lng, pointer.lat], quad10)
      if (radius12) radius12.refresh([pointer.lng, pointer.lat], quad12)
    },
    clear: function () {
    if (radius7) radius7.clearLayer()
    if (radius10) radius10.clearLayer()
    if (radius12) radius12.clearLayer()
  }}
}
