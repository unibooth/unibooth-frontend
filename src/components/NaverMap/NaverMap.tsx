import ActionSheet, { ActionSheetRef } from 'actionsheet-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import LeftArrow from '@assets/arrow_back.svg';
import Beer from '@assets/beer.svg';
import HandleStick from '@assets/handle-stick.svg';
import BottomArrow from '@assets/ic-arrow-top.svg';
import HeartActivate from '@assets/like-activated.svg';
import HeartDefault from '@assets/like-default.svg';
import Market from '@assets/market.svg';
import Play from '@assets/play.svg';
import Sort from '@assets/sort.svg';
import Stamp from '@assets/stamp.svg';
import XIcon from '@assets/x.svg';
import { BOOTH_DATA } from '@data';
import { findByWhere, getById } from '@helpers';
import { Booth, BoothType } from '@interfaces';

import { BoothListLayout, TopBarQuestionButton } from './styles';
import { BoothListOpenButton } from './styles';
import { CategoryButton } from './styles';
import { TopBarLayout } from './styles';
import { TopBarOpenButton } from './styles';
import { StampCollectWrapper } from './styles';

let map: any;
let markers: any = [];
let marker;

let events: any = [];

const STAMPPED_BOOTH_IDS = [1];
const LIKING_BOOTH_IDS = [2];

