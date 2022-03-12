import { GetStaticPaths, GetStaticProps } from 'next/types';
import { useRouter } from 'next/router';

import { getPaths, getUser } from '@utils/api';

import Layout from '@components/common/Layout';
import DetailView from '@components/user/DetailView';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPaths();
  return {
    paths,
    // This allows to generate it runtime
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const user = await getUser(slug.toString());
  return {
    props: {
      user,
    },
  };
};

const User = ({ user }) => {
  const { isFallback } = useRouter();
  if (isFallback) {
    return (
      <Layout>
        <div className="max-w-3xl px-4 mx-auto mt-7">
          <h1 className="font-bold text-4xl tracking-tight text-black dark:text-white">
            Loading...
          </h1>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <DetailView user={user} />
    </Layout>
  );
};

export default User;
