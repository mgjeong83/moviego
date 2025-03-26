'use client';

import * as React from 'react';
import { cn } from '@/app/lib';
import styles from './index.module.scss';
import { usePathname } from 'next/navigation';


const Footer = () => {
  const params = usePathname();
  const pageName = params?.split('/')[1];
  const pageName2 = params?.split('/')[2];

  return (
    <>
      {pageName === null || pageName === '' || pageName === 'search' || pageName === 'not-found' || pageName2 ? (
        <></>
      ) : pageName == 'home' || pageName == 'movie' ? (
        <footer className={cn(styles.footer)} >
          <h2 className={cn(styles.footer_logo)}>MOVIEGO</h2>
          <ul className={cn(styles.footer_map)}>
            <li>Intro</li>
            <li>Home</li>
            <li>Movie</li>
            <li>Search</li>
            <li>404error</li>
          </ul>
          <ul className={cn(styles.footer_sns)}>
            <li>facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
          <p className={cn(styles.footer_copy)}>© 2025, MOVIEGO. All Rights Reserved.</p>
          <p className={cn(styles.footer_producer)}>PRODUCER: Jin, ChangGi, YuMi</p>
        </footer>
      ) : null}
    </>

  );
};
export default Footer;
