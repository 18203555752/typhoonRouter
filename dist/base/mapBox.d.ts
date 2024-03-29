import type mapbox from 'mapbox-gl';
interface TxtLayerOP {
    [key: string]: any;
    textAllowOverlap?: boolean;
    id?: string;
    fontSize?: number;
    offset?: number[];
    txtColor?: string;
    anchor?: string;
    source?: string;
    visibility?: boolean;
    value?: string;
}
/**
 * mapbox 工具类
 */
declare class MapBox {
    private static box;
    /**
     * 获得实例
     * @returns MapBox
     */
    static getInstance(): MapBox;
    /**
     * 绘制线条
     * @param id
     * @param geojson
     */
    getLineLayer(defaultOp?: {}): mapbox.LineLayer;
    getFillLayer({ source, id }: {
        source?: string | undefined;
        id?: string | undefined;
    }): mapbox.FillLayer;
    /**
     * 绘制标记点
     * @param color 色标颜色
     * @param source 数据源字段
     * @returns  mapbox.CircleLayer
     */
    getMakerCircleLayer(defaultOp?: {}): mapbox.CircleLayer;
    /**
     * 绘制海量点图层
     * @param stationColors 色标颜色
     * @param source 数据源字段
     * @returns  mapbox.CircleLayer
     */
    getCircleLayer(stationColors: any[], source?: string, id?: string, baseSize?: number): mapbox.CircleLayer;
    /**
     * 生成标签文本图层
     * @param value 显示文本字段名称
     * @param source 数据源字段
     * @returns mapbox.SymbolLayer
     */
    getTextLayer(defaultOp?: TxtLayerOP): mapbox.SymbolLayer;
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
    getImageLayer(defaultOp?: {}): mapbox.SymbolLayer;
    /**
     * 生成图片标签图层
     * @param rotate 旋转角度
     * @param source 数据源字段
     * @param iconImg 图名称
     * @returns mapbox.SymbolLayer
     */
    getLightImageLayer(id: string, iconImg?: string, name?: string, source?: string, rotate?: string, offset?: number[]): mapbox.SymbolLayer;
    /**
     *
     * @param lineColor 线颜色
     * @param source 数据源
     * @returns
     */
    drawMultiPolygon(lineColor?: string, source?: string, lineWidth?: number, layerId?: string): mapbox.LineLayer;
    /**
     *
     * @param lineColor 线颜色
     * @param source 数据源
     * @returns
     */
    drawFillPolygon(source?: string, opacity?: number): mapbox.FillLayer;
    /**
     * 获得天空背景
     */
    getSkyLayer(): mapbox.SkyLayer;
    /**
     * 瓦片图
     * @param url
     */
    getTile(url: string): mapbox.AnySourceData;
    /**
     * 添加地图资源
     * @param map
     * @param sourceId
     * @param url
     */
    addSorceLayer(map: mapbox.Map, sourceId: string, url: string, layerId?: string): mapbox.AnyLayer;
}
export declare const CustomMap: typeof MapBox;
declare const _default: MapBox;
export default _default;
