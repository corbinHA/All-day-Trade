import React from 'react';
import SignupButton from './SignupButton';
import styled from 'styled-components';
import Photo from '../../images/commodity.jpg';


function LandingPage() {
  return (
    <MainContainer>
      <PageContainer>
        <ImageContainer>
          <Img></Img>
        </ImageContainer>
        <InfoContainer>
          <h1 className="landing-page_intro header">
            Investing for the People, by the People
          </h1>
          <Header>
            This is just a demo for a showing of a commodity trading App
          </Header>
          <SignupButton />
        </InfoContainer>
      </PageContainer>
    </MainContainer>
  );
}

export default LandingPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

`;
const ImageContainer = styled.div`
  width: 70%;
  height: 100%;
  z-index: -10;
  padding: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
`

const Img = styled.div`
  background-image: url(${Photo});
  width: 50%;
  height: 90%;
  background-position: cover;
  position: absolute;
`;

const Header = styled.h2``;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
