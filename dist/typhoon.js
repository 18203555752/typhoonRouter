/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base/Layer.ts":
/*!***************************!*\
  !*** ./src/base/Layer.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseLayer": () => (/* binding */ BaseLayer),
/* harmony export */   "LineLayer": () => (/* binding */ LineLayer),
/* harmony export */   "WindCircleLayer": () => (/* binding */ WindCircleLayer),
/* harmony export */   "forecastRouterLayer": () => (/* binding */ forecastRouterLayer),
/* harmony export */   "windRouteCircleLayer": () => (/* binding */ windRouteCircleLayer)
/* harmony export */ });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ "mapbox-gl");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mapBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapBox */ "./src/base/mapBox.ts");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "nanoid");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @turf/turf */ "@turf/turf");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_turf_turf__WEBPACK_IMPORTED_MODULE_3__);




/**
 * 基础图层
 */
class BaseLayer {
    // protected keysTxt:string[] = []
    constructor(map, arr) {
        this.layers = [];
        this.map = map;
        this.geoJson = this.getJeoJson(arr);
        this.addSource(this.geoJson);
    }
    /**
     *获得ids
     */
    get ids() {
        const arr = this.layers.map((layer) => layer.id);
        return arr;
    }
    /**
     * 移除图层
     */
    removeLayer() {
        this.layers.forEach((layer) => {
            try {
                this.map.removeLayer(layer.id);
            }
            catch (error) { }
        });
        this.layers = [];
    }
    /**
     * 移除数据源
     */
    removeSource() {
        try {
            this.map.removeSource(this.sourceId);
        }
        catch (error) { }
    }
    /**
     * 清楚图层
     */
    clearLayer() {
        this.removeLayer();
        this.removeSource();
    }
    /**
     * 增加数据源
     */
    addSource(source) {
        this.sourceId = this.sourceId || (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)();
        this.map.addSource(this.sourceId, source);
        return this.map;
    }
    // 生成geoJson
    getJeoJson(arr) {
        let geoJson = {
            type: 'geojson' /* geojson类型资源 */,
            data: {
                /* geojson数据 */
                type: 'FeatureCollection',
                features: arr,
            },
        };
        return geoJson;
    }
    /**
     * @param key property中字段名称
     * @param offset number[] 偏移量
     * @param anchor 显示位置
     * @returns this
     */
    addCircleLayer(color = '#e43', offset = [0, 0.7], size = 16) {
        const id = 'circle_' + (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)();
        const layer = _mapBox__WEBPACK_IMPORTED_MODULE_1__["default"].getMakerCircleLayer({
            id,
            offset,
            size,
            color,
            source: this.sourceId,
        });
        this.map.addLayer(layer);
        this.layers.push(layer);
        return this;
    }
    addFeature(item) {
        this.geoJson.data.features.push(item);
        // this.geoJson.data.features[0].geometry.coordinates.push(...item.geometry.coordinates)
        //@ts-ignore
        this.map.getSource(this.sourceId).setData(this.geoJson.data);
    }
}
/**
 * 台风路径实线
 */
