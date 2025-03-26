'use client';

import * as React from 'react';
import { useState } from 'react';
import styles from './index.module.scss';
import { Icon } from '@/app/components';

interface IButtonSortProps {
    sortType: "text" | "layout";
    children: string;
    isOn: boolean;
    onButtonTextChange?: (newButtonText: string) => void; // buttonText 변경을 부모로 전달하는 함수
}

const ButtonSort = ({ sortType, children, onButtonTextChange }: IButtonSortProps) => {

  const [isOn, setIsOn] = useState(false);
  const [buttonText, setButtonText] = useState(children);

  const toggleClass = () => {
    setIsOn((prev) => !prev);
    let newButtonText = buttonText;
    switch(buttonText) {
      case '최신순' : setButtonText('이름순'); break;
      case '이름순' : setButtonText('최신순'); break;
      case 'oneline' : setButtonText('twoline'); break;
      case 'twoline' : setButtonText('oneline'); break;
    }

    if (onButtonTextChange) {
      onButtonTextChange(newButtonText); // 부모로 값 전달
    }
  }


  return (
    <button type='button' onClick={toggleClass} className={`${styles.sortbtn} ${isOn ? styles.sortbtn_on : ''} ${sortType === 'layout' ? styles.layout : ''}`}>
      {sortType === "text" ? (
        <span>{buttonText}</span>
      ):(
        <Icon iconName={buttonText} />
      )}
    </button>
  )
}

export default ButtonSort;