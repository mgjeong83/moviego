'use client'; 

import React, { useState, useEffect } from 'react';
import { cn } from '@/app/lib';
import styles from './index.module.scss';
import { Button, Search } from '@/app/components';
import { IMediaProps } from '@/app/components/Molecules/Media'; 

interface IHeaderPorps {
  pageName: string | null;
  pageTitle?: string;
  apiData?: IMediaProps[]; // apiData는 선택적
  onSearch?: (results: IMediaProps[]) => void; 
}

const Header = ({ pageName, pageTitle, apiData, onSearch }: IHeaderPorps) => {
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

  // onSearch가 전달되지 않으면 기본값을 빈 함수로 설정
  const handleSearch = onSearch || ((results: IMediaProps[]) => {}); // 빈 함수로 기본 처리
  
  return (
    <>
      {pageName === null || pageName === '' ? (
        <></>
      ) : pageName === 'search' ? (
        <header className={cn(styles.header, styles.search )}>
          <Button btnType="icon" btnName="" btnUrl='goBack' btnImg="left" />
          {/* apiData와 onSearch가 전달되지 않으면 기본값을 사용 */}
          {apiData && onSearch ? <Search apiData={apiData} onSearch={handleSearch} /> : null}
        </header>
      ) : pageName === 'movie_detail' ? (
        <header className={cn(styles.header, styles.search)}>
          <Button btnType="icon" btnName="" btnUrl='goBack' btnImg="arrow_left" />
          <p className={cn(styles.header_title)}>{pageTitle}</p>
          <div className={cn(styles.header_search)}>
            <Button btnType="icon" btnName="" btnUrl="/search/" btnImg="search" />
          </div>
        </header>
      ) : pageName !== 'search' ? (
        <header className={cn(styles.header, `${scrollDirection}`)}>
          <h1 className={cn(styles.header_logo)}><Button btnType="text" btnName="MOVIEGO" btnUrl="/home/" btnImg="" /></h1>
          <div className={cn(styles.header_search)}>
            <Button btnType="icon" btnName="" btnUrl="/search/" btnImg="search" />
          </div>
        </header>
      ) : null}
    </>
  );
};

export default Header;
