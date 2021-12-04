import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import School from '@assets/mypage-school.svg';
import Setting from '@assets/setting.svg';
import { Layout } from '@components/Layout';

const MyPage: NextPage = () => {
  return (
    <Layout title="마이페이지" noHeader>
      <Header>
        <div>마이페이지</div>
        <Setting />
      </Header>
      <BioWrapper>
        <img
          src="/images/img-user.png"
          style={{ width: '36px', height: '36px', borderRadius: '50%', marginRight: '12px' }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: 'auto',
          }}
        >
          <p
            style={{
              color: '#222',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '24px',
              marginBottom: '5px',
              marginTop: '5px',
            }}
          >
            유니부스
          </p>
          <p
            style={{
              color: '#818798',
              fontSize: '14px',
              lineHeight: '18px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <School style={{ marginRight: '4px' }} />
            유니대학교
          </p>
        </div>
      </BioWrapper>
    </Layout>
  );
};

export default MyPage;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 44px;
  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

const BioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  padding: 16px;
  height: 84px;
`;
