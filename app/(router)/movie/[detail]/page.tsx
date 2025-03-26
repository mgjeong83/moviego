'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import mediaItems from '@/app/api/mediaItems.json';
import { Media, PlaceList, Modal, Header } from '@/app/components';
import { IPlaceProps } from '@/app/components/Molecules/Place';

interface MediaPlaceItem {
  placeImg: string;
  placeTitle: string;
  placeLocation: string;
  placeType: string;
}

interface MediaItem {
  mediaLink: string;
  mediaImg: string;
  mediaType: string;
  mediaTitle: string;
  mediaDesc: string;
  mediaDate: number;
  mediaPlace: MediaPlaceItem[] | string[];
}

const convertToPlaceProps = (
  placeData: MediaPlaceItem[] | string[]
): IPlaceProps[] => {
  return placeData.map((item: any) => {
    if (typeof item === 'string') {
      return {
        placeTitle: item,
        placeImg: '/default-image.jpg',
        placeLocation: '위치 정보 없음',
        placeType: '기타',
      };
    } else {
      return {
        placeTitle: item.placeTitle,
        placeImg: item.placeImg,
        placeLocation: item.placeLocation,
        placeType: item.placeType,
      };
    }
  });
};

const DetailPage = ({ params }: { params: { detail: string } }) => {
  const mediaItem: MediaItem | undefined = mediaItems.find(
    (item) => item.mediaLink === params.detail
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMediaTitle, setIsMediaTitle] = useState('');

  useEffect(() => {
    if (mediaItem) {
      setIsMediaTitle(mediaItem.mediaTitle);
    }
  }, [mediaItem]);


  if (!mediaItem) return notFound();

  const onClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header pageName='movie_detail' pageTitle={isMediaTitle} />
      <main className='detail'>
        <section className="long">
          <div className="inner">
            <Media
              mediaLink={mediaItem.mediaLink}
              mediaImg={mediaItem.mediaImg}
              mediaTitle={mediaItem.mediaTitle}
              mediaDesc={mediaItem.mediaDesc}
              mediaType={mediaItem.mediaType}
              mediaDate={mediaItem.mediaDate}
              mediaPlace={mediaItem.mediaPlace}
              isDetail={true}
            />
          </div>
        </section>
        <section>
          <div className="inner">
            <p className="subtitle">Travel's</p>
            <h2 className="title">{mediaItem.mediaTitle} 촬영지로 <br/>여행을 떠나볼까요?</h2>
            <PlaceList placeItems={convertToPlaceProps(mediaItem.mediaPlace)} />
          </div>
        </section>
        <div className="detail_btn-wrap">
          { isModalOpen ?
          <button type='button' className='detail_btn' onClick={handleCloseModal}>여행 멈추기</button>
          : <button type='button' className='detail_btn' onClick={onClick}>출발하기</button>
          }
      </div>
        <Modal isOpen={isModalOpen} places={mediaItem.mediaPlace}/>
      </main>
    </>
  );
};

export default DetailPage;