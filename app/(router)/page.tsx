'use client';  // 반드시 첫 번째 줄에 위치해야 합니다.

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TextAni } from '@/app/components';

const Page = () => {
  const router = useRouter();  // useRouter 훅 사용

  useEffect(() => {
    // 3초 후에 /home으로 이동
    const timer = setTimeout(() => {
      router.replace('/home');  // 페이지 이동 (히스토리 스택에 기록되지 않음)
    }, 5000);

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <main className="contents intro">
        <div className="intro_logo">
          <img src="/images/temp/logo.png" alt="MovieGo Logo" />
        </div>
        <div className="intro_text">
          <TextAni aniText="MOVIEGO" />
        </div>
      </main>
    </>
  );
};

export default Page;
