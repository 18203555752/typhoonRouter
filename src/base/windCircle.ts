import { WindCircleLayer } from './Layer'
type Quad = {
  ne: number
  se: number
  sw: number
  nw: number
}
export interface WindCircle {
  color: string
  forecast: any[] | null
  lat: number
  lng: number
  move_dir: '西西北'
  move_speed: number
  power: number
  pressure: number
  radius7: number
  radius7_quad: Quad
  radius10: number
  radius10_quad: Quad
  radius12: number
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
export function createWindCircle(map: any, pointer: WindCircle) {
  let radius7: WindCircleLayer
  let radius10: WindCircleLayer
  let radius12: WindCircleLayer
  console.log(pointer)
  const quad7 = Object.values(pointer.radius7_quad).reverse()
  const quad10 = Object.values(pointer.radius10_quad).reverse()
  const quad12 = Object.values(pointer.radius12_quad).reverse()
  if (pointer.radius7)
    radius7 = new WindCircleLayer(
      map,
      [pointer.lng, pointer.lat],
      quad7,
      '#62E3CE'
    ).addCircleLayer()
  if (pointer.radius7)
    radius10 = new WindCircleLayer(
      map,
      [pointer.lng, pointer.lat],
      quad10,
      '#62E371'
    ).addCircleLayer()
  if (pointer.radius7)
    radius12 = new WindCircleLayer(
      map,
      [pointer.lng, pointer.lat],
      quad12,
      '#A5E362'
    ).addCircleLayer()

  return function () {
    if (radius7) radius7.clearLayer()
    if (quad10) radius10.clearLayer()
    if (radius12) radius12.clearLayer()
  }
}
