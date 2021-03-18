const countTwoReducer = (state = 2, action) => {
    switch (action.type) {
        case 'mulTwo':
            return state*2
        default:
            return state
    }
}
export default countTwoReducer