
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider2.css';
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Slider() {

 
  return (
    <>
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
        centeredSlides={true}
        loop={true}
        rewind={true}
        
        
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        
     
        modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper"
      >
      
 <SwiperSlide><img src ='https://img.etimg.com/thumb/width-1200,height-900,imgsize-49611,resizemode-1,msid-76857744/industry/cons-products/fashion-/-cosmetics-/-jewellery/india-inspired-lifestyle-brand-chumbak-changes-brand-logo.jpg'  className='sliderimg2'/></SwiperSlide>
<SwiperSlide><img src = 'https://www.shutterstock.com/image-vector/vastram-logo-garments-women-saree-600w-1818360230.jpg'  className='sliderimg2'/></SwiperSlide>
 <SwiperSlide><img src ='https://www.shutterstock.com/image-vector/modern-creative-elegant-charming-letter-600w-1835418493.jpg'  className='sliderimg2'/></SwiperSlide>
 <SwiperSlide><img src ='https://www.shutterstock.com/shutterstock/photos/387716935/display_1500/stock-vector-style-cloth-logotype-for-cloth-business-387716935.jpg'  className='sliderimg2'/></SwiperSlide>
 <SwiperSlide><img src ='https://www.shutterstock.com/shutterstock/photos/1846943980/display_1500/stock-vector-wardrobe-hanger-logo-fashion-dry-cleaning-clothing-store-vector-icon-logo-for-atelier-wedding-1846943980.jpg'  className='sliderimg2'/></SwiperSlide>
 <SwiperSlide><img src ='https://img.etimg.com/thumb/width-1200,height-900,imgsize-49611,resizemode-1,msid-76857744/industry/cons-products/fashion-/-cosmetics-/-jewellery/india-inspired-lifestyle-brand-chumbak-changes-brand-logo.jpg'  className='sliderimg2'/></SwiperSlide>
        
      </Swiper>
      
    </>
  );
}











