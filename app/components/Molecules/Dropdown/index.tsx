'use client';

import * as React from 'react';
import * as Types from './type';
import { cn } from '@/app/lib';
import styles from './index.module.scss';

const Dropdown = React.forwardRef<Types.DropdownElement, Types.DropdownProps>((props, ref) => {
  const { className = '', ...rest } = props;

  return <div ref={ref} className={cn(styles['drop-down'], className)} {...rest} />;
});
Dropdown.displayName = 'Dropdown';
export default Dropdown;
