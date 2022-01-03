import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { DashboardTabs } from '../../utils/enums';
import { PieChart } from '../PieChart';

const Container = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
`;
const StatsContainer = styled.div`
  display: grid;
  width: 80%;
  margin: auto;
  background: ${(props) => props.theme.colors.primary}24;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;
  padding: 0.5rem;
  justify-items: center;
  border-radius: 1rem;
`;
const Number = styled.span`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
`;
const Name = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;
const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
`;
const DashboardStatsTab = () => {
  const active = useAppSelector((state) => state.dashboard.tabSelected);
  return (
    <Container show={active === DashboardTabs.Stats}>
      <StatsContainer>
        <Number>58</Number>
        <Number>72%</Number>
        <Name>Total vocabulary</Name>
        <Name>Training Success</Name>
      </StatsContainer>
      <ChartContainer>
        <PieChart progress={25} total={50} label={'learned'} />
        <PieChart progress={13} total={43} label={'in learning'} />
      </ChartContainer>
    </Container>
  );
};

export default DashboardStatsTab;