const NaverMap = () => {
  const router = useRouter();
  const ref = useRef<ActionSheetRef>();
  const [bottomTabType, setBottomTabType] = useState<number>(1);
  const [firstRender, setFirstRender] = useState(false);
  const [currentBooth, setCurrentBooth] = useState<number>(10);
  const LIKE_ICON = '/icon/ic-map-like.svg';
  const [openStampCollect, setOpenStampCollect] = useState(false);
  const [openRequestStamp, setOpenRequestStamp] = useState(false);

  const [filter, setFilter] = useState<Partial<Booth>>({});

  const drawMarker = (map: any, where: Partial<Booth> = {}) => {
    findByWhere(where, BOOTH_DATA).map((booth) => {
      const isLiking = LIKING_BOOTH_IDS.includes(booth.id);

      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(booth.latitude, booth.longitude),
        map: map,
        icon: {
          content: isLiking
            ? `
            <div style="">
            <img alt="" src="` +
              booth.imageUrl +
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
            `
            : `
            <div style="">
            <img alt="" src="` +
              booth.imageUrl +
              `" 
                style="
                  width: 50px; 
                  height: 50px; 
                  border-radius: 10px; 
                  border: solid 3px;
                  border-color: white;
                  "/>    
            `,
        },
      });

      const mark = {
        id: booth.id,
        marker: marker,
      };
      markers.push(mark);
    });
  };

  const initMap = () => {
    map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.504603, 126.955206),
      minZoom: 20,
      scaleControl: false,
      logoControl: false,
      mapDataControl: false,
    });

    drawMarker(map);
  };
  let prev = -1;

  const handleTypeFilter = (type: BoothType) => () => {
    if (filter.type === type) {
      setFilter({});
      map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.504603, 126.955206),
        minZoom: 20,
        scaleControl: false,
        logoControl: false,
        mapDataControl: false,
      });
      drawMarker(map, {});
    } else {
      setFilter({ type });

      map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.504603, 126.955206),
        minZoom: 20,
        scaleControl: false,
        logoControl: false,
        mapDataControl: false,
      });
      drawMarker(map, { type });
    }
  };

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
  const heartPress = () => {
    drawMarker(map);
  };

  const clickHandler = () => {
    markers.map((mk: any) => {
      console.log(mk);
      let listener = naver.maps.Event.addListener(mk.marker, 'click', function (e) {
        onClickMarker(mk.id);
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

  const StampCollectView = () => {
    const booth = getById(currentBooth, BOOTH_DATA);

    return (
      <StampCollectWrapper>
        <BoothListLayout style={{ border: 'none' }}>
          <img src={booth.imageUrl} style={{ borderRadius: 8, width: '11vw', height: '11vw' }} />
          <div style={{ marginLeft: 16, width: '75%', position: 'relative' }}>
            <div
              style={{ fontWeight: '600', marginBottom: 4, marginTop: 4, justifyContent: 'center' }}
            >
              {booth.name}
            </div>
            <div style={{ fontSize: 12, marginTop: 8 }}>
              <span style={{ color: '#8833FF' }}>{booth.type} ・ </span>
              <span style={{ color: '#818798' }}> {booth.location}</span>
            </div>
          </div>
        </BoothListLayout>
        <button
          onClick={() => {
            setTimeout(() => {
              alert('엔터테이너에게 스탬프를  요청하고 있어요 ...');
              setOpenRequestStamp(true);
              router.push('/map?done=true');
            }, 500);
          }}
          style={{
            alignSelf: 'center',
            width: 141,
            height: 48,
            borderRadius: 8,
            border: 'none',
            background: '#FF6433',
            color: 'white',
            fontSize: 16,
            fontWeight: '600',
          }}
        >
          스탬프 요청
        </button>
      </StampCollectWrapper>
    );
  };

  return (
    <>
      <div
        id="map"
        style={{
          width: '100%',
          height: 'calc(100vh - 60px)',
          position: 'relative',
        }}
      >
        {openStampCollect ? <StampCollectView /> : null}
        {bottomTabType != 2 ? (
          <TopBarLayout>
            <div style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
              <CategoryButton onClick={clickHandler} style={{ marginLeft: 16, width: 98 }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <Stamp style={{ alignSelf: 'center' }} />
                  <span style={{ marginLeft: 7.5, textDecoration: 'none' }}>스탬프</span>
                </div>
              </CategoryButton>
              {(['마켓', '체험', '술집'] as const).map((v) => (
                <TypeButton
                  key={v}
                  type={v}
                  onClick={handleTypeFilter(v)}
                  isSelected={filter.type === v}
                />
              ))}
            </div>
          </TopBarLayout>
        ) : (
          <div style={{ position: 'absolute', zIndex: 1000, width: '100%' }}>
            <TopBarOpenButton
              onClick={() => {
                setBottomTabType(0);
                setOpenStampCollect(false);
                events.map((event: any) => {
                  naver.maps.Event.removeListener(event);
                });
              }}
            >
              <LeftArrow style={{ width: '50%' }} />
            </TopBarOpenButton>
            <div
              style={{
                width: '100%',
                height: '10%',
                zIndex: 1001,
                marginTop: 12,
                marginLeft: 21,
                display: 'flex',
              }}
            >
              <span style={{ fontSize: 16, marginRight: 2 }}>{STAMPPED_BOOTH_IDS.length}</span>
              <span style={{ fontSize: 16, color: '#818798' }}> / {BOOTH_DATA.length}</span>
              <div
                style={{
                  alignSelf: 'center',
                  position: 'relative',
                  marginLeft: 12,
                  width: '79%',
                  height: 6,
                  background: '#FFECE5',
                  borderRadius: 4,
                }}
              >
                <div
                  style={{
                    alignSelf: 'center',
                    left: 0,
                    position: 'absolute',
                    width: (STAMPPED_BOOTH_IDS.length / BOOTH_DATA.length) * 100 + '%',
                    height: 6,
                    background: '#FF6433',
                    borderRadius: 4,
                  }}
                />
              </div>
            </div>
            <TopBarQuestionButton
              onClick={() => {
                setBottomTabType(0);
                setOpenStampCollect(false);
                events.map((event: any) => {
                  naver.maps.Event.removeListener(event);
                });
              }}
            >
              <LeftArrow style={{ width: '50%' }} />
            </TopBarQuestionButton>
          </div>
        )}
        <ActionSheet
          ref={ref}
          bgStyle={{
            background: 'rgba(0, 0, 0, 0.00)',
          }}
          closeOnBgTap={true}
          onClose={() => setBottomTabType(0)}
          touchEnable={true}
          sheetTransition="transform 0.1 ease-in-out"
          sheetStyle={{
            zIndex: 1001,
            height: '88%',
            width: '100%',
            paddingBottom: 45,
            boxShadow: '0px -8px 16px rgba(0, 0, 0, 0.1)',
          }}
        >
          <HandleStick
            style={{
              position: 'absolute',
              left: '50%',
              right: '50%',
              top: '3%',
              transform: 'translate(-50%, -50%)',
            }}
          />
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
                fontSize: 24,
                fontWeight: '600',
                width: '90%',
              }}
            >
              중앙대
            </div>
            <div
              style={{ marginTop: 12.5, marginBottom: 20.5, display: 'flex', flexDirection: 'row' }}
            >
              <Sort />
              <div
                style={{
                  marginLeft: 6.25,
                  fontSize: 12,
                  color: '#818698',
                }}
              >
                찜 많은 순
              </div>
            </div>

            {findByWhere(filter, BOOTH_DATA).map((booth) => {
              return (
                <BoothListLayout key={booth.id}>
                  <img
                    src={booth.imageUrl}
                    style={{ borderRadius: 8, width: '11vw', height: '11vw' }}
                  />
                  <div style={{ marginLeft: 16, width: '75%', position: 'relative' }}>
                    <div
                      style={{
                        fontWeight: '600',
                        marginBottom: 4,
                        marginTop: 4,
                        justifyContent: 'center',
                      }}
                    >
                      <Link href={`/booth/${booth.id}`} passHref>
                        <span style={{ textDecoration: 'none' }}>{booth.name}</span>
                      </Link>
                      {!LIKING_BOOTH_IDS.includes(booth.id) ? (
                        <HeartDefault
                          onClick={heartPress}
                          className="svg-path"
                          style={{ fontSize: '8px', position: 'absolute', right: 0 }}
                        />
                      ) : (
                        <HeartActivate
                          onClick={heartPress}
                          className="svg-path"
                          style={{ position: 'absolute', right: 0 }}
                        />
                      )}
                    </div>
                    <div style={{ fontSize: 12, marginTop: 8 }}>
                      <span
                        style={{
                          color: '#818698',
                          // color:
                          //   booth.type === '체험'
                          //     ? '#8833FF'
                          //     : booth.type === '마켓'
                          //     ? '#5CC7D6'
                          //     : '#E6D019',
                        }}
                      >
                        {booth.type}
                      </span>

                      {booth.type !== '술집' ? (
                        <span style={{ color: '#818698' }}> | 부스 번호 {booth.location}</span>
                      ) : null}
                      <span style={{ color: '#818698', position: 'absolute', right: 3 }}>
                        {' '}
                        {booth.likeCount}
                      </span>
                    </div>
                  </div>
                </BoothListLayout>
              );
            })}
          </div>
        </ActionSheet>

        {bottomTabType === 0 && !openStampCollect ? (
          <BoothListOpenButton
            onClick={() => {
              handleOpen();
            }}
          >
            <span style={{ marginRight: 10, fontSize: 16, fontWeight: '600' }}>펼치기</span>
            <BottomArrow />
          </BoothListOpenButton>
        ) : null}
      </div>
    </>
  );
};
export default NaverMap;

function TypeButton({
  type,
  onClick,
  isSelected,
}: {
  type: BoothType;
  onClick: () => void;
  isSelected: boolean;
}) {
  const Icon = {
    마켓: Market,
    체험: Play,
    술집: Beer,
  }[type];

  const color = {
    마켓: '#5CC7D6',
    체험: '#8833FF',
    술집: '#E6D019',
  }[type];

  return (
    <CategoryButton onClick={onClick} style={{ backgroundColor: isSelected ? color : 'white' }}>
      <Icon
        width={18}
        height={18}
        fill={isSelected ? 'white' : color}
        style={{ alignSelf: 'center' }}
      />
      <span style={{ marginLeft: 7.5, color: isSelected ? 'white' : '#222' }}>{type}</span>
      {isSelected && (
        <XIcon
          width={18}
          height={18}
          fill="white"
          style={{ marginBottom: '2px', marginLeft: '4px', alignSelf: 'center' }}
        />
      )}
    </CategoryButton>
  );
}

export const Modal = styled.div`
  position: absolute;
  top: 0;
  z-index: 2000;
  width: 375px;
  height: 812px;
  background: rgba(0, 0, 0, 0.32);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RequestStampWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999999;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 10vh;
`;
