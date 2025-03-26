import React from 'react';
import { TitleBox, Button } from '@/app/components';
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <main className='contents not-found'>
        <div className='inner'>
          <TitleBox 
            eyebrowText='앗..' 
            titleText='해당 페이지는 <br/>존재하지 않는 페이지에요.' 
            descText='이전 페이지나 홈으로 돌아가주세요.' 
          />
          <p className='not_big404'>404</p>
        </div>
        <div className="not_btn-wrap">
          <Link type='button' className='not_btn' href='/home/'>홈으로 가기</Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;
