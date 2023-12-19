import type { MapboxGeoJSONFeature, PointLike } from 'mapbox-gl'
import type mapboxgl from 'mapbox-gl'
// import mapbox from 'mapbox-gl'
import mapUtil from './mapBox'
import { nanoid } from 'nanoid'
import turfCircle from '@turf/circle'
import { Pointer } from '../types/type'

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

  setFeature(features: any) {
    this.geoJson.data.features = features
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
      'line-color': '#00F5FF',
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
  // 向lineLayer 逐个添加 point 
  addCoordinates(item: any) {
    // this.geoJson.data.features.push(item)
    this.geoJson.data.features[0].geometry.coordinates.push([
      item.lng,
      item.lat,
    ])
    //@ts-ignore
    this.map.getSource(this.sourceId).setData(this.geoJson.data)
  }
  // 一次性设置好整条线的数据
  setCoordinates(data: any) {
    const coordinates: any[] = []
    data.forEach((item: any)=> {
      coordinates.push([item.lng, item.lat])
    })
    this.geoJson.data.features[0].geometry.coordinates = coordinates
     //@ts-ignore
    this.map.getSource(this.sourceId).setData(this.geoJson.data)
  }
}

// 路径上的点
class windRouteCircleLayer extends BaseLayer {
  protected popup: mapboxgl.Popup | null = null  
  protected popup_name: mapboxgl.Popup | null = null  
  protected data: any
  constructor(
    mapbox: typeof mapboxgl,
    map: mapboxgl.Map,
    arr: any[],
    data: any
  ) {
    // this.popup
    super(mapbox, map, arr)
    this.data = data
  }
  /**
   * @desc 清除图层
   */
  clearLayer() {
    this.removeLayer()
    this.removeSource()
    this.popup_name?.remove()
    // this.map.off('click', this.layers[0].id, this.mouseClickFunc)
  }

