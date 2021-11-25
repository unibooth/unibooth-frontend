import BottomNav from '@components/BottomNav';
import { HomeHeader } from '@components/Header';

import * as S from './styles';

interface Props {
  title: string;
  align?: string;
  noHeader?: boolean;
  children: React.ReactNode;
}

const HomeLayout = (props: Props) => {
  return (
    <S.Layout>
      <HomeHeader />
      <S.Main>{props.children}</S.Main>
      <BottomNav />
    </S.Layout>
  );
};

export default HomeLayout;
