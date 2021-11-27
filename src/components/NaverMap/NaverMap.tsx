import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import ActionSheet, { ActionSheetRef } from 'actionsheet-react';
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
import { StampLayout } from './styles';
import Sort from '@assets/sort.svg';
import Current from '@assets/current.svg';

let map: any;
let markers: any = [];
let marker;

let events: any = [];
const NaverMap = () => {
  const router = useRouter();
  const ref = useRef<ActionSheetRef>();
  const [bottomTabType, setBottomTabType] = useState<number>(1);
  const [firstRender, setFirstRender] = useState(false);
  const [currentBooth, setCurrentBooth] = useState<number>(10);
  const LIKE_ICON = '/icon/ic-map-like.svg';
  const [openStampCollect, setOpenStampCollect] = useState(false);
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
      boothId: 10,
    },
    {
      boothId: 9
    },
    {
      boothId: 8
    },
    {
      boothId: 7
    },


  ])
  const [dummyBoothData, setDummyBoothData] = useState([
    {
      id: 10,
      image: '/images/01.jpg',
      title: '식품공학과의 달달한 마카롱',
      category: '체험 부스',
      boothNum: 4,
      like: false,
      likeCount: 52,
      location: [37.504337, 126.95618],
    },
    {
      id: 9,
      image: '/images/02.jpg',
      title: '다트 자신 있는 사람 모여라',
      category: '체험 부스',
      boothNum: 20,
      like: false,
      likeCount: 49,
      location: [37.504316, 126.956234],
    },
    {
      id: 8,
      image: '/images/03.jpg',
      title: '실사판 배틀그라운드',
      category: '체험 부스',
      boothNum: 13,
      like: false,
      likeCount: 48,
      location: [37.50441, 126.955891],
    },
    {
      id: 7,
      image: '/images/04.jpg',
      title: '식품공학과의 달달한 마카롱',
      category: '체험 부스',
      boothNum: 15,
      like: true,
      likeCount: 30,
      location: [37.504337, 126.95618]
    },
    {
      id: 6,
      image: '/images/05.jpg',
      title: '실사판 배틀그라운드',
      category: '체험 부스',
      boothNum: 13,
      like: true,
      likeCount: 25,
      location: [37.504434, 126.955913],
    },

  ]);


  const drawMarker = (map: any) => {

    dummyBoothData.map(booth => {
      marker = new naver.maps.Marker({
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
  let prev = -1;
  const onClickMarker = (id: number) => {
    console.log(bottomTabType);

    if (prev == -1) {
      setCurrentBooth(id);
      prev = id;
      setOpenStampCollect(true);
    } else {
      if (prev == id) {
        setOpenStampCollect(false);
        prev = -1;
      } else {
        setCurrentBooth(id);
        prev = id;
        setOpenStampCollect(true);
      }
    }


  };

  const handleOpen = () => {
    if (ref.current) {
      setBottomTabType(1);
      ref.current.open();
    }
  };

  const handleClose = () => {
    if (ref.current) {
      setBottomTabType(0);
      ref.current.close();
    }
  };
  const heartPress = (booth: Booth) => {

    if (!booth.like) {
      setDummyBoothData(
        dummyBoothData.map(
          dData => dData.id === booth.id ?
            {
              ...dData,
              likeCount: dData.likeCount + 1,
              like: !dData.like
            } : dData
        ));
    }
    else {
      setDummyBoothData(
        dummyBoothData.map(
          dData => dData.id === booth.id ?
            {
              ...dData,
              likeCount: dData.likeCount - 1,
              like: !dData.like
            } : dData
        ));
    }
    drawMarker(map);
  };

  const clickHandler = () => {


    markers.map((mk: any) => {
      console.log(mk);
      let listener = naver.maps.Event.addListener(mk.marker, 'click',
        function (e) {
          onClickMarker(mk.id)
        });
      events.push(listener);
    });

    handleClose();
    setBottomTabType(2);
  };

  useEffect(() => {
    initMap();

    if (!firstRender) {
      setFirstRender(true);
      handleOpen();
    }
  }, []);

  const StampCollectComponent = () => {
    console.log(currentBooth);
    let boothData = dummyBoothData.filter(booth => booth.id === currentBooth);
    return (
      <StampLayout>
        <BoothListLayout style={{ border: 'none' }}>
          <img src={boothData[0].image} style={{ borderRadius: 8, width: '11vw', height: '11vw' }} />
          <div style={{ marginLeft: 16, width: '75%', position: 'relative' }}>
            <div style={{ fontWeight: '600', marginBottom: 4, marginTop: 4, justifyContent: 'center' }}>
              {boothData[0].title}

            </div>
            <div style={{ fontSize: 12, marginTop: 8 }}>
              <span style={{ color: '#8833FF' }}>{boothData[0].category} ・ </span>
              <span style={{ color: '#818798' }}> 부스 번호 {boothData[0].boothNum}</span>
            </div>
          </div>
        </BoothListLayout>
        <button onClick={() => router.push('/map/stamp')} style={{ alignSelf: 'center', width: 141, height: 48, borderRadius: 8, border: 'none', background: '#FF6433', color: 'white', fontSize: 16, fontWeight: '600' }}>
          스탬프 수집
        </button>

      </StampLayout>
    );
  }

  return (
    <>

      <div id="map" style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}>

        {openStampCollect ?
          <StampCollectComponent />
          :
          null
        }


        {bottomTabType != 2 ?
          <TopBarLayout>
            <div style={{ flex: 1 }}>
              <CategoryButton onClick={clickHandler} style={{ marginLeft: 16, width: 98 }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <Stamp style={{ alignSelf: 'center' }} />
                  <span style={{ marginLeft: 7.5 }}>스탬프</span>
                </div>
              </CategoryButton>
              <CategoryButton style={{ width: 84 }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <Market style={{ alignSelf: 'center' }} />
                  <span style={{ marginLeft: 7.5 }}>마켓</span>
                </div>
              </CategoryButton>
              <CategoryButton style={{ width: 84 }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <Play style={{ alignSelf: 'center' }} />
                  <span style={{ marginLeft: 7.5 }}>체험</span>
                </div>
              </CategoryButton>
              <CategoryButton style={{ width: 84 }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <Beer style={{ alignSelf: 'center' }} />
                  <span style={{ marginLeft: 7.5 }}>술집</span>
                </div>
              </CategoryButton>
            </div>
          </TopBarLayout> :
          <div style={{ position: 'absolute', zIndex: 1000, width: '100%' }}>

            <TopBarOpenButton onClick={() => {
              setBottomTabType(0);
              setOpenStampCollect(false);
              events.map((event: any) => { naver.maps.Event.removeListener(event) });
            }}>
              <LeftArrow />

            </TopBarOpenButton>
            <div style={{ width: '100%', height: '10%', zIndex: 1001, marginTop: 12, marginLeft: 21, display: 'flex' }}>
              <span style={{ fontSize: 16, marginRight: 2 }}>{myBoothStamp.length}</span>
              <span style={{ fontSize: 16, color: '#818798' }}> / {dummyBoothData.length}</span>
              <div style={{ alignSelf: 'center', position: 'relative', marginLeft: 12, width: '79%', height: 6, background: '#FFECE5', borderRadius: 4 }}>
                <div style={{ alignSelf: 'center', left: 0, position: 'absolute', width: (myBoothStamp.length / dummyBoothData.length) * 100 + '%', height: 6, background: '#FF6433', borderRadius: 4 }} />


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
          onClose={() => setBottomTabType(0)}
          touchEnable={true}
          sheetStyle={{
            zIndex: 1001,
            height: '43%', width: '100%', paddingBottom: 30,
            boxShadow: '0px -8px 16px rgba(0, 0, 0, 0.1)'
          }}>


          <HandleStick style={{ position: 'absolute', left: '50%', right: '50%', top: '3%', transform: 'translate(-50%, -50%)' }} />
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
                fontSize: 24,
                fontWeight: '600',
                width: '90%',
              }}
            >
              중앙대

            </div>
            <div style={{ marginTop: 12.5, marginBottom: 20.5, display: 'flex', flexDirection: 'row' }}>
              <Sort />
              <div style={{
                marginLeft: 6.25, fontSize: 12, color: '#818798'
              }}>찜 많은 순</div>
            </div>



            {dummyBoothData.map((booth, index) => {
              return (
                <BoothListLayout key={booth.id}>
                  <img src={booth.image} style={{ borderRadius: 8, width: '11vw', height: '11vw' }} />
                  <div style={{ marginLeft: 16, width: '75%', position: 'relative' }}>
                    <div style={{ fontWeight: '600', marginBottom: 4, marginTop: 4, justifyContent: 'center' }}>
                      {booth.title}
                      {!booth.like ?
                        <HeartDefault onClick={() => heartPress(booth)} className="svg-path" style={{ fontSize: '8px', position: 'absolute', right: 0 }} /> :
                        <HeartActivate onClick={() => heartPress(booth)} className="svg-path" style={{ position: 'absolute', right: 0 }} />
                      }
                    </div>
                    <div style={{ fontSize: 12, marginTop: 8 }}>
                      <span style={{ color: '#8833FF' }}>{booth.category} ・ </span>
                      <span style={{ color: '#818798' }}> 부스 번호 {booth.boothNum}</span>
                      <span style={{ color: '#818798', position: 'absolute', right: 3 }}> {booth.likeCount}</span>
                    </div>


                  </div>
                </BoothListLayout>
              );
            })}
          </div>
        </ActionSheet>

        {bottomTabType === 0 && !openStampCollect ?
          <BoothListOpenButton onClick={() => {
            handleOpen();
          }}>
            <span style={{ marginRight: 10, fontSize: 16, fontWeight: '600' }}>펼치기</span>
            <BottomArrow />

          </BoothListOpenButton> :
          null}



      </div>
    </>
  );
};
export default NaverMap;
