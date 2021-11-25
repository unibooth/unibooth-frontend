import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Booth = () => {
  const router = useRouter();
  const { name } = router.query;

  return <>부스</>;
};

export default Booth;
