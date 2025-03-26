'use client';

import React, {useState, useEffect} from 'react';
import { cn } from '@/app/lib';
import styles from './index.module.scss';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@/app/components';

// import Image from 'next/image';

interface ITabProps {
	cateMode: string;
  cateName: string | null;
}

const Tabs = ({cateMode, cateName}: ITabProps) => {
  const [isFirstVisit, setIsFirstVisit] = useState(0); // 처음 방문 여부 상태 관리
  const [swiperInstance, setSwiperInstance] = useState<any>(null); // swiper 인스턴스 상태 관리

  const itemInfo = [
    { num:1, name:'ALL', img:'/images/temp/category_all.jpg', url:'/movie/?type=all'},
    { num:2, name:'영화', img:'/images/temp/category_movie.jpg', url:'/movie/?type=movie'},
    { num:3, name:'드라마', img:'/images/temp/category_drama.jpg', url:'/movie/?type=drama'},
    { num:4, name:'예능', img:'/images/temp/category_variety.jpg', url:'/movie/?type=variety'},
    { num:5, name:'기타', img:'/images/temp/category_etc.jpg', url:'/movie/?type=etc'},
  ];

  const cateMap: Record<string, number> = {
    'all': 0,
    'movie': 1,
    'drama': 2,
    'variety': 3,
    'etc': 4,
  };
  
  let cateNum = cateMap[cateName as keyof typeof cateMap] || '0';
  cateNum = parseInt(cateNum as string, 10);

  // useEffect에서 슬라이드를 변경하려면 swiper 인스턴스가 필요함
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(isFirstVisit); // swiper 인스턴스에서 슬라이드 이동
    }
    setIsFirstVisit(cateNum); // 첫 방문 여부를 상태로 업데이트
  }, [cateNum, isFirstVisit, swiperInstance]); // cateNum 또는 swiper 인스턴스가 변경되면 실행


	return (
		<section className={cn(styles.tabs, styles[cateMode])}>
      <Swiper className={cn('swiper', styles['tabs_swiper'])}
        spaceBetween={0}
        slidesPerView={'auto'}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          swiper.slideTo(isFirstVisit);
        }}
      >
        {itemInfo.map((item, index) => (
        <SwiperSlide key={index} className={cn(styles.tabs_item, `${isFirstVisit == index ? styles['tabs_item-on'] : '' }`)}>
          <Button btnType={cateMode} btnName={item.name} btnUrl={item.url} btnImg={item.img}/>
        </SwiperSlide>
        ))}
      </Swiper>
	  </section>
	)
}



export default Tabs;