import styled from 'styled-components';

export const BottomNav = styled.nav`
  height: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ebebeb;

  .nav-link {
    ${({ theme }) => theme.fonts.contents3};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #000;

    svg {
      opacity: 0.5;
    }

    span {
      color: #818698;
      ${({ theme }) => theme.fonts.contents3};
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