class LineLayer extends BaseLayer {
    constructor(map, arr) {
        arr = arr || [
            {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: [],
                },
            },
        ];
        super(map, arr);
    }
    /**
     *
     * @param color
     * @param offset
     * @param size
     * @returns
     */
    addLineLayer() {
        const id = 'line_' + (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)();
        const layout = {
            'line-cap': 'round',
            'line-join': 'round',
        };
        const paint = {
            'line-color': '#333',
            'line-width': 2,
            'line-opacity': 0.8,
        };
        const layer = _mapBox__WEBPACK_IMPORTED_MODULE_1__["default"].getLineLayer({
            id,
            layout,
            paint,
            source: this.sourceId,
        });
        this.map.addLayer(layer);
        this.layers.push(layer);
        return this;
    }
    addCoordinates(item) {
        // this.geoJson.data.features.push(item)
        this.geoJson.data.features[0].geometry.coordinates.push([
            item.lng,
            item.lat,
        ]);
        //@ts-ignore
        this.map.getSource(this.sourceId).setData(this.geoJson.data);
    }
}
// 路径上的点
class windRouteCircleLayer extends BaseLayer {
    constructor(map, arr) {
        // this.popup
        super(map, arr);
        this.popup = null;
    }
    /**
     * 清楚图层
     */
    clearLayer() {
        this.removeLayer();
        this.removeSource();
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
        const id = 'circle_' + (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)();
        const layer = _mapBox__WEBPACK_IMPORTED_MODULE_1__["default"].getMakerCircleLayer({
            id,
            offset,
            size,
            color,
            source: this.sourceId,
        });
        this.map.addLayer(layer);
        this.layers.push(layer);
        // this.map.on('click', this.layers[0].id, this.mouseClickFunc.bind(this))
        this.map.on('mouseenter', this.layers[0].id, this.mouseEnterFunc.bind(this));
        this.map.on('mouseleave', this.layers[0].id, this.mouseOutFunc.bind(this));
        return this;
    }
    /**
     * 鼠标移入pointer事件
     * @param e 当前pointer的对象
     */
    mouseEnterFunc(e) {
        this.map.getCanvas().style.cursor = 'pointer';
        // console.log(e.features)
        if (e.features) {
            if (this.popup)
                this.popup.remove();
            this.addPop(e.features[0].properties);
        }
    }
    /**
     * 鼠标移出pointer事件
     * @param e 当前pointer的对象
     */
    mouseOutFunc() {
        this.map.getCanvas().style.cursor = '';
        if (this.popup)
            this.popup.remove();
    }
    addPop(message) {
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
    `;
        this.popup = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().Popup)({ closeOnClick: false })
            .setLngLat([message.lng, message.lat])
            .setHTML(html)
            .addTo(this.map);
        return html;
    }
}
// 风圈
class WindCircleLayer {
    constructor(map, center, arr, color = '#78C5BB') {
        this.step = 180;
        this.geoJson = null;
        this.layer = null;
        this.color = color;
        this.map = map;
        this.arr = arr;
        this.center = center;
        this.getFeatures();
        this.addSource(this.geoJson);
    }
    getFeatures() {
        const step = Math.ceil(this.step / 4);
        this.step = step * 4;
        const coordinates = [];
        let feature;
        this.arr.forEach((r, i) => {
            feature = _turf_turf__WEBPACK_IMPORTED_MODULE_3__.circle(this.center, r, { steps: this.step });
            coordinates.push(...feature.geometry.coordinates[0].slice(i * step, (i + 1) * step + 1));
        });
        // features.forEach(item => {
        //   coordinates.push (...item.geometry.coordinates[0])
        // })
        feature.properties.color = this.color;
        feature.geometry.coordinates[0] = coordinates;
        // console.log(feature)
        this.geoJson = this.getJeoJson([feature]);
    }
    /**
     * 增加数据源
     */
    addSource(source) {
        this.sourceId = this.sourceId || (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)();
        this.map.addSource(this.sourceId, source);
        return this.map;
    }
    /**
     * 画风圈
     * @returns
     */
    addCircleLayer() {
        const layer = _mapBox__WEBPACK_IMPORTED_MODULE_1__["default"].drawFillPolygon(this.sourceId, 0.4);
        this.map.addLayer(layer);
        this.layer = layer;
        return this;
    }
    // 生成geoJson
    getJeoJson(arr) {
        let geoJson = {
            type: 'geojson' /* geojson类型资源 */,
            data: {
                /* geojson数据 */
                type: 'FeatureCollection',
                features: arr,
            },
        };
        return geoJson;
    }
    clearLayer() {
        this.map.getLayer(this.layer.id) && this.map.removeLayer(this.layer.id);
        this.map.getSource(this.sourceId) && this.map.removeSource(this.sourceId);
    }
}
/**
 * 台风路径（预报）虚线
 */
class forecastRouterLayer {
    // protected keysTxt:string[] = []
    constructor(map, data) {
        this.sourceIds = [];
        this.layers = [];
        this.map = map;
        this.circleJson = this.getJeoJson(data);
        this.lineJson = this.getLineJson(data);
        this.addLineLayer();
        this.addCircleLayer();
    }
    /**
     *获得ids
     */
    get ids() {
        const arr = this.layers.map((layer) => layer.id);
        return arr;
    }
    /**
     * 移除图层
     */
    removeLayer() {
        this.layers.forEach((layer) => {
            try {
                this.map.removeLayer(layer.id);
            }
            catch (error) { }
        });
        this.layers = [];
    }
    /**
     * 移除数据源
     */
    removeSource() {
        this.sourceIds.forEach((sourceId) => {
            try {
                this.map.removeSource(sourceId);
            }
            catch (error) { }
        });
        this.sourceIds = [];
    }
    /**
     * 清楚图层
     */
    clearLayer() {
        this.removeLayer();
        this.removeSource();
    }
    /**
     * 增加数据源
     */
    addSource(id, source) {
        this.sourceIds.push(id);
        this.map.addSource(id, source);
        return this.map;
    }
    // 生成pointer的geoJson
    getJeoJson(pointers) {
        let pointerArr = [];
        pointers.forEach((item, index) => {
            if (!index)
                return;
            const el = item;
            el.color = 's' + el.power;
            pointerArr.push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [Number(el.lng), Number(el.lat)],
                },
                properties: el,
            });
        });
        let geoJson = {
            type: 'geojson' /* geojson类型资源 */,
            data: {
                /* geojson数据 */
                type: 'FeatureCollection',
                features: pointerArr,
            },
        };
        return geoJson;
    }
    getLineJson(pointers) {
        const coordinates = [];
        pointers.forEach((item) => {
            coordinates.push([item.lng, item.lat]);
        });
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
        };
    }
    /**
     * @param key property中字段名称
     * @param offset number[] 偏移量
     * @param anchor 显示位置
     * @returns this
     */
    addCircleLayer(color = '#333', offset = [0, 0.7], size = 4) {
        const id = 'circle_' + (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)();
        this.addSource(id, this.circleJson);
        const layer = _mapBox__WEBPACK_IMPORTED_MODULE_1__["default"].getMakerCircleLayer({
            id,
            offset,
            size,
            color,
            source: id,
        });
        this.map.addLayer(layer);
        this.layers.push(layer);
        this.map.on('mouseenter', id, this.mouseEnterFunc.bind(this));
        this.map.on('mouseleave', id, this.mouseOutFunc.bind(this));
        return this;
    }
    addLineLayer() {
        const id = 'line_' + (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)();
        this.addSource(id, this.lineJson);
        const layout = {
            'line-cap': 'round',
            'line-join': 'round',
        };
        const paint = {
            'line-color': '#333',
            'line-width': 2,
            'line-opacity': 0.8,
            'line-dasharray': [2, 4],
        };
        const layer = _mapBox__WEBPACK_IMPORTED_MODULE_1__["default"].getLineLayer({
            id,
            layout,
            paint,
            source: id,
        });
        this.map.addLayer(layer);
        this.layers.push(layer);
        return this;
    }
    /**
     * 鼠标移入pointer事件
     * @param e 当前pointer的对象
     */
    mouseEnterFunc(e) {
        this.map.getCanvas().style.cursor = 'pointer';
        // console.log(e.features)
        if (e.features) {
            if (this.popup)
                this.popup.remove();
            this.addPop(e.features[0].properties);
        }
    }
    /**
     * 鼠标移出pointer事件
     * @param e 当前pointer的对象
     */
    mouseOutFunc() {
        this.map.getCanvas().style.cursor = '';
        if (this.popup)
            this.popup.remove();
    }
    /**
     * 弹出框展示的信息
     * @param message 弹出框展示的信息object
     * @returns
     */
    addPop(message) {
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
    `;
        this.popup = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().Popup)({ closeOnClick: false })
            .setLngLat([message.lng, message.lat])
            .setHTML(html)
            .addTo(this.map);
        return html;
    }
}



