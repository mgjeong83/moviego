'use client';

import React, {useState} from 'react';
import { cn } from '@/app/lib';
import styles from './index.module.scss';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@/app/components';

interface IIconPorps {
  data: {
    img: string,
    alt: string
  }[];
}

const SwiperMain = ({ data }: IIconPorps) => {

  const [isToggled, setIsToggled] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const swiperPlay = () => {
    setIsToggled(!isToggled);
    if(!isToggled){
      swiperInstance.autoplay.start();
    }else{
      swiperInstance.autoplay.stop();
    }
  };

  return (
    <section className={cn(styles.mainslide)}>
      <Swiper onSwiper={setSwiperInstance} className='mySwiper'
        modules={[Autoplay, EffectCoverflow, Pagination]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 60,
          stretch: 20,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay= {isToggled ? { delay: 2000, disableOnInteraction: false } : false }
        pagination={{ el: '.swiper-pagination', clickable: true }}
        loop
      >
        {data.map((slideItem, index) => (
          <SwiperSlide><img src={slideItem.img} alt={slideItem.alt} /></SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.navigation}>
        <div className="swiper-pagination"></div>
        <button type='button' className={styles.btn_play} onClick={swiperPlay}>{!isToggled ? <Icon iconName='play' /> : <Icon iconName='stop' /> }</button>
      </div>
    </section>
  );
}
export default SwiperMain;
