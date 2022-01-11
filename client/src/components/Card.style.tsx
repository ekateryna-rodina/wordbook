import React from 'react';
import styled from 'styled-components';

const Container = styled.li<{ inViewport: boolean }>`
  height: 80%;
  /* overflow: hidden; */
  display: inline-block;
  border-radius: 0.5rem;
  background: ${(props) => `${props.theme.colors.light}55`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  transform: ${({ inViewport }) =>
    inViewport ? 'scale(1.1) translateY(-10%)' : 'scale(.9) translateY(0)'};
  box-shadow: ${(props) =>
    props.inViewport
      ? `0 9px 15px ${props.theme.colors.primary}21`
      : `0 3px 7px ${props.theme.colors.primary}21`};
`;
const Content = styled.div`
  max-width: 10rem;
  width: max-content;
  height: 100%;
  hyphens: auto;
  overflow: hidden;
`;
type CardProps = {
  inViewport: boolean;
};
const Card: React.FC<CardProps> = ({ children, inViewport }) => {
  return (
    <Container inViewport={inViewport}>
      <Content>{children}</Content>
    </Container>
  );
};

export default Card;
