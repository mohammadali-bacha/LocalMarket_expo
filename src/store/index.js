import { createStore, combineReducers, compose} from 'redux'
import user from './user'
import cart from './cart'

export default createStore(combineReducers({
    user,
    cart
}))