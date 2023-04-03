import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
import './Women.css'
import { ColorRing} from 'react-loader-spinner'

function WomenProduct() {




 const [data,setData]=useState()

    const handleAllProductData=()=>{       
fetch('http://localhost:3000/women').then((res)=>{
    res.json().then((result)=>{
        console.log(result,'www')
        setData(result)
    })
})
    }

    useEffect(()=>{
        handleAllProductData()
    },[])

  return (
    <>
    {
      !data? <span className='d-flex justify-content-center mt-5'>
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
<hr className='hr' />

    <div className ='container mt-4  women '>
       <div className='d-flex justify-content-center  '>
        <h1 className='h1'>Trading Women's style</h1>
        </div>
       <hr className='hr' />
        <div className=' d-flex flex-wrap justify-content-center mt-4 '>
        {
         data?.map((item)=>{
            return(
                <div className='col-md-4 imgmeadia'>
               <Link to = {`/womensingleproduct/${item?.id}`}  
               className=' my-2  row   flex-wrap justify-content-center '>

               
                 <img src ={item?.image}  className='img' />
              
               </Link>
                  <div className=' justify-content-center flex-wrap details  text-center '>
                  <p className='h4'>{item?.title}</p>  
                  <p> {item?.star}</p>
                   <h5>{item?.price}</h5>
                   
                  </div>
               </div>
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

export default WomenProduct
