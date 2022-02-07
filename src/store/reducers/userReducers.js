function userReducer (state = { user: 'AchirG2', balance: 5000}, action) {
    switch (action.type) {
        case 'DEDUCT_BALANCE':
            return {
                ...state, balance: state.balance - action.payload
            }
        default:
            return state
    }
}

export default userReducer