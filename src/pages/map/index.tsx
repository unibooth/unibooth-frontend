import type { NextPage } from 'next';
import React, {useEffect} from 'react';
import Layout from '@components/Layout';
import NaverMap from '@components/NaverMap/NaverMap';







const Map: NextPage = () => {
  return (
    <Layout noHeader={true}>
      <NaverMap/>
 
    </Layout>);
};

export default Map;
