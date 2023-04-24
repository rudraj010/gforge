 
import { combineReducers } from 'redux'
import { cartreducer} from "./Index"
import {productsReducer} from '../AuthReducer/AuthReducer'
const rootreducer = combineReducers({
    cartreducer,
    app:productsReducer
});

export default rootreducer