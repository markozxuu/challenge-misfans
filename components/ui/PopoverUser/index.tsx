import styled from 'styled-components';
import Link from 'next/link';
import tw from 'twin.macro';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { signOut } from 'next-auth/react';

import Avatar from '../Avatar';

const StyledContent = styled(PopoverPrimitive.Content)`
  ${tw`dark:bg-[#000] bg-white shadow-popover dark:shadow-[0 0 0 1px #333]`}
  border-radius: 5px;
  padding: 8px 0;
  width: 225px;
  min-width: auto;
`;

const StyledArrow = styled(PopoverPrimitive.Arrow)`
  fill: white;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonLogOut = styled.button`
  ${tw`hover:bg-[#fafafa] dark:hover:bg-[#111] hover:text-black dark:hover:text-[#fff] py-2 px-2 text-[#888] transition-colors duration-75`}
  width: 100%;
  text-align: start;
  outline: none;
`;

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = StyledContent;
export const PopoverArrow = StyledArrow;

const PopoverUser = ({ profileImage }: any) => (
  <Popover>
    <PopoverTrigger asChild>
      <div className="flex justify-center cursor-pointer">
        <Avatar photo={profileImage} />
      </div>
    </PopoverTrigger>
    <PopoverContent sideOffset={5}>
      <Flex>
        <Link href={'/post'}>
          <a className="hover:bg-[#fafafa] dark:hover:bg-[#111] dark:hover:text-[#fff] hover:text-black py-2 px-2 text-[#888] transition-colors duration-75 w-full">
            My posts
          </a>
        </Link>
      </Flex>
      <div className="flex justify-center my-2 border-b border-[#eaeaea] dark:border-[#333] w-full" />
      <Flex>
        <ButtonLogOut onClick={() => signOut()}>Log out</ButtonLogOut>
      </Flex>
      <PopoverArrow />
    </PopoverContent>
  </Popover>
);

export default PopoverUser;
