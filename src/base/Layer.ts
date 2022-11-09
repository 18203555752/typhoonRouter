import type { MapboxGeoJSONFeature } from 'mapbox-gl'
import type mapboxgl from 'mapbox-gl'
// import mapbox from 'mapbox-gl'
import mapUtil from './mapBox'
import { nanoid } from 'nanoid'
import turfCircle from '@turf/circle'
import type { WindCircle } from './windCircle'
// import { Feature } from 'geojson';
export interface HasFeater extends mapboxgl.MapMouseEvent {
  features?: MapboxGeoJSONFeature[]
}
/**
 * 基础图层
 */
class BaseLayer {
  protected map!: mapboxgl.Map
  protected sourceId!: string
  protected layers: mapboxgl.Layer[] = []
  protected geoJson: any
  protected mapbox!: typeof mapboxgl
  // protected keysTxt:string[] = []
  constructor(mapbox: typeof mapboxgl, map: mapboxgl.Map, arr: Array<any>) {
    this.mapbox = mapbox
    this.map = map
    this.geoJson = this.getJeoJson(arr)
    this.addSource(this.geoJson)
  }
  /**
   *获得ids
   */
  get ids() {
    const arr = this.layers.map((layer) => layer.id)
    return arr
  }

  /**
   * 移除图层
   */
  protected removeLayer() {
    this.layers.forEach((layer) => {
      try {
        this.map.removeLayer(layer.id)
      } catch (error) {}
    })
    this.layers = []
  }
  /**
   * 移除数据源
   */
  protected removeSource() {
    try {
      this.map.removeSource(this.sourceId)
    } catch (error) {}
  }
  /**
   * 清楚图层
   */
  clearLayer() {
    this.removeLayer()
    this.removeSource()
  }
  /**
   * 增加数据源
   */
  protected addSource(source: any) {
    this.sourceId = this.sourceId || nanoid()
    this.map.addSource(this.sourceId, source)
    return this.map
  }

  // 生成geoJson
  protected getJeoJson(arr: Array<any>) {
    let geoJson = {
      type: 'geojson' /* geojson类型资源 */,
      data: {
        /* geojson数据 */
        type: 'FeatureCollection',
        features: arr,
      },
    }
    return geoJson
  }

  /**
   * @param key property中字段名称
   * @param offset number[] 偏移量
   * @param anchor 显示位置
   * @returns this
   */
  addCircleLayer(color = '#e43', offset = [0, 0.7], size = 16) {
    const id = 'circle_' + nanoid()
    const layer = mapUtil.getMakerCircleLayer({
      id,
      offset,
      size,
      color,
      source: this.sourceId,
    })
    this.map.addLayer(layer)
    this.layers.push(layer)
    return this
  }

  addFeature(item: any) {
    this.geoJson.data.features.push(item)
    // this.geoJson.data.features[0].geometry.coordinates.push(...item.geometry.coordinates)
    //@ts-ignore
    this.map.getSource(this.sourceId).setData(this.geoJson.data)
  }
}

/**
 * 台风路径实线
 */
class LineLayer extends BaseLayer {
  constructor(mapbox: typeof mapboxgl, map: mapboxgl.Map, arr?: any[]) {
    arr = arr || [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [],
        },
      },
    ]
    super(mapbox, map, arr)
  }
  /**
   *
   * @param color
   * @param offset
   * @param size
   * @returns
   */
  addLineLayer() {
    const id = 'line_' + nanoid()
    const layout = {
      'line-cap': 'round',
      'line-join': 'round',
    }
    const paint = {
      'line-color': '#333',
      'line-width': 2,
      'line-opacity': 0.8,
    }
    const layer = mapUtil.getLineLayer({
      id,
      layout,
      paint,
      source: this.sourceId,
    })
    this.map.addLayer(layer)
    this.layers.push(layer)
    return this
  }

  addCoordinates(item: any) {
    // this.geoJson.data.features.push(item)
    this.geoJson.data.features[0].geometry.coordinates.push([
      item.lng,
      item.lat,
    ])
    //@ts-ignore
    this.map.getSource(this.sourceId).setData(this.geoJson.data)
  }
}

// 路径上的点
class windRouteCircleLayer extends BaseLayer {
  protected popup: mapboxgl.Popup | null = null
  constructor(mapbox: typeof mapboxgl, map: mapboxgl.Map, arr: any[]) {
    // this.popup
    super(mapbox, map, arr)
  }
  /**
   * 清楚图层
   */
  clearLayer() {
    this.removeLayer()
    this.removeSource()

    // this.map.off('click', this.layers[0].id, this.mouseClickFunc)
  }

