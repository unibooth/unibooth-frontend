import styled, {keyframes} from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(3vh);
  }
  to {
    transform: translateY(0px);

  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(-30px);
  }
  to {
    transform: translateX(4px);

  }
`;

export const BoothListLayout = styled.div`
    width: 100vw;
    height: 7vh;
    display: flex;
    flex-direction: row;
    border-bottom: solid 1px;
    border-bottom-color: #F1F2F4;
    margin-bottom: 16px;
`;


export const BoothListOpenButton = styled.button`
    width : 32%;
    height: 48px;
    position: absolute;
    bottom: 3vh;
    left: 34%;
    background: white;
    z-index: 1000;
    border-radius: 24px;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    animation-duration: 0.5s;
    animation-name: ${slideUp};

`;

export const CategoryButton = 
styled.button`
    overflow: hidden;
    width: 98px;
    height: 36px;
    margin-left: 4px;
    margin-right: 4px;
    border-radius: 22px;
    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    border: none;
    font-size: 16px;

    
`;

export const TopBarLayout = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  width: 100%;
  height: 50px;
  margin-top: 8px;
  background: rgba(0, 0, 0, 0.0);
  display: flex;
  overflow-x: scroll;
  position: absolute;
  flex-direction: row;
  top: 0px;
  z-index: 1000;
  white-space: nowrap;
  scroll-bar-color: rgba(0,0,0, 0.0);
  animation-duration: 0.5s;
  animation-name: ${slideRight};
`;

export const TopBarOpenButton = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  margin-left: 16px;
  margin-top: 8px;
  border-radius: 30px;
  background: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  animation-duration: 0.5s;
  animation-name: ${slideRight};
`;

export const StampLayout = styled.div`
   position: absolute;
   z-index: 1003;
   display: flex;
   flex-direction: column;
   width: 85%;
   height: 128px;

  left: 3%;
   bottom: 64px;
   background: white;
   border-radius: 16px;
   padding-left: 16px;
   padding-right: 16px;
   padding-top: 12px;
   padding-bottom: 12px;
   box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  
`;