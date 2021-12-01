import styled from 'styled-components';

import BoothCard from '@components/BoothCard';
import BottomNav from '@components/BottomNav';
import { Layout } from '@components/Layout/styles';

import { BOOTH_DATA } from '@data';

export default function HomePage() {
  return (
    <Layout>
      <ListWrapper>
        {BOOTH_DATA.map((booth) => (
          <BoothCard key={booth.id} {...booth} />
        ))}
      </ListWrapper>
      <BottomNav />
    </Layout>
  );
}

const ListWrapper = styled.main`
  display: flex;
  flex-direction: column;

  padding: 32px 16px 80px;
`;
