'use client';

import React, { useState } from 'react';
import { cn } from '@/app/lib';
import styles from './index.module.scss';
import { Input, Button } from '@/app/components';
import { IMediaProps } from '@/app/components/Molecules/Media'; 

interface ISearchProps {
  apiData: IMediaProps[]; // apiData는 IMedia 타입의 배열
  onSearch: (results: IMediaProps[]) => void; // 부모 컴포넌트로 검색 결과 전달
}

const Search = ({ apiData, onSearch }: ISearchProps) => {
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태 관리
  const [results, setResults] = useState<IMediaProps[]>([]); // results의 타입을 IMedia[]로 수정

  // 검색 폼 제출 시 처리 함수
  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault(); // 폼 제출 시 페이지 리로드 방지

    // 검색어에 맞는 결과 필터링
    const filteredResults = apiData.filter((item) =>
      item.mediaTitle.toLowerCase().includes(searchQuery.toLowerCase()) // mediaTitle을 기준으로 필터링
    );

    onSearch(filteredResults); // 부모 컴포넌트로 결과 전달
  };

  return (
    <div className={cn(styles.search, 'search_box')}>
      <form onSubmit={handleSearch}>
        <div className={cn(styles.search_input)}>
          <input className={cn(styles.input, 'input-box')}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // 입력값 변경 시 상태 업데이트
            placeholder="검색어를 입력하세요"
          />
        </div>
        <div className={cn(styles.search_btn)}>
          <Button btnType="icon" btnName="" btnUrl="submit" btnImg="search" />
        </div>
      </form>
    </div>
  );
};

export default Search;
