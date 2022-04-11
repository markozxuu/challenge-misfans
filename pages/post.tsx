import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import Layout from '@components/common/Layout';
import CreatePost from '@components/user/CreatePost';
import ListPosts from '@components/user/ListPosts';

import { getUserPost } from '@utils/api';
import { KEY_CAHE } from '@utils/const';

const Post = () => {
  const [posts, setPost] = useState([]);
  const { data: session, status } = useSession();
  useEffect(() => {
    const fetchData = async () => {
      const userPosts = await getUserPost(localStorage.getItem(KEY_CAHE));
      setPost(userPosts);
    };
    fetchData();
  }, [posts]);
  console.log('My posts');
  console.log(posts);
  if (status === 'loading') return null;
  if (!session) {
    return (
      <Layout>
        <h1 className="text-3xl">Inicie sessión, para crear post :)</h1>
      </Layout>
    );
  }
  return (
    <Layout>
      <CreatePost />
      {posts === undefined ? (
        <p>No tienes posts aun</p>
      ) : (
        <ListPosts posts={posts} />
      )}
    </Layout>
  );
};

export default Post;
