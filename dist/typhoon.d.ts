import type mapboxgl from 'mapbox-gl';
import mapbox from 'mapbox-gl';
import type { WindCircle } from './base/windCircle';
declare class Typhoon {
    protected map: mapboxgl.Map;
    protected live_circle: any;
    protected live_line: any;
    live_marker: mapbox.Marker | null;
    data: any;
    protected forecastData: any[];
    protected forecastLayer: any[];
    constructor(map: mapboxgl.Map, data: any);
    drawLive(): void;
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
    /**
     * 添加预报路径
     */
    addForecast(): void;
}
export default Typhoon;
