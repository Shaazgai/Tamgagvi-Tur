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
          <button>
            <span>Өгүүлэл</span>
          </button>
        </Link>
        <Link href="/">
          <button>
            <span>Тасалбар захиалах</span>
          </button>
        </Link>
        <Link href="/">
          <button>
            <span>Дүрүүд</span>
          </button>
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
            « Мөнх тэнгэрийн шивнэж хэлсэн үгийг Бавуугийн Лхагвасүрэн гуай
            гайхамшигтай буулгажээ... »
          </p>
          <p className="author">Тэнгэрийн дор "үнэн" байх ёстой!</p>
        </SwiperSlide>
        <SwiperSlide className="swiper">
          <p className="text">« Тамгагүй төр »</p>
          <p className="author">1998 онд Улсын драмын эрдмийн театрт</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Action;
