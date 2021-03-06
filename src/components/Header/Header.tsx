import { useRouter } from 'next/router';

import ArrowBack from '@assets/arrow_back.svg';

import * as S from './styles';

interface HeaderProps {
  title?: string;
}

const Header = ({ title }: HeaderProps) => {
  const router = useRouter();

  return (
    <S.Header className="container">
      <S.PrevButton onClick={() => router.back()}>
        <ArrowBack />
      </S.PrevButton>
      {title && <S.Title>{title}</S.Title>}
    </S.Header>
  );
};

export default Header;
