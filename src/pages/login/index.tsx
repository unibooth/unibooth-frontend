import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

const Login: NextPage = () => {
  return (
    <div>
      로그인
      <Link href="/home">홈으로 가는 임시 링크</Link>
    </div>
  );
};

export default Login;
