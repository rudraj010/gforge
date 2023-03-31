import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ForgotPassword.css"
 


const Login = () => {

    const navigate =useNavigate()

  const sendOtp=()=>{
    alert('Please Check Your E-mail')
    navigate('/')
  }

    return (
    
            <section>
                <div className="form_data">
                    <div className="heading">
                        <h1>Create New Password</h1>
                        <span className='mt-2'>Enter Your E-mail</span>

                    </div>

                    <form >
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="text"  name="username" id="email" placeholder='Email Address' />
                        </div>
                       

                        <button className='btn_login' onClick={sendOtp}>Send OTP</button>
 
                    </form>

                </div>
                <ToastContainer/>
         
        </section>
    )
}

export default Login

