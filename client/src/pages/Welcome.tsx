import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../components/Button.style';
import { Logo } from '../components/Logo';

const Container = styled.div`
  --padding: 2rem;
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: auto;
  background: url('https://res.cloudinary.com/kariecloud/image/upload/v1637698452/S4_Library_sxq5ho.jpg');
  background-size: auto 60vh;
  background-repeat: no-repeat;
  background-position: center 40%;
  padding: 2rem 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;
const labelCss = css`
  font-family: Lato, sans-serif;
  text-align: center;
  position: absolute;
  left: var(--padding);
  right: var(--padding);
`;
const LogoContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
const TopWelcomeText = styled.h1`
  ${labelCss}
  font-size: 4vh;
  top: 12vh;
`;
const BottomWelcomeText = styled.h2`
  ${labelCss}
  bottom: 16vh;
  font-size: 2.5vh;
  line-height: 1.5rem;
`;
const ActionButtonsContainer = styled.div`
  // position: absolute;
  // bottom: var(--padding);
  // width: 60vw;
  // left: 50%;
  // transform: translateX(-50%);
  // margin: auto;
  display: flex;
  gap: 1rem;
`;
const Welcome = () => (
  <Container>
    <LogoContainer>
      <Logo color="dark" iconOnly={true} />
    </LogoContainer>
    <TopWelcomeText>Welcome to the Words Heaven!</TopWelcomeText>
    <BottomWelcomeText>
      Your tool to memorize advanced vocabulary and improve your conversational,
      reading and writing skills.
    </BottomWelcomeText>
    <ActionButtonsContainer>
      <Button
        padding={[1, 2]}
        color={'dark'}
        borderRadius={1}
        background={'secondary'}
      >
        Sign Up
      </Button>
      <Button
        padding={[1, 2]}
        color={'light'}
        borderRadius={1}
        background={'dark'}
      >
        Log In
      </Button>
    </ActionButtonsContainer>
  </Container>
);

export default Welcome;
