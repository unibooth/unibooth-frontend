import { useRouter } from 'next/router';
import styled from 'styled-components';

import LeftArrowIcon from '@assets/arrow_back.svg';
import Search from '@assets/home-search.svg';
import PlaceIcon from '@assets/place.svg';
import ThreeDotIcon from '@assets/three-dot.svg';
import { useScrollY } from '@hooks';

const HEIGHT = 44;

export default function NewHomeHeader() {
  const router = useRouter();

  const scrollY = useScrollY();

  return (
    <>
      <Wrapper isScrolled={scrollY > 0}>
        {/* <LeftArrowIcon
          onClick={router.back}
          width={24}
          height={24}
          fill="#222"
          style={{ marginRight: 'auto' }}
        />
        <PlaceIcon width={24} height={24} fill="#222" style={{ marginRight: '24px' }} />
        <ThreeDotIcon width={24} height={24} fill="#222" /> */}
        <SearchIcon style={{ marginLeft: 'auto' }} />
      </Wrapper>
      {/* <Block /> */}
    </>
  );
}

const Wrapper = styled.div<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  z-index: 5;

  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: ${HEIGHT}px;
  padding: 0 16px;

  /* background-color: ${({ theme }) => theme.colors.white}; */
  background-color: ${(props) => (props.isScrolled ? 'white' : 'transparent')};
  /* border-bottom: 0.5px solid ${(props) => (props.isScrolled ? '#D5D7DD' : 'transparent')}; */
`;

const Block = styled.div`
  height: ${HEIGHT}px;
`;

const SearchIcon = styled(Search)<{ isScrolled: boolean }>`
  filter: ${(props) => (props.isScrolled ? 'none' : 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))')};
`;
