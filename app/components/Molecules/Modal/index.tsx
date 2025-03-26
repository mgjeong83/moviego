'use client';
import React from 'react';
import { cn } from '@/app/lib';
import styles from './index.module.scss';
import KakaoMap from '../KakaoMap';

interface ModalProps {
  isOpen: boolean;
  places: any[];
}

const Modal = ({ isOpen, places }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={cn(styles.modal_content)} onClick={(e) => e.stopPropagation()}>
      <KakaoMap places={places} />
    </div>
  );
};

export default Modal;