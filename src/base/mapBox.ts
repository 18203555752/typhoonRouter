import type mapbox from 'mapbox-gl'

interface TxtLayerOP {
  [key: string]: any
  textAllowOverlap?: boolean // 取消碰撞
  id?: string // 图层id
  fontSize?: number // 字体大小
  offset?: number[] // 字体偏移量
  txtColor?: string // 字体颜色
  anchor?: string // 字体对齐
  source?: string // 图层源
  visibility?: boolean // 图层是否显示
  value?: string // 获取字段
}

/**
 * mapbox 工具类
 */
class MapBox {
  private static box = new MapBox()

  /**
   * 获得实例
   * @returns MapBox
   */
  static getInstance() {
    return this.box
  }

  /**
   * 绘制线条
   * @param id
   * @param geojson
   */
  getLineLayer(defaultOp = {}) {
    // console.log(defaultOp)
    const lineLayer: mapbox.LineLayer = {
      id: 'line',
      type: 'line',
      source: 'line',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-color': '#333',
        'line-width': 1,
        'line-dasharray': [2, 4],
        'line-opacity': 0.8,
      },
      ...defaultOp,
    }
    return lineLayer
  }
  getFillLayer({ source = 'zhejiang', id = 'zhejiang' }) {
    const fillLayer: mapbox.FillLayer = {
      id: id,
      type: 'fill',
      source: source,
      layout: {},
      paint: {
        'fill-color': '#fff',
        'fill-opacity': 1,
        'fill-outline-color': '#0f0',
      },
    }

    return fillLayer
  }

  /**
   * 绘制标记点
   * @param color 色标颜色
   * @param source 数据源字段
   * @returns  mapbox.CircleLayer
   */
  getMakerCircleLayer(defaultOp = {}) {
    let typhoonColors: string[] = [
      's6',
      '#30fc31',
      's7',
      '#30fc31',
      's8',
      '#307efa',
      's9',
      '#307efa',
      's10',
      '#fffc00',
      's11',
      '#fffc00',
      's12',
      '#ff9c00',
      's13',
      '#ff9c00',
      's14',
      '#fb7cff',
      's15',
      '#fb7cff',
      's16',
      '#fa3030',
      's17',
      '#fa3030',
      's18',
      '#fa3030',
      's19',
      '#fa3030',
      's20',
      '#fa3030',
    ]
    // console.log(defaultOp)
    const op = {
      id: 'labelLayer',
      size: 12,
      offset: [0, 0.7],
      color: '#333',

      source: 'points',
      textAllowOverlap: false,
      visibility: false,
      ...defaultOp,
    }

    const layerCircle: mapbox.CircleLayer = {
      id: op.id,
      type: 'circle',
      source: op.source,
      layout: {},
      paint: {
        'circle-radius': {
          base: op.size,
          stops: [
            [12, op.size],
            [22, 180],
          ],
        },
        // 'fill-extrusion':'none',
        'circle-opacity': 1.0,
        'circle-translate': op.offset,
        'circle-stroke-width': 1,
        'circle-stroke-opacity': 0.8,
        'circle-stroke-color': op.color,
        'circle-color': ['match', ['get', 'color'], ...typhoonColors, op.color],
      },
    }
    return layerCircle
  }

  /**
   * 绘制海量点图层
   * @param stationColors 色标颜色
   * @param source 数据源字段
   * @returns  mapbox.CircleLayer
   */
  getCircleLayer(
    stationColors: any[],
    source = 'points',
    id = 'pointLayer',
    baseSize = 2.5
  ) {
    const layerCircle: mapbox.CircleLayer = {
      id: id,
      type: 'circle',
      source: source,
      paint: {
        'circle-radius': {
          base: baseSize,
          stops: [
            [12, baseSize],
            [22, 180],
          ],
        },
        'circle-color': ['match', ['get', 'color'], ...stationColors, '#333'],
      },
    }
    return layerCircle
  }

  /**
   * 生成标签文本图层
   * @param value 显示文本字段名称
   * @param source 数据源字段
   * @returns mapbox.SymbolLayer
   */
  getTextLayer(defaultOp: TxtLayerOP = {}) {
    const op = {
      id: 'labelLayer',
      fontSize: 12,
      offset: [0, 0.7],
      txtColor: '#333',
      anchor: 'top',
      source: 'points',
      textAllowOverlap: false,
      visibility: false,
      ...defaultOp,
    }

    // anchor = anchor ? anchor : 'top'
    let txt: string | mapbox.Expression = op.txtColor
    if (typeof op.txtColor == 'object') {
      txt = ['match', ['get', 'color'], ...op.txtColor, '#333']
      op.txtColor = txt
    }

    // if(op.zoom){
    const layerValue: mapbox.SymbolLayer = {
      id: op.id,

      type: 'symbol' /* symbol类型layer，一般用来绘制点*/,
      source: op.source,
      // paint: {
      //   "text-color": txt
      // },
      paint: {
        'text-color': op.txtColor,
      },
      layout: {
        visibility: (op.visibility ? 'visible' : 'none') as mapbox.Visibility,
        // 'icon-image': 'wind-15' /* 图标图像 */,
        'text-field':
          //@ts-ignore
          `{${op.value}}` /* 使用text标签显示的值，Feature属性使用{域名}格式*/,
        // 'text-font': ['wind'],
        'text-font': ['RobotoRegular'] /* 文本字体 */,
        'text-allow-overlap': op.textAllowOverlap,
        'text-ignore-placement': op.textAllowOverlap,
        'text-size': op.fontSize,
        'text-offset':
          op.offset /* 该属性表示文本偏移锚点的距离，正值表示向右和向下，负值表示向左和向上 */,
        //@ts-ignore
        'text-anchor':
          op.anchor /* 该属性设置文本中最接近锚点的部分，top表示文本的顶端放置到最接近锚点的位置 */,
      },
    }
    return layerValue
    // }else{
    //   const layerValue: mapbox.SymbolLayer = {
    //     id: op.id,

    //     type: 'symbol' /* symbol类型layer，一般用来绘制点*/,
    //     source: op.source,
    //     paint: {
    //       "text-color": txt
    //     },
    //     layout: {
    //       // 'icon-image': 'wind-15' /* 图标图像 */,
    //       'text-field':
    //         //@ts-ignore
    //         `{${op.value}}` /* 使用text标签显示的值，Feature属性使用{域名}格式*/,
    //       // 'text-font': ['wind'],
    //       'text-font': ['RobotoRegular'] /* 文本字体 */,
    //       // "text-allow-overlap": true,
    //       // "text-ignore-placement": true,
    //       'text-size': op.fontSize,
    //       'text-offset': op.offset/* 该属性表示文本偏移锚点的距离，正值表示向右和向下，负值表示向左和向上 */,
    //       //@ts-ignore
    //       'text-anchor':
    //         op.anchor /* 该属性设置文本中最接近锚点的部分，top表示文本的顶端放置到最接近锚点的位置 */,
    //     },
    //   }
    //   return layerValue;

    // }
  }

  /**
   * 生成图片标签图层
   * @param rotate 旋转角度
   * @param source 数据源字段
   * @param iconImg 图名称
   * @returns mapbox.SymbolLayer
   */
  /**
   * 生成图片标签图层
   * @param rotate 旋转角度
   * @param source 数据源字段
   * @param iconImg 图名称
   * @returns mapbox.SymbolLayer
   */
  getImageLayer(defaultOp = {}) {
    const op = {
      id: 'imgId',
      iconImg: 'wind-0',
      txtName: 'name',
      fontSize: 12,
      offset: [0, 0],
      txtColor: '#333',
      anchor: 'top',
      source: 'points',
      textAllowOverlap: false,
      visibility: false,
      rotate: 'direction',
      iconSize: 0.8,
      ...defaultOp,
    }
    const layerValue: mapbox.SymbolLayer = {
      id: op.id,
      type: 'symbol' /* symbol类型layer，一般用来绘制点*/,
      source: op.source,
      paint: {
        // 'text-color':'transparent'
        'text-opacity': 1.0,
      },
      layout: {
        // 'text-field':

        //   `{${op.txtName}}`, /* 使用text标签显示的值，Feature属性使用{域名}格式*/
        // // 'text-font': ['wind'],
        // 'text-font': ['RobotoRegular'] /* 文本字体 */,
        // 'text-size': 11,
        // 'text-offset': op.offset /* 该属性表示文本偏移锚点的距离，正值表示向右和向下，负值表示向左和向上 */,
        // 'text-anchor':
        //   'top',
        //   'top',
        // "text-allow-overlap": true,
        // "text-ignore-placement":true,
        'text-allow-overlap': op.textAllowOverlap,
        'text-ignore-placement': op.textAllowOverlap,
        'icon-ignore-placement': op.textAllowOverlap,
        'icon-allow-overlap': op.textAllowOverlap,
        // "icon-ignore-placement":true,
        // "icon-allow-overlap": true,
        'icon-size': op.iconSize,
        'icon-image': `{${op.iconImg}}` /* 图标图像 */,
        'icon-rotate': ['number', ['get', op.rotate]],
        'icon-offset': [4, -10],
      },
    }
    return layerValue
  }
  /**
   * 生成图片标签图层
   * @param rotate 旋转角度
   * @param source 数据源字段
   * @param iconImg 图名称
   * @returns mapbox.SymbolLayer
   */
  getLightImageLayer(
    id: string,
    iconImg = 'wind-0',
    name = 'name',
    source = 'points',
    rotate = 'direction',
    offset = [0, 0.0]
  ) {
    let obj = {}
    if (name) {
      // console.log(name, '232323')
      obj = {
        'text-field': `{${name}}` /* 使用text标签显示的值，Feature属性使用{域名}格式*/,
        // 'text-font': ['wind'],
        'text-font': ['RobotoRegular'] /* 文本字体 */,
        'text-size': 11,
        'text-offset':
          offset /* 该属性表示文本偏移锚点的距离，正值表示向右和向下，负值表示向左和向上 */,
        'text-anchor': 'top',
        'text-allow-overlap': true,
        'text-ignore-placement': true,
      }
    }
    const layerValue: mapbox.SymbolLayer = {
      id: id,
      type: 'symbol' /* symbol类型layer，一般用来绘制点*/,
      source: source,
      paint: {
        // 'text-color':'transparent'
        'text-opacity': 1.0,
      },
      layout: {
        ...obj,
        'icon-ignore-placement': true,

        'icon-allow-overlap': true,
        'icon-size': 0.8,
        'icon-image': `{${iconImg}}` /* 图标图像 */,
        'icon-rotate': ['number', ['get', rotate]],
        'icon-offset': [4, -10],
      },
    }
    return layerValue
  }
  /**
   *
   * @param lineColor 线颜色
   * @param source 数据源
   * @returns
   */
  drawMultiPolygon(
    lineColor = 'rgba(0,0,0,0.8)',
    source = 'bounds',
    lineWidth = 2
  ) {
    let layer: mapbox.LineLayer = {
      id: source,
      type: 'line' /* fill类型layer */,
      source: source,
      // layout: {},
      layout: {
        // 'text-size': 10,
        // 'symbol-placement': 'point',
        // 'text-field': '{NAME}', // 显示注记字段
        //  "text-field": [
        //   'format',
        //   ['get', '属性'],
        //   { 'font-scale': 1.5 },
        //   '\n',
        //   {},
        //   ['get', '属性'],
        //   {
        //     'font-scale': 1.0,
        //     'text-font': [
        //       'literal',
        //       ['DIN Offc Pro Italic', 'Arial Unicode MS Regular']
        //     ],
        //     'text-color': 'red',
        //   }
        // ]
        // 'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'], // 默认使用mapbox官网字体库
        // 'text-offset': [0, 0.6],
        // 'text-anchor': 'top'
      },
      paint: {
        // 'fill-color': '#088' /* fill颜色 */,
        // 'fill-opacity': 0.8 /* fill透明度 */,
        'line-color': lineColor,
        'line-width': lineWidth,
      },
    }
    return layer
  }
  /**
   *
   * @param lineColor 线颜色
   * @param source 数据源
   * @returns
   */
  drawFillPolygon(source = 'bounds', opacity = 0.7) {
    let layer: mapbox.FillLayer = {
      id: source,
      type: 'fill' /* fill类型layer */,
      source: source,
      layout: {},
      paint: {
        'fill-color': ['get', 'color'] /* fill颜色 */,
        'fill-opacity': opacity /* fill透明度 */,
        'fill-outline-color': '#888',
      },
    }
    return layer
  }

  /**
   * 获得天空背景
   */
  getSkyLayer() {
    const layer: mapbox.SkyLayer = {
      id: 'sky',
      type: 'sky',
      paint: {
        'sky-type': 'atmosphere',
        'sky-atmosphere-sun': [0.0, 0.0],
        'sky-atmosphere-sun-intensity': 15,
      },
    }
    return layer
  }

  /**
   * 瓦片图
   * @param url
   */
  getTile(url: string) {
    return {
      type: 'raster',
      tiles: [
        // "http://172.21.129.15/geoserver/gwc/service/wms?service=WMS&version=1.1.1&request=GetMap&layers=tianditu:ZJ_kx_tianditu_dxL01&styles=&bbox={bbox-epsg-3857}&width=256&height=256&srs=EPSG:3857&format=image/png&TRANSPARENT=TRUE",
        url,
      ],
      tileSize: 256,
    } as mapbox.AnySourceData
  }

  /**
   * 添加地图资源
   * @param map
   * @param sourceId
   * @param url
   */
  addSorceLayer(
    map: mapbox.Map,
    sourceId: string,
    url: string,
    layerId = 'layerId'
  ) {
    map.addSource(sourceId, this.getTile(url))
    const wmtsLayer = {
      id: layerId,
      type: 'raster',
      source: sourceId,
      minZoom: 1,
      maxZoom: 18,
      // paint: {
      //   "raster-opacity": 1,
      // },
    } as mapbox.AnyLayer
    map.addLayer(wmtsLayer)
    return wmtsLayer
  }
}

export const CustomMap = MapBox
export default MapBox.getInstance()
