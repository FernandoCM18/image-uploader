import { styled } from 'styled-components';

interface Props {
  text: string;
  onClick?: () => void;
}

export const Button = ({text = 'Button', onClick}: Props) => { 
  return (
    <Wrapper 
      onClick={onClick}
    >
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  font-family: 'Noto Sans', sans-serif;
  background-color: ${({theme}) => theme.bgButton};
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  color: ${({theme}) => theme.white};
  cursor: pointer;
  white-space: nowrap;
`;
