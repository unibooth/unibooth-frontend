import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';

import { Layout } from '@components/Layout';

const Stamp: NextPage = () => {
  const router = useRouter();
  const [text, setText] = useState('');
  const [usable, setUsable] = useState(true);

  const onChange = (e: any) => {
    setText(e.target.value);
    console.log(e.target.value);
    if (e.target.value.length > 0) {
      setUsable(false);
    }

    if (e.target.value === '') {
      setUsable(true);
    }
  };

  return (
    <Layout title="스탬프 수집" noBottom>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '343px',
          margin: '0 auto',
        }}
      >
        <div className="container">
          <Title>스탬프 코드를 입력하세요</Title>
          <BoothName>15. 일러스트레이터 한나입니다</BoothName>
          <Input onChange={onChange} value={text} type="text" placeholder="스탬프 코드 입력" />
        </div>

        <Button disabled={usable} activate={usable} onClick={() => router.push('/map?done=true')}>
          완료
        </Button>
      </main>
    </Layout>
  );
};

export default Stamp;

const Button = styled.button<{ activate: boolean }>`
  background: ${(props) => (props.activate ? '#D5D7DD' : '#ff6433')};
  position: absolute;
  left: 0%;
  bottom: 0%;
  border: none;
  width: 100%;
  height: 56px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: white;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  margin-top: 50px;
`;

const BoothName = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #818798;
  margin-top: 16px;
`;

const Input = styled.input`
  all: unset;
  border: none;
  margin-top: 100px;
  color: #242528;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  width: 100%;

  ::placeholer,
  ::-webkit-input-placeholder {
    color: #d5d7dd !important;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
  }
  :-ms-input-placeholder {
    color: red;
  }
`;
