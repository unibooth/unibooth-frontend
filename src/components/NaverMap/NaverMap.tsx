import React, { useEffect } from "react";
import Head from 'next/head';

const NaverMap = () => {

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
          style="
                width: 40%; 
                height: 40%;  
                border-radius: 10px; 
                border: solid 1px;
                background-color: white; 
                margin-left: 10px;
                text-align: center;
                align-content: center;">
          
        <img alt="" src="` + IMAGE_PATH + `" 
            style="
              width: 80%; 
              height: 80%; 
              border-radius: 10px; 
           
              margin: 0 auto"/>
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
    <>
      <div id="map" style={mapStyle}></div>
    </>
  );
};
export default NaverMap;