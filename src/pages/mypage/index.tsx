import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import Announcement from '@assets/announcement.svg';
import BigSchool from '@assets/bigschool.svg';
import Inventory from '@assets/inventory.svg';
import Manage from '@assets/manage.svg';
import BookMark from '@assets/mypage-bookmark.svg';
import Like from '@assets/mypage-like.svg';
import School from '@assets/mypage-school.svg';
import MyStamp from '@assets/mystamp.svg';
import Question from '@assets/question.svg';
import RightArrow from '@assets/right-arrow.svg';
import Setting from '@assets/setting.svg';
import Store from '@assets/store.svg';
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
      <LikeWrapper>
        <LikeColumnDiv>
          <Like style={{ margin: '0 auto', marginBottom: '4px' }} />
          <div>찜</div>
        </LikeColumnDiv>
        <LikeColumnDiv>
          <BookMark style={{ margin: '0 auto', marginBottom: '4px' }} />
          <div>즐겨찾기</div>
        </LikeColumnDiv>
      </LikeWrapper>
      <GreyBorder />
      <MypageContentWrapper>
        <Store className="icon" />
        <div>엔터테이너 프로필 관리</div>
      </MypageContentWrapper>
      <MypageContentWrapper>
        <MyStamp className="icon" />
        <div>내 스탬프 관리</div>
      </MypageContentWrapper>
      <MypageContentWrapper>
        <BigSchool className="icon" />
        <div>대학교 인증</div>
      </MypageContentWrapper>
      <MypageContentWrapper>
        <Inventory className="icon" />
        <div>부스 신청 현황</div>
      </MypageContentWrapper>
      <MypageContentWrapper>
        <Manage className="icon" />
        <div>학생회 계정 생성</div>
      </MypageContentWrapper>
      <GreyBorder />
      <MypageContentWrapper>
        <Announcement className="icon" />
        <div>공지사항</div>
      </MypageContentWrapper>
      <MypageContentWrapper>
        <Question className="icon" />
        <div>자주 묻는 질문</div>
      </MypageContentWrapper>
      <MypageContentWrapper>
        <Setting className="icon" />
        <div>앱 설정</div>
      </MypageContentWrapper>
      <BigGreyBorder />
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

const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 84px;
`;

const LikeColumnDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  width: 100px;

  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
`;

const GreyBorder = styled.div`
  height: 8px;
  width: 100%;
  background: #f1f2f3;
`;
const BigGreyBorder = styled.div`
  height: 96px;
  width: 100%;
  background: #f1f2f3;
`;

const MypageContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  height: 48px;

  font-family: Apple SD Gothic Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  .icon {
    margin-right: 16px;
  }
`;
