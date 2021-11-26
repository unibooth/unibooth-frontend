import React, {useEffect, useState, useRef} from 'react';
import ActionSheet, {ActionSheetRef} from 'actionsheet-react';
import { BoothListLayout } from "./styles";
import { BoothListOpenButton } from "./styles";
import HeartDefault from '@assets/like-default.svg';
import HeartActivate from '@assets/like-activated.svg';
import BottomArrow from '@assets/ic-arrow-top.svg';
import HandleStick from '@assets/handle-stick.svg';
import { CategoryButton } from './styles';
import Stamp from '@assets/stamp.svg';
import Market from '@assets/market.svg';
import Play from '@assets/play.svg';
import Beer from '@assets/beer.svg';
import LeftArrow from '@assets/left-arrow.svg';
import { TopBarLayout } from './styles';
import { TopBarOpenButton } from './styles';
import { withTheme } from 'styled-components';


const NaverMap = () => {
    const ref = useRef<ActionSheetRef>();
    const [boothListOpen, setBoothListOpen] = useState(false);
    const [stampCollectEnable, setStampCollectEnable] = useState(false);
    const [stampView, setStampView] = useState(false);

    const LIKE_ICON = '/icon/ic-map-like.svg';

    type Booth = {
      id: number,
      image: string,
      title: string,
      category: string,
      boothNum: number;
      like: boolean;
      likeCount: number;
    }

    type MyStampBooth = {
      boothId: number
    }
    const [myBoothStamp, setBoothStamp] = useState([
      {
        boothId: 0,
      },
      {
        boothId: 1
      },
      {
        boothId: 2
      },

    ])
    const [dummyBoothData, setDummyBoothData]= useState([
        {
          id: 0,
          image: '/images/01.jpg',
          title: '식품공학과의 달달한 마카롱',
          category: '체험 부스',
          boothNum: 4,
          like: false,
          likeCount: 52,
          location: [37.504337, 126.95618],
        },
        {
          id: 1,
          image: '/images/02.jpg',
          title: '다트 자신 있는 사람 모여라',
          category: '체험 부스',
          boothNum: 20,
          like: false,
          likeCount: 49,
          location: [37.504316, 126.956234],
        },
        {
          id: 2,
          image: '/images/03.jpg',
          title: '실사판 배틀그라운드',
          category: '체험 부스',
          boothNum: 13,
          like: false,
          likeCount: 48,
          location: [37.50441, 126.955891],
        },
        {
          id: 3,
          image: '/images/04.jpg',
          title: '식품공학과의 달달한 마카롱',
          category: '체험 부스',
          boothNum: 15,
          like: true,
          likeCount: 30,
          location: [37.504337, 126.95618]
        },
        {
          id: 4,
          image: '/images/05.jpg',
          title: '실사판 배틀그라운드',
          category: '체험 부스',
          boothNum: 13,
          like: true,
          likeCount: 25,
          location:  [37.504434, 126.955913],
        },
        {
          id: 5,
          image: '/images/06.jpg',
          title: '식품공학과의 달달한 마카롱',
          category: '체험 부스',
          boothNum: 15,
          like: true,
          likeCount: 128,
          location: [37.504381, 126.955757],
        }
    ]);


  
  let map: any;
  let markers:any = [];
  const drawMarker = (map: any) => {


    dummyBoothData.map(booth => {
      let marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(booth.location[0], booth.location[1]),
        map: map,
        icon: {
          content: booth.like ? 
            `
            <div style="">
            <img alt="" src="` +
                booth.image +
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
            ` :
            `
            <div style="">
            <img alt="" src="` +
                booth.image +
                `" 
                style="
                  width: 50px; 
                  height: 50px; 
                  border-radius: 10px; 
                  border: solid 3px;
                  border-color: white;
                  "/>    
            ` 

            
        },
      });
      

      const mark = {
        id: booth.id,
        marker: marker
      }
      markers.push(mark);

    });

    for(let i=0; i<dummyBoothData.length; i++){
      naver.maps.Event.addListener(markers[i].marker, 'click', ()=> onClickMarker(i));
    }
  }

  const initMap = () => {
    map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.504391, 126.955831),
      minZoom: 19,
      scaleControl: false,
      logoControl: false,
      mapDataControl: false,
    });

    drawMarker(map);



  };

  const onClickMarker = (index:number) => {
      console.log(index);
      if(stampCollectEnable) {

         
           setStampView(!stampView);
       
        console.log(index);
     
    }
  };
  const handleOpen = () => {
    if(ref.current) {
      setBoothListOpen(false);
      ref.current.open();
    }
  };

  const hanldeClose = () => {
    if(ref.current) {
      setBoothListOpen(true);
      ref.current.close();
    }
  };
  const heartPress = (booth: Booth) => {

    markers.map((mak:any) => { 
      
      mak.id === booth.id ? mak.marker.setIcon({
      content: 
        `
        <img alt="" src="` +
            booth.image +
            `" 
            style="
              width: 50px; 
              height: 50px; 
              border-radius: 10px; 
              border: solid 3px;
              border-color: white;
              "/>`
   
        
    }): null});

    if(!booth.like) {
        setDummyBoothData(
          dummyBoothData.map(
            dData => dData.id === booth.id ? 
            { ...dData, 
              likeCount: dData.likeCount+1, 
              like: !dData.like 
            } : dData
        ));
      }
      else {
        setDummyBoothData(
          dummyBoothData.map(
            dData => dData.id === booth.id ? 
            { ...dData, 
              likeCount: dData.likeCount-1, 
              like: !dData.like 
            } : dData
        ));
      }
      drawMarker(map);
  };

  useEffect(() => {
    initMap();
    handleOpen();
  }, []);

  return (
    <>

      <div id="map" style={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}>
        {stampView ?
        <div style={{zIndex: 1002,position: 'absolute', width: '91%', height: 128, left: 16, bottom:64, background: 'white', borderRadius: 16}}>


        </div> :
        null
        }



        {!stampCollectEnable  ?
        <TopBarLayout>
            <div style={{flex:1}}> 
              <CategoryButton onClick={()=> {
                setStampCollectEnable(true);
                hanldeClose();
              }}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}> 
                  <Stamp style={{alignSelf: 'center'}}/>
                  <span style={{marginLeft: 7.5}}>스탬프</span>
                </div>
              </CategoryButton>
              <CategoryButton>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}> 
                  <Market style={{alignSelf: 'center'}}/>
                  <span style={{marginLeft: 7.5}}>마켓</span>
                </div>
              </CategoryButton>
              <CategoryButton>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}> 
                  <Play style={{alignSelf: 'center'}}/>
                  <span style={{marginLeft: 7.5}}>체험</span>
                </div>
              </CategoryButton>
              <CategoryButton>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}> 
                  <Beer style={{alignSelf: 'center'}}/>
                  <span style={{marginLeft: 7.5}}>술집</span>
                </div>
              </CategoryButton>
            </div>
        </TopBarLayout>  :
        <div style={{position: 'absolute', zIndex: 1000, width: '100%'}}>
          
            <TopBarOpenButton onClick={()=> {setStampCollectEnable(false); setStampView(false); }}>
              <LeftArrow/>
            </TopBarOpenButton>
            <div style={{width: '100%', height: '10%', zIndex: 1001, marginTop: 12, marginLeft: 21, display: 'flex'}}>
              <span style={{fontSize: 16, marginRight: 2}}>{myBoothStamp.length}</span>
              <span style={{fontSize: 16, color: '#818798'}}> / {dummyBoothData.length}</span>
              <div style={{alignSelf: 'center',position:'relative', marginLeft: 12, width: '79%', height: 6, background:'#FFECE5', borderRadius: 4}}>
              <div style={{alignSelf: 'center', left: 0, position: 'absolute',  width: (myBoothStamp.length / dummyBoothData.length) * 100 + '%', height: 6, background:'#FF6433', borderRadius: 4}}/>
              
              
              </div>
            </div>
    
        </div>
        }
        <ActionSheet 
            ref={ref} 
            bgStyle={{
              background: 'rgba(0, 0, 0, 0.00)',
            }} 
            closeOnBgTap={true}
            onClose={()=> setBoothListOpen(true)} 
            touchEnable={true}
            sheetStyle={{
              zIndex: 1001,
              height: '43%', width: '100%', paddingBottom: 30,
              overflowY: 'scroll',
              boxShadow:  '0px -8px 16px rgba(0, 0, 0, 0.1)'
            }}>
            <HandleStick style={{position: 'absolute', left: '50%', right: '50%', top: '3%', transform: 'translate(-50%, -50%)'}}/>
            <div style={{
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

              {dummyBoothData.map((booth, index) => {
                return (
                  <BoothListLayout key={booth.id}>
                    <img src={booth.image} style={{borderRadius: 8, width:'11vw', height: '11vw'}}/>
                    <div style={{marginLeft: 16, width: '75%', position: 'relative'}}>
                      <div style={{fontWeight: '600', marginBottom: 4, marginTop: 4, justifyContent: 'center'}}>
                        {booth.title}
                        {!booth.like ? 
                        <HeartDefault onClick={()=> heartPress(booth)} className="svg-path" style={{fontSize: '8px' ,position: 'absolute', right: 0}}/> :
                        <HeartActivate onClick={()=> heartPress(booth)} className="svg-path" style={{position: 'absolute', right: 0}}/>
                      }
                      </div>
                      <div style={{fontSize: 12, marginTop: 8}}>
                        <span style={{color: '#8833FF'}}>{booth.category} ・ </span>
                        <span style={{color: '#818798'}}> 부스 번호 {booth.boothNum}</span>
                        <span style={{color: '#818798', position: 'absolute', right:3}}> {booth.likeCount}</span>
                      </div>

  
                    </div>
                  </BoothListLayout>
                );
            })}
        </div>
        </ActionSheet> 
        
        {boothListOpen && !stampView ? 
        <BoothListOpenButton onClick={()=> {
          handleOpen();
          }}>
          <span style={{marginRight: 10, fontSize: 16, fontWeight: '600'}}>펼치기</span>
          <BottomArrow/>
     
        </BoothListOpenButton> :
        null}

     
      
      </div>
    </>
  );
};
export default NaverMap;
