class AsyncApi {
    static getFieldValue() {
        const promise = new Promise(resolve => {
            setTimeout(() => {
                resolve(Math.random())
            }, 3000)
        })
        return promise
    }
}
const afterNum = () => dispatch => {
    AsyncApi.getFieldValue().then(res => {
        dispatch(asyncMulTwo(res))
    })
}
const addNum = () => ({ type: 'add' })
const minus = () => ({ type: 'minus' })
const mulTwo = () => ({ type: 'mulTwo' })
const asyncMulTwo = (res) => ({ type: 'asyncMulTwo', result: res })
export { addNum, minus, mulTwo, afterNum }