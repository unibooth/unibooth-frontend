import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import BoothComment from '@components/BoothComment';
import BoothDetail from '@components/BoothDetail';
import BoothFooter from '@components/BoothFooter';
import BoothHeader from '@components/BoothHeader';
import { Layout } from '@components/Layout/styles';
import { BOOTH_DATA } from '@data';
import { getById } from '@helpers';
import { requestPostingDetail } from '@request';

export default function BoothDetailPage({ id }: { id: number }) {
  const temp = getById(id, BOOTH_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [booth, setBooth] = useState(temp);

  useEffect(() => {
    requestPostingDetail(id)
      .then((res) => {
        setBooth(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <Head>
            <title>{booth.name} - 유니부스</title>
          </Head>
          <Layout>
            <BoothHeader />
            <main>
              <BoothDetail {...booth} />
              {/* <BoothComment comments={booth.comments} /> */}
            </main>
            <BoothFooter {...booth} commentCount={booth.comments.length} />
          </Layout>
        </>
      ) : null}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      id: Number(params.id.toString()),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: BOOTH_DATA.map((v) => ({
      params: { id: v.id.toString() },
    })),
    fallback: false,
  };
};
