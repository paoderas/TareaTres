import React from 'react';
import styled from 'styled-components';

// Estilos con styled-components
const MainContainer = styled.main`
  display: grid;
  min-height: 100vh;
  place-content: center;
  place-items: center;
  overflow: hidden;
  background: linear-gradient(to bottom, #1e293b, #000000);
`;

const InnerContainer = styled.div`
  position: relative;
  display: grid;
  place-content: center;
  place-items: center;
  gap: 2rem;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    top: 120%;
    left: 0;
    position: absolute;
    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
    background: linear-gradient(to top, rgba(0, 150, 136, 0.7), #d946ef 60%, transparent);
    filter: blur(1rem);
  }
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  color: #14b8a6; /* Teal */
  text-shadow: 0 0 0.125em rgba(192, 38, 211, 0.5), 0 0 0.45em currentColor;
`;

const SubTitle = styled.h2`
  font-family: 'Satisfy', cursive;
  font-size: 6rem;
  font-weight: 100;
  color: #d946ef; /* Fuchsia */
  text-shadow: 0 0 0.125em rgba(192, 38, 211, 0.5), 0 0 0.45em currentColor;
`;

const Home = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <Title>React</Title>
        <SubTitle>Práctica Uno</SubTitle>
      </InnerContainer>
    </MainContainer>
  );
};

export default Home;

