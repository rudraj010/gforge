import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./LogIn.css"
 


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const navigate =useNavigate()

    const [data, setData] = useState({
        username: "",
        password: "",
    });

   

    const onChangeHandle = (e) => {
      
       const name = e.target.name;
       const value = e.target.value;
    
        setData({ ...data, [name]: value });
  
    };

    console.log(data , "myData")

    const Submit=async (e)=>{
      e.preventDefault()

      await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
            username: 'kminchelle',
            password: '0lelplR',
        })
      })
      .then(res => res.json()).then((result)=>{
            setData(result) 
           if(data?.username?.length===0){
              alert('Please Enter Details')
           }else{
            {
                toast.success('Login Successfully', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                });
                navigate('/')
            } 
        }
            
        
    }
    )
    
    
}


    return (
    
            <section>
                <div className="form_data">
                    <div className="heading">
                        <h1>Log In</h1>
                        <span className='mt-2'>Enter Login details to get access</span>

                    </div>

                    <form onSubmit={Submit}>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="text" value={data.username} onChange={onChangeHandle} name="username" id="email" placeholder='Username/Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!showPassword ? "password" : "text"} onChange={onChangeHandle} value={data.password} name="password" id="password" placeholder='Password' />
                                <div className="show" onClick={() => setShowPassword(!showPassword)}>
                                    {!showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                                </div>
                            </div>
                        </div>

                        <button className='btn_login'>Login</button>
                        <p >Don't have an Account? <Link to="/signup" className='link'><span  className='link'> SignUp</span> </Link> </p>
                           <p> <Link to ="/forgot" > <span className='link'>Forgot Password</span> </Link> </p>

                    </form>

                </div>
                <ToastContainer/>
         
        </section>
    )
}

export default Login

