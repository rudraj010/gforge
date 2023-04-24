import { createStore,applyMiddleware } from "redux"
import thunk  from 'redux-thunk'
import rootreducer from "./components/Redux/Reducers/RootReducer"





const store = createStore(
    rootreducer,
    applyMiddleware(thunk),
    // productsReducer
);

export default store;