import React from 'react';
import styled from 'styled-components';
import { DashboardTabs } from '../../utils/enums';

// const Container = styled.li<Partial<TabProps>>`
//   border: ${(props) => (props.isActive ? `solid red` : 'none')};
//   border-width: ${(props) => (props.isActive ? `1px 1px 0 1px;` : 'none')};
//   display: inline-block;
//   margin-bottom: -3px;
//   padding: 0.5rem 0.75rem;
// `;

const Container = styled.li<Partial<TabProps>>`
  border: solid red;
  border-width: ${(props) => (props.isActive ? `1px 1px 0 1px` : `0 0 1px 0`)};
  display: inline-block;
  margin-bottom: -3px;
  padding: 0.5rem 0.75rem;
  list-style: none;
`;

interface TabProps {
  isActive: boolean;
  label: DashboardTabs;
  onClick: any;
}
const Tab = ({ isActive, label, onClick: handler }: TabProps) => {
  return (
    <Container
      isActive={isActive}
      onClick={handler}
      data-testid="dashboard-tab-testid"
    >
      {label.toString()[0].toUpperCase() + label.toString().slice(1)}
    </Container>
  );
};

export default Tab;
