import type mapboxgl from 'mapbox-gl';
import type { WindCircle } from './base/windCircle';
import './style/base.scss';
declare class Typhoon {
    protected map: mapboxgl.Map;
    protected live_circle: any;
    protected live_line: any;
    protected live_icon: mapboxgl.Marker;
    data: any;
    protected forecastData: any[];
    protected forecastLayer: any[];
    protected windCircle: any;
    protected mapbox: typeof mapboxgl;
    protected center: [number, number] | undefined;
    protected closeAnimation: any;
    protected loaded: () => void;
    constructor(mapbox: typeof mapboxgl, map: mapboxgl.Map, data: any, loaded: () => void);
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
     * 任意时间段--绘制从开始到任意点的路径
     */
    anyDraw(index?: number): void;
    drawWindCircle(pointer: WindCircle): void;
    drawForecast(): void;
    getFeature(n: number, data: any[]): {
        type: string;
        geometry: {
            type: string;
            coordinates: number[];
        };
        properties: any;
    };
    getFeatures(data: any[]): any[];
    /**
     * 添加预报路径
     */
    addForecast(): void;
}
export default Typhoon;
