import { useRouter } from 'next/router';

import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import BottomArrow from '@assets/bottom-arrow.svg';

import * as S from './styles';

interface HeaderProps {
  title?: string;
}

const HomeHeader = () => {
  const router = useRouter();

  return (
    <S.Header className="container">
      <S.SpaceBetween>
        <h1>
          중앙대
          <BottomArrow style={{ fontSize: '20px', marginLeft: '7px' }} />
        </h1>
        <SearchOutlined style={{ fontSize: '20px', color: '#818798' }} />
      </S.SpaceBetween>
      <S.Tabs>
        <S.ActiveTab>전체</S.ActiveTab>
        <S.DeActiveTab>마켓</S.DeActiveTab>
        <S.DeActiveTab>체험</S.DeActiveTab>
      </S.Tabs>
    </S.Header>
  );
};

export default HomeHeader;
