import styled from 'styled-components';

import Logo from '@assets/splash.svg';

export default function Splash() {
  return (
    <Wrapper>
      <Logo style={{ width: '59.25px' }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999999;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: white;
`;
