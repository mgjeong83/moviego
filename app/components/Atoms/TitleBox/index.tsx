'use client';

import * as React from 'react';
import { cn } from '@/app/lib';
import styles from './index.module.scss';

interface ITitleBoxPorps {
  eyebrowText : string;
  titleText : string;
  descText : string;
}

const Icon = ({ eyebrowText, titleText, descText }: ITitleBoxPorps) => {
  return (
    <div className={cn(styles.title)}>
      {eyebrowText !== '' ? <p className={cn(styles.title_eyebrow)} dangerouslySetInnerHTML={{ __html: eyebrowText }} /> : '' }
      {titleText !== '' ? <h2 className={cn(styles.title_main)} dangerouslySetInnerHTML={{ __html: titleText }} /> : '' }
      {descText !== '' ? <p className={cn(styles.title_desc)} dangerouslySetInnerHTML={{ __html: descText }} /> : '' }
    </div>
  );
}
export default Icon;
