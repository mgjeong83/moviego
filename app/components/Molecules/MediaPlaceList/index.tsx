'use client';

import * as React from 'react';
import { cn } from '@/app/lib';
import styles from './index.module.scss';
import MediaPlace, {IMediaPlace} from '../MediaPlace';


interface IMediaPlaceListProps {
    mediaPlace: IMediaPlace[];  // Expect an array of IMediaPlace objects
}

const MediaPlaceList = ({ mediaPlace }: IMediaPlaceListProps) => {
    return (
        <ul className={cn(styles.media_placelist)}>
            {mediaPlace.map((item, i) => (
                <MediaPlace
                    key={i}
                    mediaPlace={item}  // Pass the whole object here
                />
            ))}
        </ul>
    );
}

export default MediaPlaceList;