import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import cx from 'clsx';

import Avatar from '@components/ui/Avatar';
import Input from '@components/ui/Input';
import styled from 'styled-components';
import tw from 'twin.macro';

import { createPost } from '@utils/api';
import { KEY_CAHE } from '@utils/const';

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  ${tw`px-5 py-2 mb-10 bg-white dark:bg-[#242526] shadow rounded-lg`}
  width: 30rem;
  max-width: 32rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  ${tw`my-2 transition-colors duration-100 delay-150`}
  padding: 5px;
  border-radius: 5px;
  width: 100%;
`;

const CreatePost = () => {
  const { data: session, status } = useSession();
  const [dummyId, setDummyId] = useState<string>('');
  const [text, setText] = useState<string>('');
  useEffect(() => {
    if (localStorage.getItem(KEY_CAHE)) {
      setDummyId(localStorage.getItem(KEY_CAHE));
    }
  }, []);
  const handleClick = () => {
    createPost(dummyId, text);
    setText('');
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
  };
  if (status === 'loading') return null;
  const isText = text.length === 0 ? true : false;
  return (
    <Flex>
      <Container>
        <Content>
          <Avatar size={48} photo={session?.user.image} />
          <Input
            value={text}
            onChange={handleChange}
            username={session?.user.name}
          />
        </Content>
        <Button
          className={cx({
            'bg-[#E3E6EA] cursor-not-allowed text-[#BCC0C4] font-medium':
              isText === true,
            'bg-[#186ED8] text-white font-medium': isText === false,
          })}
          disabled={isText}
          onClick={handleClick}
        >
          Publicar
        </Button>
      </Container>
    </Flex>
  );
};

export default CreatePost;
