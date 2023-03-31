import React,{useState,useEffect} from 'react'
import { useSelector ,dispatch, useDispatch} from 'react-redux'
import { ADD,DLT,REMOVE ,Empty} from '../Redux/Action'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'
function Cart() {

  const cartData =useSelector((state)=>state?.cartreducer?.carts)


     const [total,setTotal]=useState()

     const dataLength = cartData?.length

     const navigate =useNavigate()

 
    const dispatch =useDispatch()


    const Delete =(id)=>{
          dispatch(DLT(id))
         
    }


    const Add =(e)=>{
          dispatch(ADD(e))
    }

    const Remove =(item)=>{
          dispatch(REMOVE(item))
    }


    const Amount = () => {
      let price = 0;
      cartData?.map((item, ) => {
          price = item.price * item.qnty + price
      })
      setTotal(price)
  };

  useEffect(() => {
      Amount();
  }, [Amount])

  useEffect(()=>{
   if(dataLength===0){
    navigate('/')
   }
  },[dataLength])

     
  const showToastMessage = () => {
    
    toast.success('Order Placed Sucessfully !', {
        position: toast.POSITION.TOP_RIGHT
    });
    
    dispatch(Empty())
      navigate('/')
     
   
};

   
    
  return (
    <>
    <div className='carts-data'>
            <hr className='hr mt-3 '/>
            <div className=' allcartdata mt-5 '>
            {
                cartData?.map((item)=>{
                    return(
                        <div className='cartsdata carts  mb-3  mb-'>
                      
                            <img src ={item?.image}  className='cartimages' />
                              <div className='d-block cartstext  mx-3  p-3 flex-wrap'>
                             

                              <p className=' d-block  '><strong>{item?.description}</strong></p>
                              <h5>{item?.title}</h5>
                              <p> {item?.star}</p>
                              <p>Price:{item?.price * item?.qnty}</p>
                              <p> Size:{item?.size}</p>
                              <div className='d-flex' > 
                              <div className='btnborder text-center'>
                              <span className="minus m-3" onClick={item.qnty <= 1 ? () => Delete(item.id) : () => Remove(item)}>-</span>
                                                        <span className="quntity m-3">{item.qnty}</span>
                                                        <span className="plus m-3" onClick={() => Add(item)}>+</span>
                                                        
                              </div>
                            
                              <img src="https://img.icons8.com/sf-regular-filled/48/undefined/delete.png" onClick={()=>Delete(item?.id)} className='trashimg  ms-5'/>

                              </div>
                              </div>
                            
                        </div>
                      
                      
                    )
                })
            }


            </div>
             <div className='container cart-total' >
              <hr className='carthr my-4'/>
              <h5 className='mx-3 my-3 shipping-charge' > Shippping Charges  :  <span style={{color:'green'}}>Free</span></h5>
              
              <span className='mx-3 cart-price'>Total Price:   {total}</span>
              <button className='btn btn-primary' onClick={showToastMessage}> Place Order</button>
              <ToastContainer />
              <hr className='carthr my-4'/>
             </div>

             
          
             </div>
    </>
  )
}

export default Cart
