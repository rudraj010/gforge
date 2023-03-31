import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
    <div className='container mt-5 footer d-flex justify-content-center '>
        <div className='d-flex justify-content-center flex-column p-3'>
           <h4 className='d-flex justify-content-center flex-wrap '>
          Fashion That Speaks For You 
           </h4>
           <p className='d-flex justify-content-center flex-wrap text-center mt-2' >
           Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum
           </p>
           <p className='text-center'>
            Please contact us at : <strong>Gforge@gmail.com</strong>
           </p>
           <ul className='d-flex text-center justify-content-center '>
            <li className='mx-2'>Men</li>
            <li  className='mx-2'>Women</li>
            <li  className='mx-2'>Electronic</li>
           </ul>
           <ul className='d-flex text-center justify-content-center flex-wrap '>
           <img src="https://img.icons8.com/color/48/null/facebook-new.png" style={{width:'35px',height:'35px'}} className='mx-2'/>
           <img src="https://img.icons8.com/cute-clipart/64/null/instagram-new.png"  style={{width:'35px',height:'35px'}} className='mx-2'/>
          <img src="https://img.icons8.com/color/30/null/twitter--v1.png" style={{width:'35px',height:'35px'}} className='mx-2'/>
           </ul>
        </div>
       
    </div>
    <div className=' d- flex container justify-content-center text-center blackbox align-items-center'>
    <p className='p-4'>
    copywrite © All Rights Reserved By Fashion
        </p>
    </div>
   </>
  )
}

export default Footer
