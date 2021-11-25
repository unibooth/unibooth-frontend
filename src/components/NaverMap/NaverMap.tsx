import React, { useEffect, useState, useRef} from "react";
import Head from 'next/head';
import ActionSheet from 'actionsheet-react';


const NaverMap = () => {
    const ref = useRef();
    const [bottomBoothCard, setBottomBoothCard] = useState(true);
    const handleOpen = () => {
      ref.current.open();
    };

    const dummyBoothData= [
        {
          id: 0,
          image: '/image/01.jpg',
          title: '식품공학과의 달달한 마카롱',
          category: '체험 부스',
          boothNum: 4,
        },
        {
          id: 1,
          image: '/image/02.jpg',
          title: '다트 자신 있는 사람 모여라',
          category: '체험 부스',
          boothNum: 20,
        },
        {
          id: 2,
          image: '/image/03.jpg',
          title: '실사판 배틀그라운드',
          category: '체험 부스',
          boothNum: 13,
        },
        {
          id: 3,
          image: '/image/04.jpg',
          title: '식품공학과의 달달한 마카롱',
          category: '체험 부스',
          boothNum: 15,
        }
    ];



  const initMap = () => {

    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.504391, 126.955831),
      minZoom: 21,
      scaleControl: false,
      logoControl: false,
      mapDataControl: false,
      zoomControl: false,

    });
    const LIKE_ICON = '/icon/ic-map-like.svg';
    const IMAGE_PATH = [
      '/image/01.jpg',
      '/image/02.jpg',
      '/image/03.jpg',
      '/image/04.jpg',
      '/image/05.jpg',
      '/image/06.jpg',
      '/image/07.jpg',
      '/image/08.jpg',
      '/image/09.jpg',
      '/image/10.jpg',
      '/image/11.jpg',
      '/image/12.jpg',
      '/image/13.jpg',
    ];

    const latLng = [
      [37.504337, 126.956180], 
      [37.504316, 126.956234],
      [37.504410, 126.955891],
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
      [37.504434, 126.955913]
    ]

    let markers = [];
    for(let i=0; i<13; i++) {
       let marker =  new naver.maps.Marker({
          position: new naver.maps.LatLng(latLng[i][0], latLng[i][1]),
          map: map,
          icon: {
            content:  
            `
            <div style="">
            <img alt="" src="` + IMAGE_PATH[i] + `" 
                style="
                  width: 50px; 
                  height: 50px; 
                  border-radius: 10px; 
                  border: solid 3px;
                  border-color: white;
                  "/>
                  <img alt="" src="` + LIKE_ICON + `" 
                    style="
                    width: 25px; 
                    position: absolute;
                    right: -8px;
                    top: -7px;
                    "/>   
            </div>      
            `      
          },
        });

        markers.push(marker);
    }

    for(let i=0; i<markers.length; i++) {
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
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <div id="map" style={mapStyle}>

    {bottomBoothCard ?
        <ActionSheet 
          ref={ref} 
          bgStyle={{background: 'rgba(0, 0, 0, 0.00)'}} 
          onClose={()=> setBottomBoothCard(false)}
        
          sheetStyle={{
            height: '43%', width: '100%', marginBottom: 64
          }}>
            <div style={{
                borderWidth: 1,
                fontSize: 16,
                marginTop: 38,
                marginLeft: 16,
                marginRight: 16,
                width: '90%'
              }}>
              <div style={{
                borderWidth: 1,
                fontSize: 24,
                fontWeight: '600',
                width: '90%'
              }}> 
                중앙대
              </div>
      
              {dummyBoothData.map(booth => {
                return (
                  <div style={{
                    width: '100%',
                    borderWidth: 1
                    
                  }}>
                    <img src={booth.image} style={{borderRadius: 8, width: 44}}/>
                    {booth.title}
                  </div>
                );
            })}
        </div>
        </ActionSheet> 
        : null}




      </div>


      
    </>
  );
};
export default NaverMap;