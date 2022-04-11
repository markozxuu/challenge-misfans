import { fetcher } from './fetcher';
import { APP_ID, API, KEY_CAHE } from './const';

const headers = new Headers();
headers.set('app-id', APP_ID);

export const getUsers = async () => {
  const users = await fetcher(API, {
    headers,
  });
  return users;
};

export const getPaths = async () => {
  const result = await fetcher(API, {
    headers,
  });
  const paths = result.data.map((item) => {
    return {
      params: {
        slug: item.id,
      },
    };
  });
  return paths;
};

export const getUser = async (id: string) => {
  const user = await fetcher(`https://dummyapi.io/data/v1/user/${id}`, {
    headers,
  });
  return user;
};

export const getUserPost = async (id: string) => {
  const res = await fetch(`https://dummyapi.io/data/v1/user/${id}/post`, {
    headers,
  });
  const posts = await res.json();
  console.log('posts function');
  console.log(posts);
  return posts.data;
};

export const createUser = async (user) => {
  const { email, name, image } = user;
  const res = await fetch('https://dummyapi.io/data/v1/user/create', {
    headers: {
      'Content-Type': 'application/json',
      'app-id': APP_ID,
    },
    method: 'POST',
    body: JSON.stringify({
      firstName: name,
      lastName: name,
      picture: image,
      email,
    }),
  });
  const dummyRes = await res.json();
  return localStorage.setItem(KEY_CAHE, dummyRes.id);
};

export const createPost = (ownerId: string, bodyPost: string) => {
  fetch('https://dummyapi.io/data/v1/post/create', {
    headers: {
      'Content-Type': 'application/json',
      'app-id': APP_ID,
    },
    method: 'POST',
    body: JSON.stringify({
      owner: ownerId,
      text: bodyPost,
      likes: 10,
    }),
  });
};

export const RemovePost = (id: string) => {
  fetch(`https://dummyapi.io/data/v1/post/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'app-id': APP_ID,
    },
    method: 'DELETE',
  });
};
