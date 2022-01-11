import React from 'react';
import styled from 'styled-components';

const Container = styled.li`
  min-width: 12rem;
  height: 100%;
  border-radius: 0.5rem;
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.colors.light}87, ${props.theme.colors.highlight}87)`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const Card: React.FC<any> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
