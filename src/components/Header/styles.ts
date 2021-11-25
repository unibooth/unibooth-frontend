import styled from 'styled-components';

interface HeaderProps {
  align?: string;
  borderBottom?: boolean;
}

export const Header = styled.header<HeaderProps>`
  position: relative;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: ${({ align }) => align ?? 'center'};
  /* border-bottom: 0.5px solid #d5d7dd; */
  align-items: center;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const ActiveTab = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  padding: 0 2px 10px 2px;
  margin-right: 24px;
  border-bottom: 2px solid #ff6433;
`;

export const DeActiveTab = styled(ActiveTab)`
  color: #d5d7dd;
  border: none;
`;
export const MyPageHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border: none;
  margin-bottom: 0;
`;

export const TitleSection = styled.section`
  font-size: 18px;
  font-weight: normal;
  line-height: 25px;

  span {
    ${({ theme }) => theme.fonts.subTitle1};
  }
`;

export const SettingSection = styled.section`
  display: flex;
  height: fit-content;
  justify-content: center;
  align-items: center;
`;

export const PrevButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  position: absolute;
  left: 21px;
  margin-top: 3px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black900};
  ${({ theme }) => theme.fonts.subTitle1};
  font-weight: 500;
  line-height: 22px;
`;

export const Input = styled.input`
  width: 100%;
  ${({ theme }) => theme.fonts.contents1};
  color: ${({ theme }) => theme.colors.black500};
  border: none;
  outline: none;
  padding: 0 40px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.black500};
  }
`;

export const SearchButton = styled(PrevButton)`
  left: unset;
  right: 20px;
  margin: 0;
  padding: 0;
  ${({ theme }) => theme.fonts.contents2};
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    display: flex;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    align-items: center;
    height: 50px;
  }
`;
