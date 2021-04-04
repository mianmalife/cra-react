import React from 'react'
import './index.less'
class MarkerUi extends React.Component {
    constructor(props) {
        super(props)
        this.loadUI()
    }
    loadUI() {
        window.AMapUI.loadUI(['overlay/SimpleMarker', 'geo/DistrictExplorer'], (SimpleMarker, DistrictExplorer) => {
            this.initPage(SimpleMarker, DistrictExplorer);
        })
    }
    initPage(SimpleMarker, DistrictExplorer) {
        const map = this.props.__map__;
        // 这个例子来自官方文档 http://lbs.amap.com/api/javascript-api/guide/amap-ui/intro
        new SimpleMarker({
            //前景文字
            iconLabel: 'A',
            //图标主题
            iconTheme: 'default',
            //背景图标样式
            iconStyle: 'red',
            //...其他Marker选项...，不包括content
            map: map,
            position: [120, 31]
        });

        //创建SimpleMarker实例
        let marker = new SimpleMarker({
            //前景文字
            iconLabel: {
                innerHTML: '<i>B</i>', //设置文字内容
                style: {
                    color: '#fff' //设置文字颜色
                }
            },
            //图标主题
            iconTheme: 'fresh',
            //背景图标样式
            iconStyle: 'black',
            //...其他Marker选项...，不包括content
            map: map,
            position: [120, 29]
        });
        marker.on('click', function(f) {
            console.log(f, 'yyy')
        })
        window.districtExplorer = new DistrictExplorer({
            eventSupport: true,
            setAreaNodesForLocating: true,
            preload: [100000],
            map: map
        })
        let that = this
        window.districtExplorer.on('featureClick', function(e, feature) {
            let props = feature.properties
            that.loadAreaNode(props.adcode)
            
        })
        window.districtExplorer.on('outsideClick', function (e) {
            console.log(e, 'outside')
            window.districtExplorer.locatePosition(e.originalEvent.lnglat, function (error, routeFeatures) {
                console.log(routeFeatures, 'routeFeatures')
                if (routeFeatures && routeFeatures.length > 1) {
                    //切换到省级区域
                    that.loadAreaNode(routeFeatures[1].properties.adcode);
                } else {
                    //切换到全国
                    that.loadAreaNode(100000);
                }

            }, {
                levelLimit: 2
            });
        });
    }
    loadAreaNode = (adcode) => {
        window.districtExplorer.loadAreaNode(adcode, (error, areaNode) => {
            window.districtExplorer.clearFeaturePolygons()
            if (error) {
                console.log(error)
                return
            }
            window.districtExplorer.setAreaNodesForLocating([areaNode])
            window.districtExplorer.renderSubFeatures(areaNode)
            //绘制父级区划，仅用黑色描边
            window.districtExplorer.renderParentFeature(areaNode, {
                cursor: 'default',
                bubble: true,
                strokeColor: 'black', //线颜色
                fillColor: null,
                strokeWeight: 3, //线宽
            });
            this.props.__map__.setFitView(window.districtExplorer.getAllFeaturePolygons())
        })
    }
    componentWillUnmount() {
        
    }
    componentDidMount() {}
    complete = () => {
        console.log('success', window)
    }
    clickMap = e => {
        console.log('click', e)
    }
    render() {
        return null
    }
}
export default MarkerUi