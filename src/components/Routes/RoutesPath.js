import React from 'react'
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Login from '../Authenthication/Login/LogIn'
import SignUp  from '../Authenthication/Signup/SignUp'
import MenProduct from '../AllProducts/MenProduct/MenProduct'
import WomenProduct from '../AllProducts/WomenProduct/WomenProduct'
import Home from '../Home'
import WomenSingleProduct from '../AllProducts/WomenProduct/WomenSingleProduct'
import MenSingleProduct from '../AllProducts/MenProduct/MenSingleProduct'
import ElectronicSingleProduct from '../AllProducts/ElectronicProduct/ElectronicSingleProduct'
import ElectronicProduct from '../AllProducts/ElectronicProduct/ElectronicProduct'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Cart from '../Cart/Cart'
import ForgotPassword from '../Authenthication/ForgotPassword/ForgotPassword'
import Payment from '../Cart/PaymentPage/Payment'
function RoutesPath() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path ='/' element ={<Home/>}/>
            <Route path ='/login' element ={<Login/>}/>
            <Route path ='/signup' element ={<SignUp/>}/>
            <Route path ='/men/:id' element ={<MenProduct/>}/>
            <Route path ='/women/:id' element ={<WomenProduct/>}/>
            <Route path ='/electronic/:id' element ={<ElectronicProduct/>}/>
            <Route path ='/mensingleproduct/:id' element ={<MenSingleProduct/>}/>
            <Route path ='/womensingleproduct/:id' element ={<WomenSingleProduct/>}/>
            <Route path ='/electronicsingleproduct/:id' element ={<ElectronicSingleProduct/>}/>
            <Route path ='/cart' element ={<Cart/>}/>
            <Route path ='/forgot' element ={<ForgotPassword/>}/>
            <Route path ='/paymentpage' element ={<Payment/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
     </div>
  )
}

export default RoutesPath