  /**
   * @desc 添加图层
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
   * @desc 鼠标移入pointer事件
   * @param e 当前pointer的对象
   */
  mouseEnterFunc(e: HasFeater) {
    this.map.getCanvas().style.cursor = 'pointer'
    // console.log(e.features)
    if (e.features) {
      if (this.popup) this.popup.remove()
      this.addPop(e.features[0].properties as Pointer)
    }
  }
  /**
   * @desc 鼠标移出pointer事件
   * @param e 当前pointer的对象
   */
  mouseOutFunc() {
    this.map.getCanvas().style.cursor = ''
    if (this.popup) this.popup.remove()
  }
  addNamePop(data: any) {
    //@ts-ignore
    const html = `<div class='box'>
      <span>${data.tfbh}</span>
      <span>${data.name}</span>
    </div>
    `
    const message = data.points[0]
    const popupOffsets = {
      left: [5, 0] as PointLike
    }
    this.popup_name = new this.mapbox.Popup({offset: popupOffsets, anchor: 'left', closeOnClick: false ,closeButton: false, className: 'tyRouter-name'})
      .setLngLat([message.lng, message.lat])
      .setHTML(html)
      .addTo(this.map)
    return html
  }
  addPop(message: Pointer) {
    //@ts-ignore
    const html = `<div class='windRouterPop__box'>
      <div class='windRouterPop_title'> <div class='row-content'>${
        this.data.tfbh
      }${this.data.name}(${this.data.ename})</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>时间： </div> <div class='row-content'>${
        message.time
      }</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>当前位置： </div> <div class='row-content'>${
        message.lng
      }E/${message.lat}N</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>中心气压： </div> <div class='row-content'>${
        message.pressure
      }百帕</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>最大风速： </div> <div class='row-content'>${
        message.speed
      }米/秒</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>风力： </div> <div class='row-content'>${
        message.power
      }级</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>等级： </div> <div class='row-content'>${
        message.strong
      }</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>移动速度： </div> <div class='row-content'>${EmptyValue(
        message.move_speed
      )} 公里/时</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>移动方向： </div> <div class='row-content'>${EmptyValue(
        message.move_dir
      )}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>七级半径： </div> <div class='row-content'>${EmptyValue(
        message.radius7
      )}公里</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>十级半径： </div> <div class='row-content'>${EmptyValue(
        message.radius10
      )}公里</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>十二级半径： </div> <div class='row-content'>${EmptyValue(
        message.radius12
      )}公里</div> </div>
    </div>
    `
    this.popup = new this.mapbox.Popup({ closeOnClick: false , className: 'tyRouter-content'})
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
  borderLayer: mapboxgl.Layer | null = null
  protected color: string
  protected borderColor: string
  sourceId: any
  protected popup_name: mapboxgl.Popup | null = null
  mapbox: typeof mapboxgl
  protected name: string
  constructor(
    mapbox: typeof mapboxgl,
    map: mapboxgl.Map,
    center: number[],
    arr: number[],
    color: string = '#78C5BB',
    borderColor: string = '#fffc00',
    name: string = '风圈'
  ) {
    this.mapbox = mapbox
    this.color = color
    this.borderColor = borderColor
    this.map = map
    this.arr = arr
    this.center = center
    this.name = name
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
   * @desc 增加数据源
   */
  protected addSource(source: any) {
    this.sourceId = this.sourceId || nanoid()
    this.map.addSource(this.sourceId, source)
    return this.map
  }
  /**
   * @desc 画风圈
   * @returns
   */
  addCircleLayer() {
    const layer = mapUtil.drawFillPolygon(this.sourceId, 0.4)    
    this.layer = layer
    const borderLayer = mapUtil.drawMultiPolygon( this.borderColor, this.sourceId, 1, this.sourceId+ 'b')
    this.borderLayer = borderLayer
    console.log(this.borderColor)
    this.map.addLayer(layer)
    this.map.addLayer(borderLayer)
    this.map.on('mouseenter', this.layer.id, this.showWindRadius)
    this.map.on('mousemove', this.layer.id, this.moveWindRadius)
    this.map.on('mouseleave', this.layer.id, this.removePop)
    return this
  }

  /**
   * @desc 风圈添加鼠标移动事件
   * @returns
   */
  showWindRadius = (e: HasFeater)=> {
    // console.log(e)
    this.addPop(e.lngLat)
  }
  moveWindRadius = (e: HasFeater)=> {
    // console.log(e)
    this.movePop(e.lngLat)
  }
  addPop(pointLike: any) {
    this.removePop()
    const html = `<div class='box'>
      <span>${this.name}: (</span>
      <span>东北${this.arr[3]}km， </span>
      <span>东南${this.arr[2]}km， </span>
      <span>西南${this.arr[1]}km， </span>
      <span>西北${this.arr[0]}km )</span>
    </div>
    `
    const popupOffsets = {
      left: [5, 0] as PointLike
    }
    this.popup_name = new this.mapbox.Popup({offset: popupOffsets, anchor: 'left', closeOnClick: false ,closeButton: false, className: 'tyRouter-name'})
      .setLngLat([pointLike.lng, pointLike.lat])
      .setHTML(html)
      .addTo(this.map)
    return html
  }
  removePop = ()=> {
     if(this.popup_name ) this.popup_name.remove()
  }
  movePop = (pointLike: any)=> {
    if(this.popup_name) this.popup_name.setLngLat([pointLike.lng, pointLike.lat])    
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
  // 
  refresh(center: number[], arr: number[],) {
    const coordinates: any[] = []
    this.arr = arr
    this.center = center
    this.getFeatures()
     //@ts-ignore
    this.map.getSource(this.sourceId).setData(this.geoJson.data)
  }
  clearLayer() {
    this.map.getLayer(this.layer!.id) && this.map.removeLayer(this.layer!.id)
    this.map.getLayer(this.borderLayer!.id) && this.map.removeLayer(this.borderLayer!.id)
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
  constructor(mapbox: typeof mapboxgl, map: mapboxgl.Map, data: Array<any>, strokeColor: string) {
    this.map = map
    this.mapbox = mapbox
    this.circleJson = this.getJeoJson(data)
    this.lineJson = this.getLineJson(data)
    strokeColor = strokeColor ? strokeColor : '#7EAEC6'
    this.addLineLayer(strokeColor)
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

  // el.color = 's' + el.power
  //   return {
  //     type: 'Feature',
  //     geometry: {
  //       type: 'Point',
  //       coordinates: [Number(el.lng), Number(el.lat)],
  //     },
  //     properties: el,
  //   }
  protected getJeoJson(pointers: Array<Pointer>) {
    let pointerArr: any = []
    pointers.forEach((item, index) => {
      if (!index) return
      if(item.speed >= 9999) return
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
  protected getLineJson(pointers: Array<Pointer>) {
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

  addLineLayer(strokeColor : string) {
    const id = 'line_' + nanoid()
    this.addSource(id, this.lineJson)
    const layout = {
      'line-cap': 'round',
      'line-join': 'round',
    }
    const paint = {
      'line-color': strokeColor,
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
      <div class='windRouterPop_row'> <div class='row-time'>预报机构： </div> <div class='row-content'>${message.issuerName}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>时间： </div> <div class='row-content'>${message.time}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>当前位置： </div> <div class='row-content'>${message.lng}E/${message.lat}N</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>中心气压： </div> <div class='row-content'>${message.pressure == 9999 ? '--' : message.pressure} 百帕</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>最大风速： </div> <div class='row-content'>${message.speed}米/秒</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>风力： </div> <div class='row-content'>${message.power}级</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>等级： </div> <div class='row-content'>${message.strong ? message.strong :'--' }</div> </div>
    </div>
    `
    //   <div class='windRouterPop_row'> <div class='row-time'>移动速度： </div> <div class='row-content'>${message.move_speed}</div> </div>
    //   <div class='windRouterPop_row'> <div class='row-time'>移动方向： </div> <div class='row-content'>${message.move_dir}</div> </div>

    this.popup = new this.mapbox.Popup({ closeOnClick: false, className: 'tyRouter-content' })
      .setLngLat([message.lng, message.lat])
      .setHTML(html)
      .addTo(this.map)
    return html
  }
}
function EmptyValue(val: string | number): typeof val {
  if (val) {
    return val
  } else {
    return ''
  }
}

export {
  BaseLayer,
  LineLayer,
  WindCircleLayer,
  windRouteCircleLayer,
  forecastRouterLayer,
}
