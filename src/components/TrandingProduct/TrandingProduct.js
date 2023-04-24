import React, { useState ,useEffect} from 'react'

import {Link} from 'react-router-dom'
import shipping from '../../assests/shipping.png'
import support from '../../assests/support.png'
import cash from '../../assests/cash.png'
import payment from '../../assests/payment.png'

import './TrandingProduct.css'


function TrandingProduct() {

   const[data,setData]=useState()
//    const[data,setData]=useState()

   
 
   const handleAllProductData=()=>{       
fetch('http://localhost:3000/tranding  ').then((res)=>{
   res.json().then((result)=>{
       console.log(result,'www')
       setData(result)
   })
})
   }

   useEffect(()=>{
       handleAllProductData()
   },[])


    

    //  console.log(data,'tran')

  return (
    <div className='mt-5 tranding text-center' >

       <h1 className='my-5 trand-title'>Popular Fashion</h1>
      <div className=' tranding-top d-flex justify-content-center'>
      <div className='col-lg-10  col-md-12 d-flex justify-content-center flex-wrap'>
        {
            data?.map((item)=>{
                return(
                    <Link to={item?.type === 'men' ? `/mensingleproduct/${item?.id}`:`/womensingleproduct/${item?.id}`}     className='mx-3 py-3'>
                    <div className='d-flex justify-content-center flex-wrap'>

                <img src={item?.image} />
                    </div>
                 </Link>
                )
            })
        }
      </div>

      </div>


      <div className='container mt-5 details'>
      <div className='col-lg-12 col-md-12 col-sm-12 d-flex flex-wrap text-center justify-content-center help ' >
       <p className='col-lg-3 col-md-6 '> <img src ={shipping} className='mx-3 img'/>Free Shipping</p>
       <p className='col-lg-3 col-md-6'> {<img src ={cash}  className='mx-3 img'/>}Money Back Guarantee</p>
       <p className='col-lg-3 col-md-6'> <img src ={support}  className='mx-3 img'/>Online Support 24/7</p>
       <p className='col-lg-3 col-md-6'> <img src ={payment}  className='mx-3 img'/>Payment Secure</p>
      </div>
        
      </div>
    
    </div>
  )
}

export default TrandingProduct
