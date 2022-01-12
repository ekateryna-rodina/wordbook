import React from 'react';
import styled from 'styled-components';
import { DashboardChallengeTab } from '../components/DashboardChallengeTab';
import { DashboardRecentTab } from '../components/DashboardRecentTab';
import { DashboardStatsTab } from '../components/DashboardStatsTab';
import { Menu } from '../components/Menu';
// import { Menu } from '../components/Menu';
import { NewWord } from '../components/NewWord';
import { SearchBar } from '../components/SearchBar';
import { Tabs } from '../components/Tabs';

const Container = styled.div`
  --bg: ${(props) => `${props.theme.colors.light}24`};
  width: 100%;
  height: calc(100% - 4.1rem);
  position: relative;
  padding: 1rem;
`;
const WithPadding = styled.div`
  padding: 1rem 1rem 0 1rem;
`;
const Dashboard = () => {
  return (
    <Container>
      <SearchBar />
      <NewWord />
      <Tabs />
      <DashboardChallengeTab />
      <DashboardStatsTab />
      <DashboardRecentTab />
      <Menu />
    </Container>
  );
};

export default Dashboard;
