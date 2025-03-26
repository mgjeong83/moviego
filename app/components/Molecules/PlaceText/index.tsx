'use client';

import * as React from 'react';
import { cn } from '@/app/lib';
import styles from './index.module.scss';
import { Icon } from '@/app/components';


interface IPlaceTextProps {
	iconName: string;
	children: string;
}

const PlaceText = ({ iconName, children }:IPlaceTextProps) => {
	return (
		<li className={cn(styles.place_text)}>
			<div className={cn(styles.button_icon, styles.place_icon)}>
				<Icon iconName={iconName} />
			</div>
			<p>{children}</p>
		</li>
	)
}

export default PlaceText;