/***/ }),

/***/ "./src/base/mapBox.ts":
/*!****************************!*\
  !*** ./src/base/mapBox.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomMap": () => (/* binding */ CustomMap),
/* harmony export */   "PUBLIC_URL": () => (/* binding */ PUBLIC_URL),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ "mapbox-gl");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);

const spriteUrl =  false ? 0 : `http://${window.location.host}`;
const PUBLIC_URL = process.env.BASE_URL;
/**
 * mapbox 工具类
 */
class MapBox {
    /**
     * 获得实例
     * @returns MapBox
     */
    static getInstance() {
        return this.box;
    }
    /**
     * 初始化地图
     * @param id 地图容器id选择器
     * @returns mapbox.Map
     */
    initMap(id, center = [120.553, 29.191], zoom = 5) {
        (mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().accessToken) =
            'pk.eyJ1IjoibGl6aGFuMTIyNyIsImEiOiJja3QyamowNnMwcGprMnhtaDUwbTM3YXdtIn0.rDMU626lA9qzB8Do2cq_hA';
        const style = {
            version: 8,
            glyphs: `${PUBLIC_URL}font/glyphs/{fontstack}/{range}.pbf`,
            sprite: spriteUrl + `${PUBLIC_URL}font/sprite/sprite`,
            sources: {},
            layers: [],
        };
        var map = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().Map)({
            container: id,
            style,
            // style: ,
            zoom: zoom,
            fadeDuration: 0,
            // crossSourceCollisions: true,
            crossSourceCollisions: false,
            preserveDrawingBuffer: true,
            // @ts-ignore
            center: center,
            maxBounds: [
                [116.5, 23.5],
                [125.5, 33],
            ],
        });
        // console.log(style.sources.tian.titles)
        // let styles = [this.getStyles(urlTian), this.getStyles(urlDixing), this.getStyles(urlSatel)]
        // map.setStyle(styles[0])
        return { map };
    }
    /**
     * 绘制线条
     * @param id
     * @param geojson
     */
    getLineLayer(defaultOp = {}) {
        console.log(defaultOp);
        const lineLayer = Object.assign({ id: 'line', type: 'line', source: 'line', layout: {
                'line-cap': 'round',
                'line-join': 'round',
            }, paint: {
                'line-color': '#333',
                'line-width': 1,
                'line-dasharray': [2, 4],
                'line-opacity': 0.8,
            } }, defaultOp);
        return lineLayer;
    }
    getFillLayer({ source = 'zhejiang', id = 'zhejiang' }) {
        const fillLayer = {
            id: id,
            type: 'fill',
            source: source,
            layout: {},
            paint: {
                'fill-color': '#fff',
                'fill-opacity': 1,
                'fill-outline-color': '#0f0',
            },
        };
        return fillLayer;
    }
    /**
     * 绘制标记点
     * @param color 色标颜色
     * @param source 数据源字段
     * @returns  mapbox.CircleLayer
     */
    getMakerCircleLayer(defaultOp = {}) {
        let typhoonColors = [
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
        ];
        console.log(defaultOp);
        const op = Object.assign({ id: 'labelLayer', size: 12, offset: [0, 0.7], color: '#333', source: 'points', textAllowOverlap: false, visibility: false }, defaultOp);
        const layerCircle = {
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
        };
        return layerCircle;
    }
    /**
     * 绘制海量点图层
     * @param stationColors 色标颜色
     * @param source 数据源字段
     * @returns  mapbox.CircleLayer
     */
    getCircleLayer(stationColors, source = 'points', id = 'pointLayer', baseSize = 2.5) {
        const layerCircle = {
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
        };
        return layerCircle;
    }
    /**
     * 生成标签文本图层
     * @param value 显示文本字段名称
     * @param source 数据源字段
     * @returns mapbox.SymbolLayer
     */
    getTextLayer(defaultOp = {}) {
        const op = Object.assign({ id: 'labelLayer', fontSize: 12, offset: [0, 0.7], txtColor: '#333', anchor: 'top', source: 'points', textAllowOverlap: false, visibility: false }, defaultOp);
        // anchor = anchor ? anchor : 'top'
        let txt = op.txtColor;
        if (typeof op.txtColor == 'object') {
            txt = ['match', ['get', 'color'], ...op.txtColor, '#333'];
            op.txtColor = txt;
        }
        // if(op.zoom){
        const layerValue = {
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
                visibility: (op.visibility ? 'visible' : 'none'),
                // 'icon-image': 'wind-15' /* 图标图像 */,
                'text-field': 
                //@ts-ignore
                `{${op.value}}` /* 使用text标签显示的值，Feature属性使用{域名}格式*/,
                // 'text-font': ['wind'],
                'text-font': ['RobotoRegular'] /* 文本字体 */,
                'text-allow-overlap': op.textAllowOverlap,
                'text-ignore-placement': op.textAllowOverlap,
                'text-size': op.fontSize,
                'text-offset': op.offset /* 该属性表示文本偏移锚点的距离，正值表示向右和向下，负值表示向左和向上 */,
                //@ts-ignore
                'text-anchor': op.anchor /* 该属性设置文本中最接近锚点的部分，top表示文本的顶端放置到最接近锚点的位置 */,
            },
        };
        return layerValue;
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
        const op = Object.assign({ id: 'imgId', iconImg: 'wind-0', txtName: 'name', fontSize: 12, offset: [0, 0], txtColor: '#333', anchor: 'top', source: 'points', textAllowOverlap: false, visibility: false, rotate: 'direction', iconSize: 0.8 }, defaultOp);
        const layerValue = {
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
        };
        return layerValue;
    }
    /**
     * 生成图片标签图层
     * @param rotate 旋转角度
     * @param source 数据源字段
     * @param iconImg 图名称
     * @returns mapbox.SymbolLayer
     */
    getLightImageLayer(id, iconImg = 'wind-0', name = 'name', source = 'points', rotate = 'direction', offset = [0, 0.0]) {
        let obj = {};
        if (name) {
            console.log(name, '232323');
            obj = {
                'text-field': `{${name}}` /* 使用text标签显示的值，Feature属性使用{域名}格式*/,
                // 'text-font': ['wind'],
                'text-font': ['RobotoRegular'] /* 文本字体 */,
                'text-size': 11,
                'text-offset': offset /* 该属性表示文本偏移锚点的距离，正值表示向右和向下，负值表示向左和向上 */,
                'text-anchor': 'top',
                'text-allow-overlap': true,
                'text-ignore-placement': true,
            };
        }
        const layerValue = {
            id: id,
            type: 'symbol' /* symbol类型layer，一般用来绘制点*/,
            source: source,
            paint: {
                // 'text-color':'transparent'
                'text-opacity': 1.0,
            },
            layout: Object.assign(Object.assign({}, obj), { 'icon-ignore-placement': true, 'icon-allow-overlap': true, 'icon-size': 0.8, 'icon-image': `{${iconImg}}` /* 图标图像 */, 'icon-rotate': ['number', ['get', rotate]], 'icon-offset': [4, -10] }),
        };
        return layerValue;
    }
    /**
     *
     * @param lineColor 线颜色
     * @param source 数据源
     * @returns
     */
    drawMultiPolygon(lineColor = 'rgba(0,0,0,0.8)', source = 'bounds', lineWidth = 2) {
        let layer = {
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
        };
        return layer;
    }
    /**
     *
     * @param lineColor 线颜色
     * @param source 数据源
     * @returns
     */
    drawFillPolygon(source = 'bounds', opacity = 0.7) {
        let layer = {
            id: source,
            type: 'fill' /* fill类型layer */,
            source: source,
            layout: {},
            paint: {
                'fill-color': ['get', 'color'] /* fill颜色 */,
                'fill-opacity': opacity /* fill透明度 */,
                'fill-outline-color': '#888',
            },
        };
        return layer;
    }
    /**
     * 图片样式
     * @param url
     * @returns
     */
    getStyles(url) {
        const style = {
            version: 8,
            glyphs: `${PUBLIC_URL}font/glyphs/{fontstack}/{range}.pbf`,
            sprite: spriteUrl + `${PUBLIC_URL}font/sprite/sprite`,
            sources: {
                tian: this.getTile(url),
                // tian: {
                //
                //   type: 'raster',
                //   tiles: [
                //     // "http://172.21.129.15/geoserver/gwc/service/wms?service=WMS&version=1.1.1&request=GetMap&layers=tianditu:ZJ_kx_tianditu_dxL01&styles=&bbox={bbox-epsg-3857}&width=256&height=256&srs=EPSG:3857&format=image/png&TRANSPARENT=TRUE",
                //     url,
                //
                //     // urlDixing, urlSatel
                //     // 'http://t3.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=5a1d34815475f88e6d8802da6be832ae',
                //   ],
                //   tileSize: 256,
                // },
            },
            layers: [{ id: 'tian', type: 'raster', source: 'tian' }],
        };
        return style;
    }
    /**
     * 获得天空背景
     */
    getSkyLayer() {
        const layer = {
            id: 'sky',
            type: 'sky',
            paint: {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 0.0],
                'sky-atmosphere-sun-intensity': 15,
            },
        };
        return layer;
    }
    /**
     * 瓦片图
     * @param url
     */
    getTile(url) {
        return {
            type: 'raster',
            tiles: [
                // "http://172.21.129.15/geoserver/gwc/service/wms?service=WMS&version=1.1.1&request=GetMap&layers=tianditu:ZJ_kx_tianditu_dxL01&styles=&bbox={bbox-epsg-3857}&width=256&height=256&srs=EPSG:3857&format=image/png&TRANSPARENT=TRUE",
                url,
            ],
            tileSize: 256,
        };
    }
    /**
     * 添加地图资源
     * @param map
     * @param sourceId
     * @param url
     */
    addSorceLayer(map, sourceId, url, layerId = 'layerId') {
        map.addSource(sourceId, this.getTile(url));
        const wmtsLayer = {
            id: layerId,
            type: 'raster',
            source: sourceId,
            minZoom: 1,
            maxZoom: 18,
            // paint: {
            //   "raster-opacity": 1,
            // },
        };
        map.addLayer(wmtsLayer);
        return wmtsLayer;
    }
    getImg() {
        // const layer:mapbox.ImageSourceOptions
    }
    /**
     *绘制标记点
     * @param arr 经纬度
     * @param op 标记点参数
     * @returns
     */
    drawMaker(map, arr, op = {}) {
        return new (mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().Marker)(op).setLngLat(arr).addTo(map);
    }
    /**
     * 绘制弹窗提示
     * @param map
     * @param arr
     * @param op
     * @returns
     */
    drawPopup(map, arr, op = { closeButton: false, closeOnClick: false }) {
        if (map && arr)
            return new (mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().Popup)(op).setLngLat(arr).addTo(map);
        return new (mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().Popup)({ closeButton: false, closeOnClick: false });
    }
}
MapBox.box = new MapBox();
const CustomMap = (mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapBox.getInstance());


