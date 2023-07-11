import { useState } from 'react';
import styled from 'styled-components';
import { Card, Loading, Toast } from './components';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <WrapperApp>
      {showToast && <Toast message="Link copied" />}
      {
        isLoading ? <Loading /> : <Card showToaster={setShowToast} />
      }
      <Footer>created by <span>FernandoCM18</span> - devChallenges.io</Footer>
    </WrapperApp>
  );
}

export default App;

const WrapperApp = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
`;

const Footer = styled.footer`
  color: #A9A9A9;
  align-self: end;
  margin-bottom: 24px;
  
  span {
    font-weight: bold;
  }
`;
