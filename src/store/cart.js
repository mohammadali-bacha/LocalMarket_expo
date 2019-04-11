const initialState = {
    products: []
}

export const addToCart = product => {
    return {
        type: 'ADD_TO_CART',
        product
    }
}

export const removeProduct = id => {
    return {
        type: 'REMOVE_PRODUCT',
        id
    }
}

export default (state = [], action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            state = [...state, action.product]
            return state
        case 'REMOVE_PRODUCT':
            state = state.filter(product => product.id !== action.product.id)
            return state
        default:
            return state
    }

}