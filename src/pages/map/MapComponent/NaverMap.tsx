import React, { useEffect } from "react";
import Head from 'next/head';
import ex from '../../../assets/img/map/01.jpg';

const MapD = () => {

  const initMap = () => {
    const map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.504434, 126.955913),
      zoom: 19,
      scaleControl: false,
      logoControl: false,
      mapDataControl: false,
      zoomControl: false,
      minZoom: 15,
    });

    const IMAGE_PATH = '/image/01.jpg';

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.504434, 126.955913),
      map: map,
      icon: {
        content: `
        <div 
          style="width: 40%; 
                hegith: 30%;  
                border-radius: 10px; 
                background-color: white; 
                align-content: start;">
          
        <img alt="" src="` + IMAGE_PATH + `" 
            style="width: 80%; height: 80%; border-radius: 10px"/>
        </div>
      `
          
      
      },
    });


  };

  useEffect(() => {
    initMap();
  }, []);

  //지도 사이즈 관련 스타일
  const mapStyle = {
    width: "100%",
    height: "812px",
  };

  return (
    <React.Fragment>
      <Head>
        <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=8rgu5jqpbb"></script>
      </Head>
      <div id="map" style={mapStyle}></div>
    </React.Fragment>
  );
};
export default MapD;