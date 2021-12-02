import type { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

import { Layout } from '@components/Layout';

const MyPage: NextPage = () => {
  return (
    <Layout title="마이페이지" noHeader>
      <Image src="/images/mypage-certificate.jpg" width="750" height="1525" />
    </Layout>
  );
};

export default MyPage;
