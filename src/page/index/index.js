import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { addNum, mulTwo, afterNum } from '../../action/addAction'
function Index (props) {
    console.log(props, 'index')
    return (<div>
        <h2>{props.num}</h2>
        <h2>{props.mulNum}</h2>
        <h2>{props.asynNum}</h2>
        <Button onClick={props.addNumNormal}>加1</Button>
        <Button onClick={props.numTwo} type="primary">乘2</Button>
        <Button onClick={props.threeNum} >3秒后变化</Button>
    </div>)
}

const mapStateToProps = state => {
    return {
        num: state.num,
        mulNum: state.mulNum,
        asynNum: state.asynNum
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addNumNormal: () => dispatch(addNum()),
        numTwo: () => dispatch(mulTwo()),
        threeNum: () => dispatch(afterNum())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)