import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./SignUp.css"



const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);

    const navigate =useNavigate() 

    const [data, setData] = useState({
        fullName:"",
        email: "",
        password: "",    
        confirmPassword:""   
    });


    

 
    const onChangeHandle = (e) => {
        const name = e.target.name;
       const value = e.target.value;
    
        setData({ ...data, [name]: value });
  
    };

 
    const Submit=async (e)=>{
      e.preventDefault()
      if(!data?.fullName.length){
        alert('Please fill the details')
    }else if(!data?.email?.length){
          alert('Please fill the details')
             
      }  else if(!data?.password?.length){
        alert('Please fill the password')

      } else{
          navigate('/login')
        toast.success('Register Successfully', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
        });
      }

    }

 console.log(data)

    return (
    
            <section>
                <div className="form_data">
                    <div className="heading">
                        <h1>Sign Up</h1>
                        <span className='mt-1'>Create yor account to get access</span>

                    </div>

                    <form onSubmit={Submit}>
                        <div className="form_input">
                            <label htmlFor="email">Full Name</label>
                            <input type="text" value={data.fullName} onChange={onChangeHandle} name="fullName" id="text" placeholder='Full Name' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={data.email} onChange={onChangeHandle} name="email" id="email" placeholder='Username/Email Address' />
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
                        

                        <button className='btn_login'>Signup</button>
                        <p >Already have an account? <Link to="/login" className='link'><span  className='link'> LogIn</span> </Link> </p>
                           <p> <Link to ="/forgot" > <span className='link'>Forgot Password</span> </Link> </p>

                    </form>

                </div>
         
        </section>
    )
}

export default SignUp;

