'use client';

import * as React from 'react';
import { cn } from '@/app/lib';
import styles from './index.module.scss';
import Place, { IPlaceProps } from '../Place';

interface IPlaceListProps {
  placeItems: IPlaceProps[];
}

const PlaceList = ({ placeItems }: IPlaceListProps) => {
  return (
    <ul className={cn(styles.place_list)}>
      {placeItems.map((item) => (
        <Place
          key={item.placeTitle}
          placeTitle={item.placeTitle}
          placeImg={item.placeImg}
          placeLocation={item.placeLocation}
          placeType={item.placeType}
        />
      ))}
    </ul>
  )
}

export default PlaceList;