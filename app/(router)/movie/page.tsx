'use client';

import { useState, useEffect } from 'react';
import { ButtonSort, MediaList, Tabs, Navigator, Header } from '@/app/components';
import { useSearchParams } from 'next/navigation';
import mediaItems from '@/app/api/mediaItems.json';
import { IMediaProps } from '@/app/components/Molecules/Media'; 

const Page = () => {
	const [searchResults, setSearchResults] = useState<IMediaProps[]>([]); // 검색 결과 상태 관리
	const [buttonText, setButtonText] = useState<string>('최신순'); // 부모 상태로 관리할 buttonText
	const [classText, setClassText] = useState('twoline');

	// searchParams를 사용하여 type 파라미터를 가져옵니다.
	const searchParams = useSearchParams();
	const pageName = searchParams?.get('type');

	// searchParams가 변경되거나 처음 방문일 때 필터링된 데이터를 업데이트
	useEffect(() => {
		if (pageName === '' || pageName === 'all') {
			setSearchResults(mediaItems); // "all"일 경우 모든 데이터를 보여줍니다.
		} else if (pageName) {
			// 특정 타입을 필터링
			const filteredData = mediaItems.filter(item => item.mediaType === pageName);
			setSearchResults(filteredData);
		} else {
			setSearchResults(mediaItems); // pageName이 없으면 검색 결과를 비워놓음
		}
	}, [pageName]);

	// buttonText를 업데이트하는 함수
	const handleButtonTextChange = (newButtonText: string) => {
		setButtonText(newButtonText);
		// 최신순, 이름순 정렬
		if (searchResults) {
			let sorted: IMediaProps[] = [];
		
			if (newButtonText === '최신순') {
				sorted = [...searchResults].sort((a, b) => {
					const dateA = new Date(a.mediaDate).getTime();
					const dateB = new Date(b.mediaDate).getTime();
					return dateB - dateA; // 최신순 (내림차순)
				});
			} else if (newButtonText === '이름순') {
				sorted = [...searchResults].sort((a, b) => {
					const nameA = a.mediaTitle.toLowerCase();
					const nameB = b.mediaTitle.toLowerCase();
					return nameA.localeCompare(nameB); // 이름순 (오름차순)
				});
			}
			setSearchResults(sorted);
		}
	};

	const handleButtonTextChange2 = (newButtonText: string) => {

		setClassText(newButtonText);
		console.log(classText);
	};

	return (
		<>
			<Header pageName='movie' />
			<main className='movie contents'>
				<Tabs cateMode='text' cateName={pageName} />
				<section className="sort">
					<div className="inner">
						<ButtonSort sortType='text' isOn={true} children='최신순' onButtonTextChange={handleButtonTextChange}/>
						<ButtonSort sortType='layout' isOn={false} children='oneline' onButtonTextChange={handleButtonTextChange2}/>
					</div>
				</section>
				<section>
					<div className="inner">
						<MediaList mediaItems={searchResults} classChange={classText} />
					</div>
				</section>
				<Navigator pageOn={2} />
			</main>
		</>
	);
};

export default Page;
