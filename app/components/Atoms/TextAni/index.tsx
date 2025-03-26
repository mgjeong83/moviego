'use client';

import * as React from 'react';
import { cn } from '@/app/lib';
import styles from './index.module.scss';

interface ITextPorps {
  aniText : string;
}

const Icon = ({ aniText }: ITextPorps) => {
  return (
    <div className={cn(styles.text)}>
      {aniText.split('').map((char, index) => (
        <span key={index} className={cn(styles.text_moving)} style={{ '--i': index }}>
          {char}
        </span>
      ))}
    </div>
  );
}
export default Icon;
