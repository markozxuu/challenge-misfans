import styled from 'styled-components';
import tw from 'twin.macro';
import tinytime from 'tinytime';

import Like from '@components/icons/Like';
import MoreHorizontal from '@components/icons/MoreHorizontal';
import Avatar from '@components/ui/Avatar';

interface PostCardProps {
  text: string;
  numberLikes: number;
  ownerPhoto: string;
  ownerName: string;
  publishDate: string;
  index: number;
}

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  ${tw`px-5 py-4 bg-white dark:bg-[#242526] shadow rounded-lg`}
  width: 30rem;
  max-width: 32rem;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  ${tw`text-gray-800 dark:text-gray-100 leading-snug md:leading-normal`}
`;

const PostCard = ({
  text,
  numberLikes,
  ownerPhoto,
  ownerName,
  publishDate,
  index,
}: PostCardProps) => {
  const template = tinytime('{MMMM} {DD} {dddd}');
  const DateFormat = template.render(new Date(publishDate));
  return (
    <Flex>
      <Container>
        <UserContainer>
          <div className="flex">
            <Avatar photo={ownerPhoto} size={48} />
            <div className="ml-2 mt-0.5">
              <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
                {ownerName}
              </span>
              <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                {DateFormat}
              </span>
            </div>
          </div>
          <MoreHorizontal />
        </UserContainer>
        <Text>{text}</Text>
        <div className="flex justify-between items-center mt-5">
          <div className="flex ">
            <Like />
            <span className="ml-1 text-gray-500 dark:text-gray-400 font-light">
              {numberLikes}
            </span>
          </div>
        </div>
      </Container>
    </Flex>
  );
};

export default PostCard;
