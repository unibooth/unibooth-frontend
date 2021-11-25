import type { NextPage } from 'next';
import React, {useEffect} from 'react';
import Layout from '@components/Layout';
import MapD from './MapComponent/NaverMap';







const Map: NextPage = () => {
  return (
  <Layout title="지도">

    <MapD/>
  </Layout>);
};

export default Map;
