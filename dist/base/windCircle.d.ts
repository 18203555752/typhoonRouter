import mapboxgl from 'mapbox-gl';
type Quad = {
    ne: number;
    se: number;
    sw: number;
    nw: number;
};
type strOrNum = string | number;
export interface WindCircle {
    color: string;
    forecast: any[] | null;
    lat: number;
    lng: number;
    move_dir: strOrNum;
    move_speed: strOrNum;
    power: number;
    pressure: number;
    radius7: strOrNum;
    radius7_quad: Quad;
    radius10: strOrNum;
    radius10_quad: Quad;
    radius12: strOrNum;
    radius12_quad: Quad;
    remark: string;
    speed: number;
    strong: string;
    time: string;
}
/**
 * 台风中心风圈
 * @param map
 * @param pointer
 * @returns
 */
export declare function createWindCircle(mapbox: typeof mapboxgl, map: any, pointer: WindCircle): {
    refresh: (pointer: WindCircle) => void;
    clear: () => void;
};
export {};
