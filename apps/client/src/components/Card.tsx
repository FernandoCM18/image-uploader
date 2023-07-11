import { useState } from 'react';
import styled from 'styled-components';
import { Button } from './';

interface Props {
  showToaster: (show: boolean) => void
}

export const Card = ({showToaster}: Props) => {
  const [image, setImage] = useState(false);
  const [link, setLink] = useState('https://images.yourdomain.com/photo-1496950866446-325');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    showToaster(true);
    setTimeout(() => {
      showToaster(false);
    }, 2000);
  };

  return (
    <Wrapper>
      {
        image ? (
          <>
            <div style={{
              marginBottom: '20px'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#219653" width={42} height={42}>
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <h2>Uploaded Successfully!</h2>
            </div>
            <WrapperWhitImage>
              <img src="../src/assets/imagetest.png" alt="Image uploaded" width={338} />
            </WrapperWhitImage>
            <WrapperLink>
              <p>{link}</p>
              <Button text='Copy Link' onClick={copyToClipboard} />
            </WrapperLink>
          </>
        ) : (
          <>
            <div>
              <h1>Upload your image</h1>
              <p style={{
                marginTop: '16px',
                marginBottom: '30px'
              }}>File should be Jpeg, png...
              </p>
            </div>
            <WrapperWhithoutImage>
              <img src="../src/assets/image.svg" alt="Image default" />
              <p>Drag & Drop your image here</p>
            </WrapperWhithoutImage>
            <p>Or</p>
            <LabelFile>
              Choose a file
              <input type="file" style={{display: 'none'}} onChange={() => setImage(true)} />
            </LabelFile>
          </>
        )
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.white};
  width: 402px;
  padding: 36px 32px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px ${({theme}) => theme.boxShadow};

  h1 {
    font-size: 27px;
    font-weight: 500;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    margin-top: 8px;
  }

  p {
    color: ${({theme}) => theme.text2};
  }
`;

const WrapperWhithoutImage = styled.div`
  border: 1px dashed ${({theme}) => theme.border};
  border-radius: 12px;
  background-color: ${({theme})=> theme.bgSecondary};
  margin-bottom: 19px;

  img {
    margin-top: 36px;
  }
  
  p {
    margin-top: 38px;
  }
`;

const WrapperWhitImage = styled.div`

  img {
    object-fit: cover;
    width: 100%;
    border-radius: 12px;
  }
 
`;

const WrapperLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  background-color: ${({theme}) => theme.bgSecondary};
  border-radius: 8px;
  max-height: 34px;
  padding: 2px;
  margin-top: 25px;

  p {
    font-size: 12px;
    color: #4F4F4F;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 7px;
  }
`;

const LabelFile = styled.label`
  background-color: ${({theme}) => theme.bgButton};
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  color: ${({theme}) => theme.white};
  cursor: pointer;
  white-space: nowrap;
`;