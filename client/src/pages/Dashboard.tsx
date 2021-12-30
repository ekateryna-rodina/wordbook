import React from 'react';
import styled from 'styled-components';
import { NewWord } from '../components/NewWord';
import { SearchBar } from '../components/SearchBar';

const Container = styled.div`
  --bg: ${(props) => `${props.theme.colors.light}24`};
  width: 100%;
  height: calc(100% - 5rem);
  padding: 1rem 1rem;
  position: relative;
  z-index: 50;
`;

const Dashboard = () => {
  return (
    <Container>
      <SearchBar />
      <NewWord />
    </Container>
  );
};

export default Dashboard;
