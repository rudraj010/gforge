

import { ADD_CART,REMOVE_ALL,REMOVE_SINGLE,EMPTY_ITEM } from "../Constant/Constant";
const INIT_STATE = {
    carts: []
};

console.log(INIT_STATE.carts, "sa")

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_CART:

            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
                 
              
            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1
                return {
                    local,
                    ...state,
                    carts: [...state.carts]
                    
                }
            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }

            }

        case REMOVE_ALL:
            const data = state.carts.filter((el) => el.id !== action.payload)
            return {
                ...state,
                carts: data

            }

        case REMOVE_SINGLE:
            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (state.carts[IteamIndex_dec].qnty >= 1) {
                const dltiteams = state.carts[IteamIndex_dec].qnty -= 1
                console.log([...state.carts, dltiteams]);

                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[IteamIndex_dec].qnty === 1) {
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