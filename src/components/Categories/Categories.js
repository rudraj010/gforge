import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Categories.css";

function Categories() {
  const [data,setData]=useState()



  const handleData=()=>{
    fetch(`http://localhost:3000/categories`)
     .then((res)=>{
        res.json().then((result)=>{
            setData(result)
            console.log(result,'lll')
        })
     })
  }


  useEffect(()=>{
     handleData()
  },[])

  return (
   <>
   
    <div className ='container mt-4 categories  '>
       <div className='d-flex justify-content-center  '>
       <hr/>
        <h1 className='h1'>Categories</h1>
        </div>
        <hr className='hr' />
        <div className=' d-flex flex-wrap justify-content-center mt-4'>
        {
         data?.map((item)=>{
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
  )
}

export default Categories