  /**
   * 添加图层
   * @param key property中字段名称
   * @param offset number[] 偏移量
   * @param anchor 显示位置
   * @returns this
   */
  addCircleLayer(color = '#e43', offset = [0, 0.7], size = 16) {
    const id = 'circle_' + nanoid()
    const layer = mapUtil.getMakerCircleLayer({
      id,
      offset,
      size,
      color,
      source: this.sourceId,
    })
    this.map.addLayer(layer)
    this.layers.push(layer)
    // this.map.on('click', this.layers[0].id, this.mouseClickFunc.bind(this))
    this.map.on('mouseenter', this.layers[0].id, this.mouseEnterFunc.bind(this))
    this.map.on('mouseleave', this.layers[0].id, this.mouseOutFunc.bind(this))
    return this
  }
  /**
   * 鼠标移入pointer事件
   * @param e 当前pointer的对象
   */
  mouseEnterFunc(e: HasFeater) {
    this.map.getCanvas().style.cursor = 'pointer'
    // console.log(e.features)
    if (e.features) {
      if (this.popup) this.popup.remove()
      this.addPop(e.features[0].properties as WindCircle)
    }
  }
  /**
   * 鼠标移出pointer事件
   * @param e 当前pointer的对象
   */
  mouseOutFunc() {
    this.map.getCanvas().style.cursor = ''
    if (this.popup) this.popup.remove()
  }

  addPop(message: WindCircle) {
    //@ts-ignore
    const html = `<div class='windRouterPop__box'>
      <div class='windRouterPop_row'> <div class='row-time'>时间： </div> <div class='row-content'>${message.time}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>当前位置： </div> <div class='row-content'>${message.lng}E/${message.lat}N</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>中心气压： </div> <div class='row-content'>${message.pressure}百帕</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>最大风速： </div> <div class='row-content'>${message.speed}米/秒</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>风力： </div> <div class='row-content'>${message.power}级</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>等级： </div> <div class='row-content'>${message.strong}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>移动速度： </div> <div class='row-content'>${message.move_speed}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>移动方向： </div> <div class='row-content'>${message.move_dir}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>七级半径： </div> <div class='row-content'>${message.radius7}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>十级半径： </div> <div class='row-content'>${message.radius10}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>十二级半径： </div> <div class='row-content'>${message.radius12}</div> </div>
    </div>
    `
    this.popup = new this.mapbox.Popup({ closeOnClick: false })
      .setLngLat([message.lng, message.lat])
      .setHTML(html)
      .addTo(this.map)
    return html
  }
}

// 风圈
class WindCircleLayer {
  protected map!: mapboxgl.Map
  protected arr: number[]
  protected center: number[]
  protected step = 180
  protected geoJson: any = null
  layer: mapboxgl.Layer | null = null
  protected color: string
  sourceId: any

  constructor(
    map: mapboxgl.Map,
    center: number[],
    arr: number[],
    color: string = '#78C5BB'
  ) {
    this.color = color
    this.map = map
    this.arr = arr
    this.center = center
    this.getFeatures()
    this.addSource(this.geoJson)
  }

  private getFeatures() {
    const step = Math.ceil(this.step / 4)
    this.step = step * 4
    const coordinates: number[] = []
    let feature: any
    this.arr.forEach((r, i) => {
      feature = turfCircle(this.center, r, { steps: this.step })
      coordinates.push(
        ...feature.geometry.coordinates[0].slice(i * step, (i + 1) * step + 1)
      )
    })
    // features.forEach(item => {
    //   coordinates.push (...item.geometry.coordinates[0])

    // })
    feature.properties.color = this.color
    feature.geometry.coordinates[0] = coordinates
    // console.log(feature)
    this.geoJson = this.getJeoJson([feature])
  }
  /**
   * 增加数据源
   */
  protected addSource(source: any) {
    this.sourceId = this.sourceId || nanoid()
    this.map.addSource(this.sourceId, source)
    return this.map
  }
  /**
   * 画风圈
   * @returns
   */
  addCircleLayer() {
    const layer = mapUtil.drawFillPolygon(this.sourceId, 0.4)
    this.map.addLayer(layer)
    this.layer = layer
    return this
  }

  // 生成geoJson
  protected getJeoJson(arr: Array<any>) {
    let geoJson = {
      type: 'geojson' /* geojson类型资源 */,
      data: {
        /* geojson数据 */
        type: 'FeatureCollection',
        features: arr,
      },
    }
    return geoJson
  }

  clearLayer() {
    this.map.getLayer(this.layer!.id) && this.map.removeLayer(this.layer!.id)
    this.map.getSource(this.sourceId) && this.map.removeSource(this.sourceId)
  }
}

/**
 * 台风路径（预报）虚线
 */
class forecastRouterLayer {
  protected sourceIds: string[] = []
  protected map!: mapboxgl.Map
  protected layers: mapboxgl.Layer[] = []
  protected circleJson: any
  protected lineJson: any
  protected popup!: mapboxgl.Popup
  protected mapbox!: typeof mapboxgl
  // protected keysTxt:string[] = []
  constructor(mapbox: typeof mapboxgl, map: mapboxgl.Map, data: Array<any>) {
    this.map = map
    this.mapbox = mapbox
    this.circleJson = this.getJeoJson(data)
    this.lineJson = this.getLineJson(data)
    this.addLineLayer()
    this.addCircleLayer()
  }
  /**
   *获得ids
   */
  get ids() {
    const arr = this.layers.map((layer) => layer.id)
    return arr
  }

