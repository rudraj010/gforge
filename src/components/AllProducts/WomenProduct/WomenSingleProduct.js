import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import './WomenSingleProduct.css'
import { useDispatch } from 'react-redux'
import { ADD } from '../../Redux/Action'


function MenProduct() {

    const dispatch =useDispatch()

    const [data,setData]=useState()

    const {id} = useParams()

    const handleMenProductData=()=>{     
fetch(`http://localhost:3000/women/${id}`)
.then((res)=>{
    res.json().then((result)=>{
        setData(result)
    })
})
    }
    
    useEffect(()=>{
      handleMenProductData()
  },[])

    const Call=()=>{
      dispatch(ADD(data))
    }
   
    
    
  return (
    <> 
    <div className=" About container-fluid womensingle ">
    <div className="containter ">
        <div className=" container col-md-12 col-sm-10 d-flex justify-content-center">
         <div className="aboutintro flex-wrap">
            <p style={{fontSize:'2.3rem'}}>About Product</p>
            <i className='introtext'>Standard fit for a relaxed, easy feel</i><br/>
            <i className='introtext'>Fashion Speaks For You</i><br/>
          </div>
        </div>
        <hr className='hr' />
  <div className= 'container col-lg-12 ab col-md-12 mt-5 d-flex flex-wrap  '>
            <div className='col-lg-6 col-md-12'>
            <img src={data?.image} alt='' className='singleimg'/>
            </div>
            <div className="col-lg-6 mt-3 media">
                <h4>{data?.title}</h4>  
                <p>{data?.price} & Free Shipping</p>  
                <h5>Women</h5>  

                <span> Clothes mean nothing until someone lives in them.  
Style is a way to say who you are without having to speak</span> 

                <h5 className='mt-4'> Ratings: {data?.star}</h5>
                <h5 className='colors'> Colors: 🔴 🟢 ⚫</h5>
                <h5 className=''> Size: <span>{data?.size}</span></h5>
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
  )
}

export default MenProduct
