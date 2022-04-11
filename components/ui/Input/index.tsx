import styled from 'styled-components';
import tw from 'twin.macro';

const InputStyled = styled.input`
  ${tw`bg-[#E3E6E9] dark:bg-[#4E4F50] px-3 py-1.5 font-medium`}
  margin-left: 5px;
  width: 100%;
  border-radius: 25px;
`;

interface InoutProps {
  onChange: any;
  value: string;
  username: string;
}

const Input = ({ onChange, value, username }: InoutProps) => {
  const placeholder = `¿Qué estás pensando, ${username}?`;
  return (
    <InputStyled value={value} onChange={onChange} placeholder={placeholder} />
  );
};

export default Input;