/***/ }),

/***/ "./src/base/windCircle.ts":
/*!********************************!*\
  !*** ./src/base/windCircle.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWindCircle": () => (/* binding */ createWindCircle)
/* harmony export */ });
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layer */ "./src/base/Layer.ts");

/**
 * 台风中心风圈
 * @param map
 * @param pointer
 * @returns
 */
function createWindCircle(map, pointer) {
    let radius7;
    let radius10;
    let radius12;
    console.log(pointer);
    const quad7 = Object.values(pointer.radius7_quad).reverse();
    const quad10 = Object.values(pointer.radius10_quad).reverse();
    const quad12 = Object.values(pointer.radius12_quad).reverse();
    if (pointer.radius7)
        radius7 = new _Layer__WEBPACK_IMPORTED_MODULE_0__.WindCircleLayer(map, [pointer.lng, pointer.lat], quad7, '#62E3CE').addCircleLayer();
    if (pointer.radius7)
        radius10 = new _Layer__WEBPACK_IMPORTED_MODULE_0__.WindCircleLayer(map, [pointer.lng, pointer.lat], quad10, '#62E371').addCircleLayer();
    if (pointer.radius7)
        radius12 = new _Layer__WEBPACK_IMPORTED_MODULE_0__.WindCircleLayer(map, [pointer.lng, pointer.lat], quad12, '#A5E362').addCircleLayer();
    return function () {
        if (radius7)
            radius7.clearLayer();
        if (quad10)
            radius10.clearLayer();
        if (radius12)
            radius12.clearLayer();
    };
}


