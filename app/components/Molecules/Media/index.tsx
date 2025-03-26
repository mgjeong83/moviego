'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/app/lib';
import styles from './index.module.scss';

// component
import { MediaPlaceList } from '@/app/components';

export interface IMediaProps {
  mediaLink: string;
  mediaTitle: string;
  mediaImg: string;
  mediaType: string;
  mediaDesc: string;
  mediaDate: number;
  mediaPlace ?: object;
  isDetail?: boolean; 
}

const Media = ({ mediaLink, mediaTitle, mediaDesc, mediaImg, mediaType, mediaPlace, isDetail }: IMediaProps) => {
  
  const mediaPlaces = Array.isArray(mediaPlace) ? mediaPlace : [mediaPlace];

  const MediaTypeMap: Record<string, string> = {
    'movie': '영화',
    'drama': '드라마',
    'variety': '예능',
    'ect': '기타',
  };
  
  let mediaTypeText = MediaTypeMap[mediaType as keyof typeof MediaTypeMap] || '';

  return (
    <li className={cn(styles.media_item, isDetail && styles.on)}>
      <Link href={`/movie/${mediaLink}`} className={cn(styles.media_link)}>
        <img src={`/images/data/${mediaImg}.jpg`} alt={mediaTitle} className={cn(styles.media_img)} />
        <div className={cn(styles.media_textbox)}>
          <p className={cn(styles.media_type)}>{mediaTypeText}</p>
          <p className={cn(styles.media_title)}>{mediaTitle}</p>
          <MediaPlaceList mediaPlace={mediaPlaces}/>
          {isDetail ? <p className={cn(styles.media_desc)}>{mediaDesc}</p> : '' }
        </div>
      </Link>
    </li>
  );
}

export default Media;