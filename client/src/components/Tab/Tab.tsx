import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { tabSelectedChanged } from '../../features/dashboard/dashboard-slice';
import { DashboardTabs } from '../../utils/enums';

const Container = styled.li<Partial<TabProps>>`
  border: ${(props) => `solid ${props.theme.colors.primary}87`};
  border-width: ${(props) => (props.isActive ? `1px 1px 0 1px` : `1px`)};
  display: inline-block;
  margin: 0 0.5rem 1px 0.5rem;
  padding: 0.5rem 0.75rem;
  list-style: none;
  text-transform: capitalize;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.textPrimary};
  font-family: Quicksand, sans-serif;
  background: ${(props) =>
    props.isActive ? `${props.theme.colors.primary}87` : `white`};
  border-radius: 16px;
  color: ${(props) => (props.isActive ? 'white' : props.theme.colors.primary)};
`;

interface TabProps {
  isActive?: boolean;
  label: DashboardTabs;
  onClick?: any;
}
const Tab = ({ label }: TabProps) => {
  const dispatch = useAppDispatch();
  const active = useAppSelector((state) => state.dashboard.tabSelected);
  const tabSelectedHandler = () => {
    dispatch(tabSelectedChanged(label));
  };
  return (
    <Container
      isActive={active === label}
      onClick={tabSelectedHandler}
      data-testid="dashboard-tab-testid"
    >
      {label.toString()[0].toUpperCase() + label.toString().slice(1)}
    </Container>
  );
};

export default Tab;