/***/ }),

/***/ "./src/myAnimation.ts":
/*!****************************!*\
  !*** ./src/myAnimation.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ myAnimation)
/* harmony export */ });
function myAnimation(parmas) {
    let current = 0;
    const length = parmas.length - 1;
    const callBack = parmas.callBack;
    const successCallback = parmas.successCallback;
    const looping = () => {
        let looped = requestAnimationFrame(looping);
        // console.log(current)
        if (current < length) {
            callBack(current);
            current = current + 1 >= length ? length : current + 1;
        }
        else {
            // console.log(current)
            callBack(current);
            cancelAnimationFrame(looped);
            looped = null;
            successCallback && successCallback();
        }
    };
    looping();
}


/***/ }),

/***/ "mapbox-gl":
/*!*************************!*\
  !*** external "mapbox" ***!
  \*************************/
/***/ ((module) => {

module.exports = mapbox;

/***/ }),

/***/ "nanoid":
/*!*************************!*\
  !*** external "nanoid" ***!
  \*************************/
/***/ ((module) => {

module.exports = nanoid;

/***/ }),

/***/ "@turf/turf":
/*!***********************!*\
  !*** external "turf" ***!
  \***********************/
/***/ ((module) => {

module.exports = turf;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/typhoon.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ "mapbox-gl");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/Layer */ "./src/base/Layer.ts");
/* harmony import */ var _myAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myAnimation */ "./src/myAnimation.ts");
/* harmony import */ var _base_windCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/windCircle */ "./src/base/windCircle.ts");




