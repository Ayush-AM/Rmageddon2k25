import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

import { EffectCoverflow, Autoplay } from 'swiper';

import slide_image_1 from './assets/images/image.png';
import slide_image_2 from './assets/images/image2.jpg';
import slide_image_3 from './assets/images/image3.png';
import slide_image_4 from './assets/images/image4.jpg';
import slide_image_5 from './assets/images/image5.jpg';
import slide_image_6 from './assets/images/image6.jpg';
import slide_image_7 from './assets/images/image7.jpg';

function App() {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      autoplay={{
        delay: 3000, // 3 seconds delay for automatic sliding
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Autoplay]}
      className="swiper_container"
    >
      <SwiperSlide>
        <img src={slide_image_1} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_2} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_3} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_4} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_5} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_6} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_image_7} alt="slide_image" />
      </SwiperSlide>
    </Swiper>
  );
}

export default App;
