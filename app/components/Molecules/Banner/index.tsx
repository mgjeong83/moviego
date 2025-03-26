'use client';

import * as React from 'react';
import * as Types from './type';
import { cn } from '@/app/lib';
import styles from './index.module.scss';

const Banner = React.forwardRef<Types.BannerElement, Types.BannerProps>((props, ref) => {
  const { className = '', ...rest } = props;

  return <div ref={ref} className={cn(styles.banner, className)} {...rest} />;
});
Banner.displayName = 'Banner';
export default Banner;
