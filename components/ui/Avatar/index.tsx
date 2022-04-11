import styled from 'styled-components';
import Image from 'next/image';

interface AvatarProps {
  photo: string;
  size?: number;
}

const StyledImage = styled(Image)`
  border-radius: 50px;
  object-fit: cover;
`;

const Avatar = ({ photo, size = 28 }: AvatarProps) => (
  <StyledImage src={photo} width={size} height={size} alt="Profile photo" />
);

export default Avatar;
