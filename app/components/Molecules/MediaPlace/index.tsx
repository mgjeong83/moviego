'use client';

import * as React from 'react';
import { cn } from '@/app/lib';
import styles from './index.module.scss';

export interface IMediaPlace {
    placeTitle ?: string;
    placeLocation ?: string;
    placeType ?: string;
}

interface IMediaPlaceProps {
    mediaPlace: IMediaPlace;  // Expect the full object with all keys
}

const MediaPlace = ({ mediaPlace = {} }: IMediaPlaceProps) => {
    const { placeTitle, placeLocation, placeType } = mediaPlace;  // Destructure the properties

    return (
        <li className={cn(styles.media_place)}>
            <div># {placeTitle}</div>
            {/* <div className="">{placeLocation}</div>
            <div className="">{placeType}</div> */}
        </li>
    );
}

export default MediaPlace;