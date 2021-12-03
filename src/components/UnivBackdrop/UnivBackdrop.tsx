import styled from 'styled-components';

import CalendarIcon from '@assets/calendar.svg';
import SearchIcon from '@assets/search.svg';
import XIcon from '@assets/x.svg';

import Backdrop from '../Backdrop';
import { BackdropProps } from '../Backdrop/backdrop.types';
import Section from '../Section';
import UnivStarButton, { UnivStarButtonProps } from './star-button';
import UnivRow, { UnivRowProps } from './univ-row';

const STARRED_UNIVS: UnivStarButtonProps[] = [
  { name: '중앙대', color: '#FF6433' },
  { name: '홍익대', color: '#5CC7D6' },
  { name: '서울대', color: '#EBD947' },
  { name: '건국대', color: '#8833FF' },
];

const SOON_UNIVS: UnivRowProps[] = [
  { name: '중앙대학교', starred: true },
  { name: '국민대학교' },
  { name: '건국대학교' },
  { name: '조선대학교' },
  { name: '서울대학교' },
];

const NEAR_UNIVS: UnivRowProps[] = [
  { name: '유니대학교' },
  { name: '부스대학교' },
  { name: '유니부스대학교' },
  { name: '유니콘대학교' },
  { name: '유부대학교' },
];

const ALL_UNIVS: UnivRowProps[] = [
  { name: '가톨릭대학교' },
  { name: '건국대학교' },
  { name: '경기대학교' },
  { name: '경희대학교' },
  { name: '고려대학교' },
  { name: '광운대학교' },
  { name: '국민대학교' },
  { name: '동국대학교' },
  { name: '명지대학교' },
];

export default function UnivBackdrop(props: Pick<BackdropProps, 'isOpen' | 'onClose'>) {
  return (
    <Backdrop {...props} zIndex={1003}>
      <Wrapper onClick={props.onClose}>
        <HeaderRow>
          <XIcon width={24} height={24} fill="#222" />
          <p style={{ fontWeight: 600, fontSize: '16px', lineHeight: '24px' }}>대학 선택</p>
          <CalendarIcon width={24} height={24} fill="#222" />
        </HeaderRow>
        <p
          style={{
            margin: '56px 0 32px 16px',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '30px',
          }}
        >
          어느 대학 축제를
          <br />
          탐색할까요?
        </p>
        <SearchBar>
          <SearchIcon width={24} height={24} style={{ marginRight: '8px' }} fill="#818798" />
          <p style={{ fontSize: '16px', lineHeight: '24px', color: '#D5D7DD' }}>대학명 검색</p>
        </SearchBar>
        <div
          style={{
            margin: '16px',
            width: 'calc(100% - 32px)',
            height: '1px',
            backgroundColor: '#f1f2f4',
          }}
        />
        <Section title="즐겨찾기" size="small">
          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '16px' }}>
            {STARRED_UNIVS.map((univ) => (
              <UnivStarButton key={univ.name} {...univ} />
            ))}
          </div>
        </Section>
        <Section title="곧 축제가 시작돼요">
          {SOON_UNIVS.map((univ) => (
            <UnivRow key={univ.name} {...univ} />
          ))}
        </Section>
        <Section title="내 주변 대학">
          {NEAR_UNIVS.map((univ) => (
            <UnivRow key={univ.name} {...univ} />
          ))}
        </Section>
        <Section title="전체 대학" description="서울">
          {ALL_UNIVS.map((univ) => (
            <UnivRow key={univ.name} {...univ} />
          ))}
        </Section>
      </Wrapper>
    </Backdrop>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;

  position: relative;
`;

const HeaderRow = styled.div`
    position; fixed;
    top: 0;
    left: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 44px;
  padding: 0 20px;
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(241, 242, 244, 0.55);
  border-radius: 8px;
  width: calc(100% - 32px);
  height: 48px;
  padding: 0 20px;
  margin: 0 16px;
`;
