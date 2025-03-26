'use client';

import * as React from 'react';
import { cn } from '@/app/lib';
import styles from './index.module.scss';
import Media, { IMediaProps } from '../Media'; 

interface IMediaListProps {
  mediaItems: IMediaProps[];
  classChange?: string;
}

const MediaList = ({ mediaItems, classChange }: IMediaListProps) => {
  return (
    <ul className={cn(styles.media_list, `${classChange}`)}>
      {mediaItems.map((item) => (
        <Media
          key={item.mediaLink}
          mediaLink={item.mediaLink}
          mediaTitle={item.mediaTitle}
          mediaDesc={item.mediaDesc}
          mediaImg={item.mediaImg}
          mediaType={item.mediaType}
          mediaDate={item.mediaDate}
          mediaPlace={item.mediaPlace}
        />
      ))}
    </ul>
  );
};

export default MediaList;