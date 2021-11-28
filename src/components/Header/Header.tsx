import { useRouter } from 'next/router';

import { LeftOutlined } from '@ant-design/icons';
import LeftArrow2 from '@assets/left-arrow2.svg';

import * as S from './styles';

interface HeaderProps {
  title?: string;
}

const Header = ({ title }: HeaderProps) => {
  const router = useRouter();

  return (
    <S.Header className="container">
      <S.PrevButton onClick={() => router.back()}>
        <LeftArrow2 />
      </S.PrevButton>
      {title && <S.Title>{title}</S.Title>}
    </S.Header>
  );
};

export default Header;
