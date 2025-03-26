'use client';

import * as React from 'react';
import * as Types from './type';
import { cn } from '@/app/lib';
import Header from '@/app/components/Organisms/Header';
import Footer from '@/app/components/Organisms/Footer';

import styles from './index.module.scss';

const Layout = (props: Types.LayoutProps) => {
  const { className = 'layout', children, ...rest } = props;

  return (
    <div className={cn(styles.layout, 'wrap', className)} {...rest}>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
