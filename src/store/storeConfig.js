import { createStore, combineReducers } from 'redux'
import Numeros from './reducers/numeros'
const reducers = combineReducers({
    numeros: Numeros
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig