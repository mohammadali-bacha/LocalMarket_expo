const initialState = {
    user: null
}

export default (state = {}, action) => {

    switch (action.type) {
        case 'LOGIN':
            state = action.user
            return state
        case 'LOGOUT':
            state = null
            return state
        default:
            return state
    }

}