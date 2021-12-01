import { useRouter } from 'next/router';
import styled from 'styled-components';

import CalendarIcon from '@assets/calendar.svg';
import ChevronDownIcon from '@assets/chevron-down.svg';
import SearchIcon from '@assets/search.svg';

import { useScrollY } from '@hooks';

const EXPANDED_HEIGHT = 220;
const COLLAPSED_HEIGHT = 88;

export type HomeHeaderProps = {
  tab: number;
  onTabChange: (tab: number) => void;
};

export default function HomeHeader(props: HomeHeaderProps) {
  const scrollY = useScrollY();
  const isExpanded = scrollY === 0;

  const router = useRouter();
  const univName = router.query.univName ?? '중앙대';

  return (
    <>
      <Wrapper>
        {isExpanded && (
          <DdayRow>
            <CalendarIcon width={18} height={18} style={{ marginRight: 8 }} fill="#222" />
            <DdayText>축제 시작까지 D-7</DdayText>
            <DdayDetail>자세히</DdayDetail>
          </DdayRow>
        )}
        <Header isExpanded={isExpanded}>
          <Col>
            {isExpanded && <Heading>부스를 찾아볼까요?</Heading>}
            <UnivRow>
              <Heading>{univName}</Heading>
              <ChevronDownIcon width={24} height={24} style={{ marginLeft: 8 }} fill="#222" />
            </UnivRow>
          </Col>
          <SearchIcon width={24} height={24} fill="#222" />
        </Header>
      </Wrapper>
      <Block isExpanded={isExpanded} />
    </>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;
  padding: 0 16px;
  transition: height 0.2s ease-out;

  background-color: ${({ theme }) => theme.colors.white};
`;

const DdayRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 343px;
  height: 48px;
  padding: 0 16px;
`;

const DdayText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-right: auto;
`;

const DdayDetail = styled.b`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

const Header = styled.header<{ isExpanded: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: ${(props) => (props.isExpanded ? 42 : 10)}px;
  margin-bottom: 20px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
`;

const UnivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TabRow = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;

const Block = styled.div<{ isExpanded: boolean }>`
  height: ${(props) => (props.isExpanded ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT)}px;
  transition: height 0.2s ease-out;
`;
