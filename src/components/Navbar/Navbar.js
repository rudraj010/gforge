import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'
import mainlogo from '../../assests/mainlogo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 function Navbar() {
  const showLength = useSelector((state)=>state?.cartreducer?.carts)
 
   const navigate =useNavigate()


     


  const emptyCart=()=>{
    if(showLength?.length===0){
      toast.error('Cart is empty!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      }
      );

      } else{
         navigate('/cart')
      } 
  }




  return (
    <div>
    <nav class="navbar navbar-expand-lg  p-3 nav" >
    <div class="container ">
   
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/login">LogIn</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/signup">
            <img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/null/external-user-user-tanah-basah-basic-outline-tanah-basah-4.png" className='mainuserlogo'/>
            </Link>
          </li>
          
          <li class="nav-item mx-3 mt-1 maincarticon" onClick={emptyCart} style={{cursor:'pointer'}}>  
            <span >


            <img src="https://img.icons8.com/ios/50/null/shopping-cart--v1.png" style={{width:'25px'}}  />
    <spna clasName='textlength ' style={{width:'10px',height:'10px',color:'red',border:'2px'}} >
      { !showLength?.length?'':showLength?.length
      
      }
    </spna> 
            </span>
          </li>
        </ul>
        <form class="d-flex">
          <img src ={mainlogo} alt ='' className='mainlogo '/>
      
        </form>
        
      </div>
    </div>
  </nav>
  <ToastContainer/>
  </div>
  )
}

export default Navbar
