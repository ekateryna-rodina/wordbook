import React from 'react';
import styled from 'styled-components';
import { DashboardChallengeTab } from '../components/DashboardChallengeTab';
import { DashboardStatsTab } from '../components/DashboardStatsTab';
import { NewWord } from '../components/NewWord';
import { SearchBar } from '../components/SearchBar';
import { Tabs } from '../components/Tabs';

const Container = styled.div`
  --bg: ${(props) => `${props.theme.colors.light}24`};
  width: 100%;
  height: calc(100% - 5rem);
  padding: 1rem 1rem;
  position: relative;
`;

const Dashboard = () => {
  return (
    <Container>
      <SearchBar />
      <NewWord />
      <Tabs />
      <DashboardChallengeTab />
      <DashboardStatsTab />
    </Container>
  );
};

export default Dashboard;
