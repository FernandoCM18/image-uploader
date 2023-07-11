import styled from 'styled-components';

export const Loading = () => {
  return (
    <Wrapper>
      <p>Uploading...</p>
      <WrapperLoadingBar>
        <LoadingBar />
      </WrapperLoadingBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #FFFFFF;
  padding: 36px 32px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const WrapperLoadingBar = styled.div`
  background-color: #F2F2F2;
  height: 8px;
  width: 270px;
  border-radius: 8px;
  margin: 0px auto;
`;

const LoadingBar = styled.div`
  background-color: #2F80ED;
  width: 100px;
  height: 8px;
  border-radius: 8px;
  animation: loading 1s infinite;

  @keyframes loading {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translate(170px);
    }
  }
`;
