import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css';
// import Link from 'next/link';
import { Link } from '@mui/material';

const Action = () => {
  return (
    <>
      <div className="action">
        
        <Link href="/">
          <button><span>Discover waterloo</span></button>
        </Link>
        <Link href="/">
          <button><span>Watch the trailer</span></button>
        </Link>
        <Link href="/">
           <button><span>the game</span></button>
        </Link>
      </div>
       <Swiper
        modules={[Autoplay, EffectFade]}
        
        effect={'fade'}
        spaceBetween={30}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop
        speed={500}
      >

          <SwiperSlide className="swiper">
            <p className="text">
              « extremely well done documentary that combines educational
              intelligence and art of suspense »
            </p>
            <p className="author">Nicolas Crousse, Le Mad du Soir</p>
          </SwiperSlide>
          <SwiperSlide className="swiper">
            <p className="text">
            « Spectacular film »
            </p>
            <p className="author">Davide Cacciatore, La Capitale</p>
          </SwiperSlide>
          
        
      </Swiper>
    </>
  );
};

export default Action;
