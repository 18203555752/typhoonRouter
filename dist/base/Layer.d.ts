import type { MapboxGeoJSONFeature } from 'mapbox-gl';
import type mapboxgl from 'mapbox-gl';
import type { WindCircle } from './windCircle';
export interface HasFeater extends mapboxgl.MapMouseEvent {
    features?: MapboxGeoJSONFeature[];
}
/**
 * 基础图层
 */
declare class BaseLayer {
    protected map: mapboxgl.Map;
    protected sourceId: string;
    protected layers: mapboxgl.Layer[];
    protected geoJson: any;
    protected mapbox: typeof mapboxgl;
    constructor(mapbox: typeof mapboxgl, map: mapboxgl.Map, arr: Array<any>);
    /**
     *获得ids
     */
    get ids(): string[];
    /**
     * 移除图层
     */
    protected removeLayer(): void;
    /**
     * 移除数据源
     */
    protected removeSource(): void;
    /**
     * 清楚图层
     */
    clearLayer(): void;
    /**
     * 增加数据源
     */
    protected addSource(source: any): mapboxgl.Map;
    protected getJeoJson(arr: Array<any>): {
        type: string;
        data: {
            type: string;
            features: any[];
        };
    };
    /**
     * @param key property中字段名称
     * @param offset number[] 偏移量
     * @param anchor 显示位置
     * @returns this
     */
    addCircleLayer(color?: string, offset?: number[], size?: number): this;
    addFeature(item: any): void;
    setFeature(features: any): void;
}
/**
 * 台风路径实线
 */
declare class LineLayer extends BaseLayer {
    constructor(mapbox: typeof mapboxgl, map: mapboxgl.Map, arr?: any[]);
    /**
     *
     * @param color
     * @param offset
     * @param size
     * @returns
     */
    addLineLayer(): this;
    addCoordinates(item: any): void;
    setCoordinates(data: any): void;
}
declare class windRouteCircleLayer extends BaseLayer {
    protected popup: mapboxgl.Popup | null;
    protected popup_name: mapboxgl.Popup | null;
    protected data: any;
    constructor(mapbox: typeof mapboxgl, map: mapboxgl.Map, arr: any[], data: any);
    /**
     * @desc 清除图层
     */
    clearLayer(): void;
    /**
     * @desc 添加图层
     * @param key property中字段名称
     * @param offset number[] 偏移量
     * @param anchor 显示位置
     * @returns this
     */
    addCircleLayer(color?: string, offset?: number[], size?: number): this;
    /**
     * @desc 鼠标移入pointer事件
     * @param e 当前pointer的对象
     */
    mouseEnterFunc(e: HasFeater): void;
    /**
     * @desc 鼠标移出pointer事件
     * @param e 当前pointer的对象
     */
    mouseOutFunc(): void;
    addNamePop(data: any): string;
    addPop(message: WindCircle): string;
}
declare class WindCircleLayer {
    protected map: mapboxgl.Map;
    protected arr: number[];
    protected center: number[];
    protected step: number;
    protected geoJson: any;
    layer: mapboxgl.Layer | null;
    protected color: string;
    sourceId: any;
    protected popup_name: mapboxgl.Popup | null;
    mapbox: typeof mapboxgl;
    protected name: string;
    constructor(mapbox: typeof mapboxgl, map: mapboxgl.Map, center: number[], arr: number[], color?: string, name?: string);
    private getFeatures;
    /**
     * @desc 增加数据源
     */
    protected addSource(source: any): mapboxgl.Map;
    /**
     * @desc 画风圈
     * @returns
     */
    addCircleLayer(): this;
    /**
     * @desc 风圈添加鼠标移动事件
     * @returns
     */
    showWindRadius: (e: HasFeater) => void;
    moveWindRadius: (e: HasFeater) => void;
    addPop(pointLike: any): string;
    removePop: () => void;
    movePop: (pointLike: any) => void;
    protected getJeoJson(arr: Array<any>): {
        type: string;
        data: {
            type: string;
            features: any[];
        };
    };
    refresh(center: number[], arr: number[]): void;
    clearLayer(): void;
}
/**
 * 台风路径（预报）虚线
 */
declare class forecastRouterLayer {
    protected sourceIds: string[];
    protected map: mapboxgl.Map;
    protected layers: mapboxgl.Layer[];
    protected circleJson: any;
    protected lineJson: any;
    protected popup: mapboxgl.Popup;
    protected mapbox: typeof mapboxgl;
    constructor(mapbox: typeof mapboxgl, map: mapboxgl.Map, data: Array<any>);
    /**
     *获得ids
     */
    get ids(): string[];
    /**
     * 移除图层
     */
    protected removeLayer(): void;
    /**
     * 移除数据源
     */
    protected removeSource(): void;
    /**
     * 清楚图层
     */
    clearLayer(): void;
    /**
     * 增加数据源
     */
    protected addSource(id: string, source: any): mapboxgl.Map;
    protected getJeoJson(pointers: Array<WindCircle>): {
        type: string;
        data: {
            type: string;
            features: any;
        };
    };
    protected getLineJson(pointers: Array<WindCircle>): {
        type: string;
        data: {
            type: string;
            features: {
                type: string;
                geometry: {
                    type: string;
                    coordinates: any;
                };
            }[];
        };
    };
    /**
     * @param key property中字段名称
     * @param offset number[] 偏移量
     * @param anchor 显示位置
     * @returns this
     */
    addCircleLayer(color?: string, offset?: number[], size?: number): this;
    addLineLayer(strokeColor: string): this;
    /**
     * 鼠标移入pointer事件
     * @param e 当前pointer的对象
     */
    mouseEnterFunc(e: HasFeater): void;
    /**
     * 鼠标移出pointer事件
     * @param e 当前pointer的对象
     */
    mouseOutFunc(): void;
    /**
     * 弹出框展示的信息
     * @param message 弹出框展示的信息object
     * @returns
     */
    addPop(message: any): string;
}
export { BaseLayer, LineLayer, WindCircleLayer, windRouteCircleLayer, forecastRouterLayer, };
