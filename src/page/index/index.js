import React, { Component } from 'react'
import { Map } from 'react-amap'
import UiMarker from './markerUi'
import './index.less'
class Index extends Component {
    constructor(props) {
        super(props)
    }
    clickMap = e => {
        console.log('click', e)
    }
    // create = ins =>  {
    //     console.log(ins)
    //     if (localStorage.getItem('first')) {

    //     } else {
    //         window.location.reload()
    //         localStorage.setItem('first', 1)
    //     }
    // }
    // componentWillUnmount() {
    //     localStorage.clear()
    // }
    render() {
        // const events = {
        //     created: ins => this.create(ins)
        // }
        return <div className="map__wrapper">
            <Map amapkey={'35e97b975961b362ba27388d983ef59d'}
                zoom={4} center={[120, 30]}
                useAMapUI={true}>
                <UiMarker></UiMarker>
            </Map>
        </div>
    }
}
export default Index