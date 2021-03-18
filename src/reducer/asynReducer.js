function asyncAddNum(state = 0, action) {
    console.log(action)
    switch (action.type) {
        case 'asyncMulTwo':
            return state+action.result
        default:
            return state
    }
}
export default asyncAddNum