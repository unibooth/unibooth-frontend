import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Layout } from '@components/Layout/styles';
import BoothHeader from '@components/BoothHeader';
import BoothDetail from '@components/BoothDetail';
import BoothComment from '@components/BoothComment';
import BoothFooter from '@components/BoothFooter';

import { BOOTH_DATA } from '@data';
import { getById } from '@helpers';

export default function BoothDetailPage({ id }: { id: number }) {
  const booth = getById(id, BOOTH_DATA);

  return (
    <>
      <Head>
        <title>{booth.name} - 유니부스</title>
      </Head>
      <Layout>
        <BoothHeader />
        <main>
          <BoothDetail {...booth} />
          <BoothComment comments={booth.comments} />
        </main>
        <BoothFooter {...booth} commentCount={booth.comments.length} />
      </Layout>
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
    fallback: true,
  };
};
