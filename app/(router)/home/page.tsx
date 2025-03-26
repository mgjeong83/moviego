'use client';

import { Icon, Navigator, Button, SwiperMain, Tabs, MediaList, TitleBox, Header } from '@/app/components';
import mediaItems from '@/app/api/mediaItems.json';

const msData = [
  { img:'/images/temp/main_slide01.jpg', alt:'main01' },
  { img:'/images/temp/main_slide02.jpg', alt:'main02' },
  { img:'/images/temp/main_slide03.jpg', alt:'main03' },
  { img:'/images/temp/main_slide04.jpg', alt:'main04' },
  { img:'/images/temp/main_slide05.jpg', alt:'main05' }
]

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const Page = () => {

  // 현재 날짜를 생성
  const today = new Date();

  // 월과 일 추출
  const month = today.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줌
  const day = today.getDate();
  const descText = `${month}월 ${day}일 가장 인기 있는 여행지`; // 템플릿 리터럴 사용

  // mediaItems를 랜덤하게 섞고 5개만 가져오기
  const shuffledMediaItems = shuffleArray([...mediaItems]).slice(0, 5);

	return (
    <>
    <Header pageName='home' />
		<main className='contents home'>
			<SwiperMain data={msData} />
      <Tabs cateMode='img' cateName='' />
      <section className='rec'>
        <div className='inner'>
          <TitleBox eyebrowText='' titleText='<strong>MOVIEGO</strong>에서 추천하는 <br/>오늘의 영화 속 여행지' descText={descText} />
        </div>
				<div className="inner">
					<MediaList mediaItems={shuffledMediaItems} />
				</div>
      </section>
			<Navigator pageOn={1} />
		</main>
    </>
	);
};

export default Page;
