
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';
import { Autoplay, Pagination, Navigation } from 'swiper';

import img1 from '../../assests/img1.jpg'
import img2 from '../../assests/img2.jpg'
import img3 from '../../assests/img3.jpg'
import img4 from '../../assests/img4.jpg'
import img5 from '../../assests/img5.jpg'
import img6 from '../../assests/img6.jpg'
import img7 from '../../assests/img7.jpg'


export default function Slider() {

 
  return (
    <>
    <div className='container-fluid'>
      <Swiper
       
        loop={true}
        rewind={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper"

        
         
      >
      

<SwiperSlide><img src = {img1}  /></SwiperSlide>
<SwiperSlide><img src = {img2}  /></SwiperSlide>
<SwiperSlide><img src = {img3}  /></SwiperSlide>
<SwiperSlide><img src = {img4}  /></SwiperSlide>
<SwiperSlide><img src = {img5}  /></SwiperSlide>
<SwiperSlide><img src = {img6}  /></SwiperSlide>
<SwiperSlide><img src = {img7}  /></SwiperSlide>

        
      </Swiper>
      </div>
    </>
  );
}











