import BottomNav from '@components/BottomNav';
import Header from '@components/Header';

import * as S from './styles';

interface Props {
  title?: string;
  align?: string;
  noHeader?: boolean;
  noBottom?: boolean;
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <S.Layout>
      {!props.noHeader && <Header title={props.title} />}
      <S.Main>{props.children}</S.Main>
      {!props.noBottom && <BottomNav />}
    </S.Layout>
  );
};

export default Layout;
