import type { NextPage } from 'next';
import Image from 'Next/Image';
import { useRouter } from 'next/router';
import React from 'react';

import { Layout } from '@components/Layout';

const MyPage: NextPage = () => {
  const router = useRouter();

  return (
    <Layout title="마이페이지" noHeader>
      <Image
        src="/images/mypage.jpg"
        width="375"
        height="812"
        onClick={() => router.push('/mypage/certificate')}
      />
    </Layout>
  );
};

export default MyPage;
