const initialState = {
    user: null
}

export default (state = initialState, action) => {

    switch (action.type) {
        case 'LOGIN':
            state.user = action.user
            break;
        case 'LOGOUT':
            state.user = null
            break
    }
}