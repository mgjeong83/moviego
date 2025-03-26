'use client';

import * as React from 'react';
import { cn } from '@/app/lib';
import styles from './index.module.scss';


interface IInputPorps {
  textSearch : string;
}

const Input = ({ textSearch }: IInputPorps) => {

  return (
    <input className={cn(styles.input, 'input-box')} />
  );
};
export default Input;
