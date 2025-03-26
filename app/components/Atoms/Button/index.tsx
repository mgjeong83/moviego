'use client';

import * as React from 'react';
import { cn } from '@/app/lib';
import styles from './index.module.scss';
import Link from 'next/link';
import { Icon } from '@/app/components';
import { useRouter } from 'next/navigation';

interface IButtonPorps {
  btnType: string;
  btnName: string;
  btnUrl: string;
  btnImg: string;
}

/*
btnType: basic, box, line, icon, img, custom
*/
const Button = ({ btnType, btnName, btnUrl, btnImg }: IButtonPorps) => {
  const router = useRouter();

  const goBack = (): void => {
    router.back(); // 뒤로 가기
  };

  // goBack인 경우 button 사용
  if (btnUrl === 'goBack') {
    return (
      <button className={cn(styles.button, styles[btnType], 'btn-box')} onClick={goBack}>
        {btnType === 'icon' && btnImg ? (
          <div className={cn(styles.button_icon, 'btn-icon')}>
            <Icon iconName={btnImg} />
          </div>
        ) : null}
        {btnType === 'img' && btnImg ? (
          <div className={cn(styles.button_img, 'btn-img')}>
            <img src={btnImg} alt={btnName} />
          </div>
        ) : null}
        {btnName ? (
          <p className={cn(styles.button_text, 'btn-text')}>{btnName}</p>
        ) : null}
      </button>
    );
  }

  // 검색색 사용
  if (btnUrl === 'submit') {
    return (
      <button type="submit" className={cn(styles.button, styles[btnType], 'btn-box')} >
        <div className={cn(styles.button_icon, 'btn-icon')}>
          <Icon iconName={btnImg} />
        </div>
      </button>
    );
  }

  // 그 외에는 Link 사용
  return (
    <Link className={cn(styles.button, styles[btnType], 'btn-box')} href={btnUrl}>
      {btnType === 'icon' && btnImg ? (
        <div className={cn(styles.button_icon, 'btn-icon')}>
          <Icon iconName={btnImg} />
        </div>
      ) : null}
      {btnType === 'img' && btnImg ? (
        <div className={cn(styles.button_img, 'btn-img')}>
          <img src={btnImg} alt={btnName} />
        </div>
      ) : null}
      {btnName ? (
        <p className={cn(styles.button_text, 'btn-text')}>{btnName}</p>
      ) : null}
    </Link>
  );
};

export default Button;
