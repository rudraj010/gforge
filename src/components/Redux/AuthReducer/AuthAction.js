import axios from "axios";
import baseUrl from "../.././../Baseurl/BaseUrl.js";
import {FETCH_PRODUCT,TRANDING_PRODUCT,MEN_SINGLE} from '../Constant/Constant'

// import { ActionTypes } from "../constant/ActionTypes";

export const fetchProducts = () => {

    return async function (dispatch) {
        try {
            const response = await baseUrl.get('/categories')
            console.log(response, "dok")
            dispatch(apiCall(response))
                                           
        }
        catch {
            console.log(Error)
        }

    }
}

                          

export const TrandingHomeProduct = () => {

    return async function (dispatch) {
        try {
            const response = await baseUrl.get('/allproduct')
            console.log(response.data, "do00000000000000k")
            dispatch(TrandingProduct(response))

        }
        catch {
            console.log(Error)
        }

    }
}

export const SingleProduct = (id) => {
    // console.log(data,'xx')

    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3000/men/${id}`)
            dispatch(Mensingle(response))
            console.log(response, "koko")
                                                                  
        }
        catch {
            console.log(Error)
        }

    }
}


// export const CategoriesProducts = () => {

//     return async function (dispatch, id) {
//         try {
//             const response = await ShopApi.get(`/products/${id}`)
//             console.log(response.data, "dok")
//             dispatch(apiCall(response.data.products))

//         }
//         catch {
//             console.log(Error)
//         }
//     }
// }


export const apiCall = (data) => {console.log(data,'pay1')
    return {
        type: FETCH_PRODUCT,
        payload: data
    }
}

export const TrandingProduct = (data) => {
    console.log(data,'pay')
    return {
        type: TRANDING_PRODUCT,
        payload: data
    }
    
}

export const Mensingle= (data) => {
    console.log(data,'kol')
    return {
        type: MEN_SINGLE,
        payload: data
    }
    
}