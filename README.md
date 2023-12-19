# 地址

https://github.com/18203555752/typhoonRouter

# 使用方式

```js
new Typhoon(
    mapbox, 
    map.value, 
    {
     data: //台风数据,
     callBack: ()=>{
      	//台风动画结束后的成功回调
     }, 
     forecastStrokeColor: //预报机构色标,
     forecastType: //预报机构是否显示的对象 引用
    }
)
```

方法：

| 方法名        | 参数                                                         | 介绍                                                        |
| :------------ | ------------------------------------------------------------ | ----------------------------------------------------------- |
| backCenter    | 无                                                           | 地图中心点返回至当前台风区域                                |
| anyDraw       | 1.自定义绘制的终点下标 number <br />2.是否绘制终点的预报路径 boolean | 任意时间段----绘制从开始点到任意结束点的路径                |
| reDraw        | 无                                                           | 当前台风重新绘制（会有动画，可选择anyDraw（length-1）代替） |
| checkForecast | 1.预报机构 string<br />2.是否显示 boolean                    | 控制当前路径点上单条预报路径的显隐                          |
| remove        | 无                                                           | 删除当前台风                                                |
|               |                                                              |                                                             |

