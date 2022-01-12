import React from 'react';
import styled from 'styled-components';

const Container = styled.div<CardProps>`
  height: 95%;
  display: inline-block;
  border-radius: 0.5rem;
  background: ${(props) => props.background ?? `${props.theme.colors.light}55`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: ${(props) => `0 3px 7px ${props.theme.colors.primary}21`};
  padding: 0.5rem;
  box-sizing: padding-box;

  & > div {
    width: ${({ isWide }) => (isWide ? `calc(100vw - 3rem)` : 'max-content')};
    max-width: ${({ isWide }) => (isWide ? `20rem` : '10rem')};
  }
`;
const Content = styled.div`
  height: 100%;
  hyphens: auto;
`;
type CardProps = {
  background?: string;
  isWide?: boolean;
};
const Card: React.FC<CardProps> = ({
  children,
  background,
  isWide = false,
}) => {
  return (
    <Container isWide={isWide} background={background}>
      <Content>{children}</Content>
    </Container>
  );
};

export default Card;
