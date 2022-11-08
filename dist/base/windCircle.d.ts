declare type Quad = {
    ne: number;
    se: number;
    sw: number;
    nw: number;
};
export interface WindCircle {
    color: string;
    forecast: any[] | null;
    lat: number;
    lng: number;
    move_dir: '西西北';
    move_speed: number;
    power: number;
    pressure: number;
    radius7: number;
    radius7_quad: Quad;
    radius10: number;
    radius10_quad: Quad;
    radius12: number;
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
export declare function createWindCircle(map: any, pointer: WindCircle): () => void;
export {};
