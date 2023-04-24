import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ColorRing} from 'react-loader-spinner'
import {useSelector,useDispatch} from 'react-redux'
import {fetchProducts} from '../Redux/AuthReducer/AuthAction'

import "./Categories.css";
function Categories() {
  const [data,setData]=useState()

  const dispatch =useDispatch()

  const all = useSelector((state)=>state.app)
  console.log(all,'all2 ')
     
//   const dispatch =useDispatch()

   //  const [data,setData]=useState()
  
    useEffect(()=>{
      dispatch(fetchProducts())
    },[])

  

  return (
   <>
   {
      !all?.products?.item?.data?  <span className='d-flex justify-content-center mt-5'>
            
    <ColorRing
  visible={true}
  height="120"
  width="120"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>  </span>:<>
<div className ='container mt-4 categories  '>
       <div className='d-flex justify-content-center'>
       <hr/>                                                 
        <h1 className='h1'>Categories</h1>
        </div>
        <hr className='hr' />
        <div className=' d-flex flex-wrap justify-content-center mt-4'>
        {
         all?.products?.item?.data?.map((item)=>{
            return(
               <Link to = {item?.id===1?`/men/${item?.id}`:item?.id===2?`/women/${item?.id}`:`/electronic/${item?.id}`}  
               className=' imgborder categoriesimg row col-md-4  flex-wrap justify-content-center'>

               
                 <img src ={item?.image}  className='img' />
                  <div className='d-flex justify-content-center '>
                  <p className='h5 title mt-3'>{item?.title}</p> 
                  </div>
              
               </Link>
            )
         })
        }

         
            


       </div>
     </div>
</>
   }
   
    </>
  )
}

export default Categories
