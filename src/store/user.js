const initialState = {
    loggedIn: null
}

export const login = (user) => {
    return {
        type: 'LOGIN',
        user
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export default (state = null, action) => {

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