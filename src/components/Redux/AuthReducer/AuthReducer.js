import { FETCH_PRODUCT, TRANDING_PRODUCT ,MEN_SINGLE} from "../Constant/Constant";

const intialState = {
  products:{
    item:[],
    item2:[],
    item3:[]
  }
};

                                                     

export const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      // const xyz = action.payload;
      return { ...state, products:{...state.products ,item:action.payload}};
      // return { ...state, item:action.payload};      also

    case TRANDING_PRODUCT:
      return { ...state, products:{ ...state.products, item2: action.payload} };

    case MEN_SINGLE:
      console.log(action.payload,'ww')
      return { ...state, products:{ ...state.products, item3: action.payload} };




    default:
      return state;
  }
};
