import styled from 'styled-components';

export const BottomNav = styled.nav`
  position: fixed;
  bottom: 0;

  width: calc(100% - 40px);
  height: 60px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.5px solid #f1f2f4;

  .nav-link {
    ${({ theme }) => theme.fonts.contents3};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #000;

    svg {
      opacity: 1;
    }

    span {
      color: #818798;
      font-size: 10px;
      margin-top: 3px;
    }

    &.active {
      span {
        color: black;
      }
      svg {
        opacity: 1;
        &.svg-path path {
          stroke: black;
        }
        &.svg-paths path {
          fill: black;
        }
        &.svg-complicated {
          path,
          rect {
            fill: black;
          }
          circle {
            stroke: black;
          }
        }
      }
    }
  }
`;

export const Button = styled.button`
  background: #ff6433;
  border-radius: 8px;
  border: none;
  width: 163px;
  height: 48px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
