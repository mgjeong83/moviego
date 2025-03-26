'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/app/lib';
import styles from './index.module.scss';
import { Button } from '@/app/components';

interface INavigatorPorps {
  pageOn : number;
}

const Navigator = ({ pageOn }: INavigatorPorps) => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down'); // 아래로 스크롤
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up'); // 위로 스크롤
      }

      setLastScrollY(currentScrollY); // 마지막 스크롤 위치 업데이트
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={cn(styles.navigator, `${scrollDirection}`)}>
      <ul className={cn(styles.navigator_list)}>
        <li className={cn(styles.navigator_item)}>
          {pageOn === 1 ? (
            <Button btnType='icon' btnName='' btnUrl='/home/' btnImg='home_on' /> 
          ) : ( 
            <Button btnType='icon' btnName='' btnUrl='/home/' btnImg='home' /> 
          )}
        </li>
        <li className={cn(styles.navigator_item)}>
          {pageOn === 2 ? (
            <Button btnType='icon' btnName='' btnUrl='/movie/' btnImg='movie_on' />
          ) : ( 
            <Button btnType='icon' btnName='' btnUrl='/movie/' btnImg='movie' />
          )}
        </li>
        <li className={cn(styles.navigator_item)}>
          <Button btnType='icon' btnName='' btnUrl='' btnImg='error' />
        </li>
      </ul>
    </nav>
  );
};
export default Navigator;
