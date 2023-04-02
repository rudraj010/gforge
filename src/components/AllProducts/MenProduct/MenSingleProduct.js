import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import './MenSingleProduct.css'
import { useDispatch} from 'react-redux'
import { ADD } from '../../Redux/Action'

function MenSingleProduct() {

    const dispatch =useDispatch()

    const [data,setData]=useState()
     

    const {id} = useParams()

    const handleMenProductData=()=>{     
fetch(`http://localhost:3000/men/${id}`)
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
    <hr/>
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
            <img src={data?.image} alt='' className='singleimg'/>
            </div>
            <div className="col-lg-6 mt-3 media">
                <h4>{data?.title}</h4>  
                <p>{data?.price} & Free Shipping</p>  
                <h5>Men</h5>  

                <span> Looking good isn't self-importance; it's self-respect."  
"Dressing well is a form of good manners."</span> 

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

export default MenSingleProduct
