import styled, { keyframes } from 'styled-components';

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
  border-bottom-color: #f1f2f4;
  margin-bottom: 16px;
`;

export const BoothListOpenButton = styled.button`
  width: 32%;
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

export const CategoryButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* overflow: scroll hidden; */
  width: fit-content;
  height: 36px;
  padding: 0 16px;
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 22px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border: none;
  font-size: 16px;
`;

export const TopBarLayout = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 8px;
  background: rgba(0, 0, 0, 0);
  display: flex;

  position: absolute;
  flex-direction: row;
  top: 0px;
  z-index: 2000;
  white-space: nowrap;
  scroll-bar-color: rgba(0, 0, 0, 0);
  animation-duration: 0.5s;
  animation-name: ${slideRight};
`;

export const TopBarOpenButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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
export const TopBarQuestionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: none;
  margin-right: 16px;
  margin-top: 8px;
  border-radius: 30px;
  background: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  animation-duration: 0.5s;
  animation-name: ${slideRight};
`;

export const StampCollectWrapper = styled.div`
  position: absolute;
  z-index: 1003;
  display: flex;
  flex-direction: column;
  width: 343px;
  height: 128px;

  left: 16px;
  bottom: 24px;
  background: white;
  border-radius: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
`;

export const StampCountContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 246px;
  left: 0;
  bottom: -818px;
  padding: 30px 16px;
  font-size: 21px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 -8px 16px rgba(0, 0, 0, 0.1);

  .orange {
    color: #ff6433;
  }
  .none {
    color: white;
  }
  .small {
    margin-top: 5px;
    font-size: 13px !important;
    font-weight: 400;
  }
`;

export const FloatingLocate = styled.div`
  position: absolute;
  left: 315px;
  bottom: -549px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: white;
  border-radius: 13px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2));
`;

export const StampCountWrapper = styled.div`
  color: #d5d7dd;
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 16px;
  margin-top: 8px;
`;

export const StampCountDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  .orange {
    color: #ff6433;
  }
  .grey {
    color: #f1f2f3;
  }
`;

export const Dot = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  text-align: center;
  background: #ff6433;
  .orange {
    background: #ff6433;
  }
  .grey {
    background: #f1f2f3;
  }
`;
