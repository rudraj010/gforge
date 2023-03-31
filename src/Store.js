import { createStore } from "redux"
import rootreducer from "./components/Redux/Reducers/RootReducer"

const store = createStore(
    rootreducer
);

export default store;