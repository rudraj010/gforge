import React from 'react'
import Slider from './Slider/Slider'
import Categories from './Categories/Categories'
import HomeProduct from './HomeProduct/HomeProduct'
import Slider2 from './Slider/Slider2'

function Home() {
  return (
    <div>
         <Slider/> 
          <Categories/>
          <HomeProduct/>
          <Slider2/>
      
    </div>
  )
}

export default Home
