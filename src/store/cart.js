
const initialState = {
  products: []
}

export const addProduct = (product, qty) => {
  return (dispatch, getState) => {
    if (
      getState().cart.products.filter(item => item.product.id === product.id)
        .length === 1
    ) {
      dispatch(updateProduct(product, qty))
    } else {
      dispatch({
        type: 'ADD_PRODUCT',
        product,
        qty
      })
    }
  }
}

export const clearCart = () => {
  return {
    type: 'CLEAR_CART'
  }
}

export const removeProduct = id => {
  return {
    type: 'REMOVE_PRODUCT',
    id
  }
}

export const updateProduct = (product, qty) => {
  return (dispatch, getState) => {
    const oldQty = getState().cart.products.find(
      item => item.product.id === product.id
    ).qty
    dispatch(removeProduct(product.id))
    dispatch(addProduct(product, oldQty + qty))
  }
}

export default (state = initialState, action) => {
  let newState = { ...state }
  switch (action.type) {
    case 'ADD_PRODUCT':
      // newState.products.push({
      //   product: action.product,
      //   qty: action.qty
      // })
      return { products: [...state.products, { product: action.product, qty: action.qty }] }
    case 'REMOVE_PRODUCT':
      return {
        products: state.products.filter(
          item => item.product.id !== action.id
        )
      }
    case 'UPDATE_PRODUCT':
      newState.products.find(item => item.product.id === action.id).qty += action.qty
      return newState
    case 'CLEAR_CART':
      return { products: [] }
    
    default:
      return newState
  }
}
