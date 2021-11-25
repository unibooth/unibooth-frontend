import type { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

import { Layout } from '@components/Layout';

const MyPage: NextPage = () => {
  return (
    <Layout title="마이페이지">
      <Image src="/images/mypage-certificate.jpg" width="375" height="812" />
    </Layout>
  );
};

export default MyPage;
