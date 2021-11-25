import ActionSheet from 'actionsheet-react';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';

import { BoothListLayout } from './styles';

const NaverMap = () => {
  const ref = useRef();
  const [bottomBoothCard, setBottomBoothCard] = useState(true);
  const handleOpen = () => {
    ref.current.open();
  };

  const dummyBoothData = [
    {
      id: 0,
      image: '/images/01.jpg',
      title: '식품공학과의 달달한 마카롱',
      category: '체험 부스',
      boothNum: 4,
    },
    {
      id: 1,
      image: '/images/02.jpg',
      title: '다트 자신 있는 사람 모여라',
      category: '체험 부스',
      boothNum: 20,
    },
    {
      id: 2,
      image: '/images/03.jpg',
      title: '실사판 배틀그라운드',
      category: '체험 부스',
      boothNum: 13,
    },
    {
      id: 3,
      image: '/images/04.jpg',
      title: '식품공학과의 달달한 마카롱',
      category: '체험 부스',
      boothNum: 15,
    },
    {
      id: 4,
      image: '/images/05.jpg',
      title: '실사판 배틀그라운드',
      category: '체험 부스',
      boothNum: 13,
    },
    {
      id: 5,
      image: '/images/06.jpg',
      title: '식품공학과의 달달한 마카롱',
      category: '체험 부스',
      boothNum: 15,
    },
  ];

  const initMap = () => {
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.504391, 126.955831),
      minZoom: 21,
      scaleControl: false,
      logoControl: false,
      mapDataControl: false,
      zoomControl: false,
    });
    const LIKE_ICON = '/icon/ic-map-like.svg';
    const IMAGE_PATH = [
      '/images/01.jpg',
      '/images/02.jpg',
      '/images/03.jpg',
      '/images/04.jpg',
      '/images/05.jpg',
      '/images/06.jpg',
      '/images/07.jpg',
      '/images/08.jpg',
      '/images/09.jpg',
      '/images/10.jpg',
      '/images/11.jpg',
      '/images/12.jpg',
      '/images/13.jpg',
    ];

    const latLng = [
      [37.504337, 126.95618],
      [37.504316, 126.956234],
      [37.50441, 126.955891],
      [37.504434, 126.953],
      [37.504434, 126.955913],
      [37.503, 126.955913],
      [37.504287, 126.955805],
      [37.504381, 126.955757],
      [37.504434, 126.955913],
      [37.504391, 126.955831],
      [37.504434, 126.955913],
      [37.504434, 126.955913],
      [37.504434, 126.955913],
      [37.504434, 126.955913],
    ];

    let markers = [];
    for (let i = 0; i < 13; i++) {
      let marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(latLng[i][0], latLng[i][1]),
        map: map,
        icon: {
          content:
            `
            <div style="">
            <img alt="" src="` +
            IMAGE_PATH[i] +
            `" 
                style="
                  width: 50px; 
                  height: 50px; 
                  border-radius: 10px; 
                  border: solid 3px;
                  border-color: white;
                  "/>
                  <img alt="" src="` +
            LIKE_ICON +
            `" 
                    style="
                    width: 25px; 
                    position: absolute;
                    right: -8px;
                    top: -7px;
                    "/>   
            </div>      
            `,
        },
      });

      markers.push(marker);
    }

    for (let i = 0; i < markers.length; i++) {
      //naver.maps.Event.addListener(markers[i], 'click', onClickMarker);
    }
  };

  const onClickMarker = () => {
    setBottomBoothCard(true);
    handleOpen();
  };

  useEffect(() => {
    initMap();
    handleOpen();
  }, []);

  const mapStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <>
      <div id="map" style={mapStyle}>
        {bottomBoothCard ? (
          <ActionSheet
            ref={ref}
            bgStyle={{ background: 'rgba(0, 0, 0, 0.00)' }}
            onClose={() => setBottomBoothCard(false)}
            touchEnable={true}
            sheetStyle={{
              height: '43%',
              width: '100%',
              marginBottom: 48,
              overflowY: 'scroll',
            }}
          >
            <div
              style={{
                borderWidth: 1,
                fontSize: 16,
                marginTop: 38,
                marginLeft: 16,
                marginRight: 16,
                width: '90%',
              }}
            >
              <div
                style={{
                  borderWidth: 1,
                  marginBottom: 42,
                  fontSize: 24,
                  fontWeight: '600',
                  width: '90%',
                }}
              >
                중앙대
              </div>

              {dummyBoothData.map((booth) => {
                return (
                  <BoothListLayout>
                    <img src={booth.image} style={{ borderRadius: 8, width: 44, height: 44 }} />
                    <div style={{ marginLeft: 16 }}>
                      <div style={{ fontWeight: '600', marginBottom: 4, marginTop: 4 }}>
                        {booth.title}
                      </div>
                      <span style={{ color: '#8833FF', fontSize: 12 }}>{booth.category} ・ </span>
                      <span style={{ color: '#818798', fontSize: 12 }}>
                        {' '}
                        부스 번호 {booth.boothNum}
                      </span>
                    </div>
                  </BoothListLayout>
                );
              })}
            </div>
          </ActionSheet>
        ) : null}
      </div>
    </>
  );
};
export default NaverMap;
