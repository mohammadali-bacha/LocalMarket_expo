const initialState = {
    products: []
}

export const addProduct = (product, qty) => {
    return {
        type: 'ADD_TO_CART',
        product,
        qty
    }
}

export const removeProduct = id => {
    return {
        type: 'REMOVE_PRODUCT',
        id
    }
}

export const updateProduct = (id, qty) => {
    return {
        type: 'UPDATE_PRODUCT',
        qty
    }
}

const initialState = {
    cart: []
}

export default (state = [], action) => {
    action.product
    switch (action.type) {
        case 'ADD_TO_CART':
            state = [...state, { product: action.product, qty: action.qty}]
            return state
        case 'REMOVE_PRODUCT':
            state = state.cart.filter(product => product.id !== action.product.id)
            return state
        default:
            return state
    }

}