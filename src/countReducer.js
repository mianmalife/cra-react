function countReducer(state = 0, action) {
    console.log(action)
    switch (action.type) {
        case 'add':
            return state + 1
        case 'minus':
            return state - 1
        default:
            return state
    }
}
export { countReducer }