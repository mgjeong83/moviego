import { cn } from '@/app/lib';
import styles from './index.module.scss';
import PlaceText from '../PlaceText';

export interface IPlaceProps {
  placeTitle: string;
  placeImg: string;
  placeLocation: string;
  placeType: string;
}

const Place = ({placeTitle, placeImg, placeLocation, placeType }:IPlaceProps) => {
  console.log(placeImg);
  return (
    <li className={cn(styles.place_item)}>
      <img src={`/images/data/${placeImg}.jpg`} alt={placeTitle} className={cn(styles.place_img)} />
      <div className={cn(styles.place_textbox)}>
        <p className={cn(styles.place_title)}>{placeTitle}</p>
        <PlaceText iconName='location' children={placeLocation}/>
        <PlaceText iconName='tag' children={placeType}/>
      </div>
    </li>
  )
}

export default Place;