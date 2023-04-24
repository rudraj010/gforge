import React, { useEffect ,useState} from 'react'

import { useParams } from 'react-router-dom'
import { useDispatch,useSelector} from 'react-redux'
import { ColorRing} from 'react-loader-spinner'
import { ADD } from '../../Redux/Action'
import {SingleProduct} from '../../Redux/AuthReducer/AuthAction'

import './MenSingleProduct.css'



// const location =useLocation()

function MenSingleProduct() {

  const select =useSelector((state)=>state?.app)

  console.log(select,'mens')

    const dispatch =useDispatch()

    const [data,setData]=useState() 
     
                                                      

    const {id} = useParams()


    const handleMenProductData=()=>{     

      dispatch(SingleProduct(id))
     
    }
    
                                                           
  
    useEffect(()=>{
      handleMenProductData()
     
  },[])



    const Call=()=>{
      dispatch(ADD(data))


    }
   
    
    
  return (
    <>
    <hr/>
    {!select?.products?.item3?.data? <span className='d-flex justify-content-center mt-5'>
    <ColorRing
  visible={true}
  height="120"
  width="120"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
    </span>:<>
    <div className=" About container-fluid mensingle">
    <div className="containter ">
        <div className=" container col-md-12 col-sm-10 d-flex justify-content-center">
         <div className="aboutintro flex-wrap text-center">
            <p style={{fontSize:'2.3rem'}}>About Product</p>
            <i className='introtext'>Standard fit for a relaxed easy feel</i><br/>
            <i className='introtext'>Fashion Speaks For You</i><br/>
          </div>
        </div>
        <hr className='mensinglehr' />
  <div className= 'container col-lg-12 ab col-md-12 mt-5 d-flex flex-wrap  '>
            <div className='col-lg-6 col-md-12'>
            <img src={select?.products?.item3?.data.image} alt='' className='singleimg'/>
            </div>
            <div className="col-lg-6 mt-3 media">
                <h4>{select?.products?.item3?.data.title}</h4>  
                <p>{select?.products?.item3?.data.price} & Free Shipping</p>  
                <h5>Men</h5>  
               
                <span> Looking good isn't self-importance; it's self-respect."  
"Dressing well is a form of good manners."</span> 

                <h5 className='mt-4'> Ratings: {select?.products?.item3?.data.star}</h5>
                <h5 className='colors'> Colors: 🔴 🟢 ⚫</h5>
                <h5 className=''> Size: <span>{select?.products?.item3?.data.size}</span></h5>
                <div className='pt-3 d-flex biodata'>
                  </div>  
                   <hr className='my-3 btn-border'/>
                     <button className='btn btn-success ' onClick={()=>Call(id)}>Add To Cart</button>
                     <hr   className='my-3 btn-border' />
      

            </div>
          </div>  
    </div>
       
    </div>
   
    </>
    }
   
    </>
  )
}

export default MenSingleProduct
