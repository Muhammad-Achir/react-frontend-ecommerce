function productDetailReducer (state = {}, action) {
    switch (action.type) {
        case 'SET_PRODUCT_DETAIL':
            return action.payload
        default:
            return state
    }
}

export default productDetailReducer