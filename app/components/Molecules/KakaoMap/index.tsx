'use client';
import { cn } from '@/app/lib';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';

interface KakaoMapProps {
  places: any[]; // 타입 명시하지 않음 (MediaPlaceItem 사용 안 함)
}

const KakaoMap = ({ places }: KakaoMapProps) => {
  useEffect(() => {
    const win = window as typeof window & {
      kakao: any;
    };

    const loadMap = () => {
      const container = document.getElementById('map');
      if (!container) return;

      const map = new win.kakao.maps.Map(container, {
        center: new win.kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
      });

      const bounds = new win.kakao.maps.LatLngBounds();

      places.forEach((place) => {
        const latlng = new win.kakao.maps.LatLng(place.latitude, place.longitude);
        const marker = new win.kakao.maps.Marker({
          map,
          position: latlng,
        });

        const infowindow = new win.kakao.maps.InfoWindow({
          content: `<div style="padding:5px;font-size:13px;">${place.placeTitle}</div>`,
        });

        win.kakao.maps.event.addListener(marker, 'mouseover', () => infowindow.open(map, marker));
        win.kakao.maps.event.addListener(marker, 'mouseout', () => infowindow.close());

        bounds.extend(latlng);
      });

      map.setBounds(bounds);
    };

    if (win.kakao && win.kakao.maps) {
      win.kakao.maps.load(() => loadMap());
      return;
    }

    if (document.getElementById('kakao-map-script')) return;

    const script = document.createElement('script');
    script.id = 'kakao-map-script';
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=62d0e30e7e1088bdfd55a131f9ab9803&autoload=false';
    script.async = true;
    script.onload = () => {
      win.kakao.maps.load(() => loadMap());
    };

    document.head.appendChild(script);
  }, [places]);

  return (
    <>
      <div id="map" className={cn(styles.map)} />
    </>
  ) 
};

export default KakaoMap;