const initialState = {
    products: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            state.products = [...state.products, action.product]
            break;
        case 'REMOVE_TO_CART':
            state.products = state.products.filter(product => product.id !== action.product.id)
            break
    }
}