// class
class Typhoon {
    constructor(map, data) {
        this.forecastData = [];
        this.forecastLayer = [];
        this.map = map;
        this.live_marker = null;
        this.data = data;
        console.log(data);
        this.drawLive();
    }
    drawLive() {
        // 台风路径上的线 line
        this.live_line = new _base_Layer__WEBPACK_IMPORTED_MODULE_1__.LineLayer(this.map);
        this.live_line.addLineLayer();
        // 台风路径上的点 pointer
        this.live_circle = new _base_Layer__WEBPACK_IMPORTED_MODULE_1__.windRouteCircleLayer(this.map, []);
        this.live_circle.addCircleLayer('#333', [0, 0], 4);
        this.addForecast();
        // 台风图标
        const div = document.createElement('div');
        div.innerHTML = `<div class="img-pos"></div>`;
        let data = this.data[0].points;
        // 风圈
        console.log(data);
        this.live_marker = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default().Marker)({ element: div });
        // 渲染路径的每一步
        const callBack = (cur) => {
            this.live_line.addCoordinates(data[cur]);
            this.live_circle.addFeature(this.getFeature(cur, data));
            if (this.live_marker) {
                const el = this.live_marker.getElement();
                el.innerHTML = `<div class="img-pos s${data[cur].power}"></div>`;
                this.live_marker
                    .setLngLat([data[cur].lng, data[cur].lat])
                    .addTo(this.map);
            }
        };
        // 渲染路径完成后的成功回调
        const successBack = () => {
            if (this.live_marker) {
                const el = this.live_marker.getElement();
                const child = el.querySelector('div');
                if (child) {
                    child.className += ' active';
                }
            }
            console.log(this.live_circle);
            this.drawWindCircle(data[data.length - 1]);
        };
        // 调用动画
        (0,_myAnimation__WEBPACK_IMPORTED_MODULE_2__["default"])({
            length: this.data[0].points.length,
            successCallback: successBack,
            callBack: callBack,
        });
    }
    drawWindCircle(pointer) {
        (0,_base_windCircle__WEBPACK_IMPORTED_MODULE_3__.createWindCircle)(this.map, pointer);
    }
    drawForecast() {
        this.forecastLayer.forEach((layer) => {
            layer.clearLayer();
        });
        this.forecastLayer = [];
        this.forecastData.forEach((data) => {
            this.forecastLayer.push(new _base_Layer__WEBPACK_IMPORTED_MODULE_1__.forecastRouterLayer(this.map, data));
        });
    }
    getFeature(n, data) {
        const el = data[n];
        el.color = 's' + el.power;
        return {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [Number(el.lng), Number(el.lat)],
            },
            properties: el,
        };
    }
    /**
     * 添加预报路径
     */
    addForecast() {
        this.map.on('click', this.live_circle.layers[0].id, (e) => {
            if (e.features) {
                console.log(e.features[0].properties);
                this.forecastData = [
                    getthisPoointerForecast(e.features[0].properties, 0.5),
                    getthisPoointerForecast(e.features[0].properties, 0.8),
                ];
                console.log(this.forecastData);
                this.drawForecast();
            }
        });
    }
}
function getthisPoointerForecast(pointer, ratio) {
    let arr = [];
    for (let i = 0; i < 6; i++) {
        let lng = pointer.lng + ratio * (Math.random() * i);
        let lat = pointer.lat + ratio * i;
        arr.push({
            color: '8',
            forecast: null,
            lat,
            lng,
            move_dir: '西西北',
            move_speed: 25,
            power: 8,
            pressure: 998,
        });
    }
    return arr;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typhoon);

})();

/******/ })()
;
//# sourceMappingURL=typhoon.js.map