  /**
   * 移除图层
   */
  protected removeLayer() {
    this.layers.forEach((layer) => {
      try {
        this.map.removeLayer(layer.id)
      } catch (error) {}
    })
    this.layers = []
  }
  /**
   * 移除数据源
   */
  protected removeSource() {
    this.sourceIds.forEach((sourceId) => {
      try {
        this.map.removeSource(sourceId)
      } catch (error) {}
    })
    this.sourceIds = []
  }
  /**
   * 清楚图层
   */
  clearLayer() {
    this.removeLayer()
    this.removeSource()
  }
  /**
   * 增加数据源
   */
  protected addSource(id: string, source: any) {
    this.sourceIds.push(id)
    this.map.addSource(id, source)
    return this.map
  }
  // 生成pointer的geoJson
  protected getJeoJson(pointers: Array<WindCircle>) {
    let pointerArr: any = []
    pointers.forEach((item, index) => {
      if (!index) return
      const el = item
      el.color = 's' + el.power
      pointerArr.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [Number(el.lng), Number(el.lat)],
        },
        properties: el,
      })
    })
    let geoJson = {
      type: 'geojson' /* geojson类型资源 */,
      data: {
        /* geojson数据 */
        type: 'FeatureCollection',
        features: pointerArr,
      },
    }
    return geoJson
  }
  protected getLineJson(pointers: Array<WindCircle>) {
    const coordinates: any = []
    pointers.forEach((item) => {
      coordinates.push([item.lng, item.lat])
    })
    return {
      type: 'geojson' /* geojson类型资源 */,
      data: {
        /* geojson数据 */
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: coordinates,
            },
          },
        ],
      },
    }
  }
  /**
   * @param key property中字段名称
   * @param offset number[] 偏移量
   * @param anchor 显示位置
   * @returns this
   */
  addCircleLayer(color = '#333', offset = [0, 0.7], size = 4) {
    const id = 'circle_' + nanoid()
    this.addSource(id, this.circleJson)
    const layer = mapUtil.getMakerCircleLayer({
      id,
      offset,
      size,
      color,
      source: id,
    })
    this.map.addLayer(layer)
    this.layers.push(layer)
    this.map.on('mouseenter', id, this.mouseEnterFunc.bind(this))
    this.map.on('mouseleave', id, this.mouseOutFunc.bind(this))
    return this
  }

  addLineLayer() {
    const id = 'line_' + nanoid()
    this.addSource(id, this.lineJson)
    const layout = {
      'line-cap': 'round',
      'line-join': 'round',
    }
    const paint = {
      'line-color': '#333',
      'line-width': 2,
      'line-opacity': 0.8,
      'line-dasharray': [2, 4],
    }
    const layer = mapUtil.getLineLayer({
      id,
      layout,
      paint,
      source: id,
    })
    this.map.addLayer(layer)
    this.layers.push(layer)
    return this
  }

  /**
   * 鼠标移入pointer事件
   * @param e 当前pointer的对象
   */
  mouseEnterFunc(e: HasFeater) {
    this.map.getCanvas().style.cursor = 'pointer'
    // console.log(e.features)
    if (e.features) {
      if (this.popup) this.popup.remove()
      this.addPop(e.features[0].properties)
    }
  }
  /**
   * 鼠标移出pointer事件
   * @param e 当前pointer的对象
   */
  mouseOutFunc() {
    this.map.getCanvas().style.cursor = ''
    if (this.popup) this.popup.remove()
  }
  /**
   * 弹出框展示的信息
   * @param message 弹出框展示的信息object
   * @returns
   */
  addPop(message: any) {
    //@ts-ignore
    const html = `<div class='windRouterPop__box'>
      <div class='windRouterPop_row'> <div class='row-time'>时间： </div> <div class='row-content'>${message.time}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>当前位置： </div> <div class='row-content'>${message.lng}E/${message.lat}N</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>中心气压： </div> <div class='row-content'>${message.pressure}百帕</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>最大风速： </div> <div class='row-content'>${message.speed}米/秒</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>风力： </div> <div class='row-content'>${message.power}级</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>等级： </div> <div class='row-content'>${message.strong}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>移动速度： </div> <div class='row-content'>${message.move_speed}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>移动方向： </div> <div class='row-content'>${message.move_dir}</div> </div>
    </div>
    `

    this.popup = new this.mapbox.Popup({ closeOnClick: false })
      .setLngLat([message.lng, message.lat])
      .setHTML(html)
      .addTo(this.map)
    return html
  }
}
export {
  BaseLayer,
  LineLayer,
  WindCircleLayer,
  windRouteCircleLayer,
  forecastRouterLayer,
}
