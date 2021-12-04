import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import School from '@assets/mypage-school.svg';
import RightArrow from '@assets/right-arrow.svg';
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
      <PointWrapper>
        <div className="title">내 포인트</div>
        <div className="content" style={{ display: 'flex', alignItems: 'center' }}>
          1,000
          <RightArrow style={{ marginLeft: '8px' }} />
        </div>
      </PointWrapper>
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

const PointWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  margin: 0 15.5px;
  border-top: 0.5px solid #d5d7dd;
  border-bottom: 0.5px solid #d5d7dd;
  .title {
    font-size: 14px;
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
  }
  .content {
    font-size: 20px;
    font-family: Apple SD Gothic Neo;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 120% */

    text-align: right;
  }
`;
