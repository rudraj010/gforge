

import { ADD_CART,REMOVE_ALL,REMOVE_SINGLE,EMPTY_ITEM } from "../Constant/Constant";
const INIT_STATE = {
    carts: localStorage.getItem("Localitems") ? JSON.parse(localStorage.getItem("Localitems")) : []
};

console.log(INIT_STATE.carts, "sa")

export const cartreducer = (state = INIT_STATE, action) => {

    switch (action.type) {
        case ADD_CART:                                                     
                                                                           
            const IteamIndex = state.carts.findIndex((item) => item.id ===  action.payload.id);
            localStorage.setItem("Localitems", JSON.stringify(state.carts))
              
            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1
                return {
                  
                    ...state,
                    carts: [...state.carts]
                    
                }
            } else {
                const x = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, x]
                }

            }

        case REMOVE_ALL:
            const data = state.carts.filter((item) => item.id !== action.payload)
             return {
                ...state,
                carts: data

            }

        case REMOVE_SINGLE:
            const ItemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);

            if (state.carts[ItemIndex_dec].qnty >= 1) {
                const dltitems = state.carts[ItemIndex_dec].qnty -= 1
                console.log([...state.carts, dltitems]);
 
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[ItemIndex_dec].qnty === 1) {
                const data = state.carts.filter((el) => el.id !== action.payload);

                return {
                    ...state,
                    carts: data
                }
            }

            case EMPTY_ITEM:
            return {
                carts: []
            }

        default:
            return state
    }
}