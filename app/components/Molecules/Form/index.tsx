'use client';

import * as React from 'react';
import * as Types from './type';
import { cn } from '@/app/lib';
import styles from './index.module.scss';

const Form = React.forwardRef<Types.FormElement, Types.FormProps>((props, ref) => {
  const { className = '', ...rest } = props;

  return <div ref={ref} className={cn(styles.form, className)} {...rest} />;
});
Form.displayName = 'Form';
export default Form;
