'use client';

import * as React from 'react';
import { cn } from '@/app/lib';
import styles from './index.module.scss';
import IconSearch from '@/public/images/icon/search.svg';
import IconHome from '@/public/images/icon/home.svg';
import IconHomeOn from '@/public/images/icon/home_on.svg';
import IconMovie from '@/public/images/icon/movie.svg';
import IconMovieOn from '@/public/images/icon/movie_on.svg';
import IconPlay from '@/public/images/icon/play.svg';
import IconStop from '@/public/images/icon/stop.svg';
import IconError from '@/public/images/icon/error.svg';
import IconLocation from '@/public/images/icon/location.svg';
import IconTag from '@/public/images/icon/tag.svg';
import IconLeft from '@/public/images/icon/left.svg';
import IconRight from '@/public/images/icon/right.svg';
import IconOneLine from '@/public/images/icon/onelist.svg';
import IconTwoLine from '@/public/images/icon/twolist.svg';
import IconArrowLeft from '@/public/images/icon/arrow_left.svg';
interface IIconPorps {
  iconName : string;
}

const Icon = ({ iconName }: IIconPorps) => {

  const IconMap: Record<string, string> = {
    'search': '검색 아이콘',
    'home': '홈 아이콘',
    'home_on': '홈 아이콘',
    'movie': '영상 아이콘',
    'movie_on': '영상 아이콘',
    'play': '재생 아이콘',
    'stop': '정지 아이콘',
    'error': '에러 아이콘',
    'location': '지도 아이콘',
    'tag': '태그 아이콘',
    'left': '왼쪽 화살표 아이콘',
    'right': '오른쪽 화살표 아이콘',
    'oneline': '한 줄 리스트 아이콘',
    'twoline': '두 줄 리스트 아이콘',
    'arrow_left': '뒤로가기 아이콘',
  };
  
  let iconAlt = IconMap[iconName as keyof typeof IconMap] || '';

  return (
    <>
      {iconName === 'home' ? <IconHome className={cn(styles.icon, `${iconName}`, 'icon-box')} alt={iconAlt}/> : '' }
      {iconName === 'search' ? <IconSearch className={cn(styles.icon, `${iconName}`, 'icon-box')} alt={iconAlt}/> : '' }
      {iconName === 'home_on' ? <IconHomeOn className={cn(styles.icon, `${iconName}`, 'icon-box')} alt={iconAlt}/> : '' }
      {iconName === 'movie' ? <IconMovie className={cn(styles.icon, `${iconName}`, 'icon-box')} alt={iconAlt}/> : '' }
      {iconName === 'movie_on' ? <IconMovieOn className={cn(styles.icon, `${iconName}`, 'icon-box')} alt={iconAlt}/> : '' }
      {iconName === 'play' ? <IconPlay className={cn(styles.icon, `${iconName}`, 'icon-box')} alt={iconAlt}/> : '' }
      {iconName === 'stop' ? <IconStop className={cn(styles.icon, `${iconName}`, 'icon-box')} alt={iconAlt}/> : '' }
      {iconName === 'error' ? <IconError className={cn(styles.icon, `${iconName}`, 'icon-box')} alt={iconAlt}/> : '' }
      {iconName === 'location' ? <IconLocation className={cn(styles.icon, `${iconName}`, 'icon-box')} alt={iconAlt}/> : '' }
      {iconName === 'tag' ? <IconTag className={cn(styles.icon, `${iconName}`, 'icon-box')} alt={iconAlt}/> : '' }
      {iconName === 'left' ? <IconLeft className={cn(styles.icon, `${iconName}`, 'icon-box')} alt={iconAlt}/> : '' }
      {iconName === 'right' ? <IconRight className={cn(styles.icon, `${iconName}`, 'icon-box')} alt={iconAlt}/> : '' }
      {iconName === 'oneline' ? <IconOneLine className={cn(styles.icon, `${iconName}`, 'icon-box')} alt={iconAlt}/> : '' }
      {iconName === 'twoline' ? <IconTwoLine className={cn(styles.icon, `${iconName}`, 'icon-box')} alt={iconAlt}/> : '' }
      {iconName === 'arrow_left' ? <IconArrowLeft className={cn(styles.icon, `${iconName}`, 'icon-box')} alt={iconAlt}/> : '' }
    </>
  );
}
export default Icon;
