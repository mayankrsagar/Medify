// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper core and required modules
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
} from 'swiper/modules';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

// Import Images
import item1 from '../../assets/Carousel/car1_Item1.png';
import item2 from '../../assets/Carousel/car1_Item2.png';

const Discount = () => {
  return (
    <Swiper
      // Install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={20} // Space between slides
      slidesPerView={3} // Show 3 slides at a time
      loop={true} // Enable infinite loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }} 
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide >
        <img src={item1} alt="Discount Item 1" style={{width:"100%"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={item2} alt="Discount Item 2" style={{width:"100%"}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={item1} alt="Discount Item 3 (Duplicate)"  style={{width:"100%"}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={item2} alt="Discount Item 4 (Duplicate)" style={{width:"100%"}} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Discount;
