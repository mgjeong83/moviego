'use client';

import { useState } from 'react';
import { TitleBox, Header, MediaList } from '@/app/components';
import mediaItems from '@/app/api/mediaItems.json';
import { IMediaProps } from '@/app/components/Molecules/Media'; 

const Page = () => {
  const [searchResults, setSearchResults] = useState<IMediaProps[]>([]); // 검색 결과 상태 관리
  const [isFirstVisit, setIsFirstVisit] = useState(true); // 처음 방문 여부 상태 관리

  // 검색 결과를 업데이트하는 함수
  const handleSearchResults = (results: IMediaProps[]) => {
    setSearchResults(results); // 검색 결과 상태 업데이트
    setIsFirstVisit(false); // 검색이 시작되면 첫 방문 상태를 false로 설정
  };

  // 처음 방문 시, 검색된 결과가 없으면 메시지를 다르게 처리
  const renderMessage = () => {
    if (isFirstVisit) {
      return (
        <TitleBox 
          eyebrowText='' 
          titleText='<strong>MOVIEGO</strong> <br/>검색창에 입력해주세요.' 
          descText='다른 검색어를 입력해보세요.' 
        />
      );
    }

    return (
      <TitleBox 
        eyebrowText='앗..' 
        titleText='검색 결과가 <br/>존재하지 않아요.' 
        descText='다른 검색어를 입력해보세요.' 
      />
    );
  };

	return (
    <>
      <Header pageName='search' apiData={mediaItems} onSearch={handleSearchResults} />
      <main className='contents search'>
        <div className='search_banner'>
          <img src='/images/temp/search_banner01.jpg' />
        </div>
        <section className='search_content'>
          <div className='inner'>
            {/* 검색 결과를 출력 */}
            {searchResults.length > 0 ? (
              <>
                <p className='search_length'>검색결과 ({searchResults.length})</p>
                <MediaList mediaItems={searchResults} />
              </>
            ) : (
              renderMessage() // 메시지 표시
            )}
          </div>
        </section>

      </main>
    </>
	);
};

export default Page;
