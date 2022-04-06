import styled from 'styled-components';
import Image from 'next/image';
import tw from 'twin.macro';

interface AvatarProps {
  photo: string;
}

const StyledImage = styled(Image)`
  border-radius: 50px;
  object-fit: cover;
  width: 28px;
  height: 28px;
`;

const Avatar = ({ photo }: AvatarProps) => (
  <StyledImage src={photo} width={28} height={28} />
);

export default Avatar;
