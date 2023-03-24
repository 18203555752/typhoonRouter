import type mapboxgl from 'mapbox-gl';
import { forecastRouterLayer } from './base/Layer';
import type { WindCircle } from './base/windCircle';
import './style/base.scss';
declare class Typhoon {
    protected map: mapboxgl.Map;
    protected live_circle: any;
    protected live_line: any;
    protected live_icon: mapboxgl.Marker;
    data: any;
    protected forecastData: any[];
    protected forecastLayer: {
        [x: string]: forecastRouterLayer | null;
    };
    protected windCircle: any;
    protected mapbox: typeof mapboxgl;
    protected center: [number, number] | undefined;
    protected closeAnimation: any;
    protected forecastType: any;
    protected loaded: () => void;
    constructor(mapbox: typeof mapboxgl, map: mapboxgl.Map, data: any, loaded: () => void, forecastType: {
        [x: string]: boolean;
    });
    reDraw(): void;
    remove(): void;
    removeForecast(): void;
    removeWindCircle(): void;
    backCenter(): void;
    /**
     * 初始化台风路径，带动画的绘制
     */
    drawLive(): void;
    private refreshLive_icon;
    /**
     * @desc 任意时间段--绘制从开始到任意点的路径
     * @param {number} index  自定义绘制的终点
     * @param {boolean} isAnimate  是否被 动画animate函数调用
     * @return {void}
     */
    anyDraw(index: number, isAnimate: boolean): void;
    drawWindCircle(pointer: WindCircle): void;
    /**
     * @desc 添加预报路径
     * @param {WindCircle} pointer 实况点
     */
    drawForecast(pointer: WindCircle): void;
    checkForecast(type: string): void;
    getFeature(n: number, data: any[]): {
        type: string;
        geometry: {
            type: string;
            coordinates: number[];
        };
        properties: any;
    };
    getFeatures(data: any[]): any[];
}
export default Typhoon;
