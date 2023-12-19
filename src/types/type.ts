export interface Option{
  data: Tdata, 
  callBack: ()=>void, 
  forecastType: {[x:string]: boolean}
  forecastStrokeColor: {[x:string]: string}
}

export interface Tdata{
  begin_time: string
  end_time: string
  name: string
  ename: string
  tfbh: string
  issuer: string
  ident: string
  land?: string[]
  is_current?: string
  points: Pointer[]
  [x: string]: any
}
export interface Pointer{
  color: string
  forecast: any[] | null
  lat: number
  lng: number
  move_dir: strOrNum
  move_speed: strOrNum
  power: number
  pressure: number
  radius7: strOrNum
  radius7_quad: Quad
  radius10: strOrNum
  radius10_quad: Quad
  radius12: strOrNum
  radius12_quad: Quad
  remark: string
  speed: number
  strong: string
  time: string
  [x: string]: any
}


type Quad = {
  ne: number
  se: number
  sw: number
  nw: number
}
type strOrNum = string | number