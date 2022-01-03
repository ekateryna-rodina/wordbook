import React, { useState } from 'react';
import styled from 'styled-components';
import { DashboardTabs } from '../../utils/enums';
import { Tab } from '../Tab';

const Container = styled.ul`
  margin: 1rem 0;
  padding: 0;
  /* border-bottom: 1px solid #ccc; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Tabs = () => {
  const [active, setActive] = useState<DashboardTabs>(DashboardTabs.Challenge);
  const tabs = [
    {
      label: DashboardTabs.Challenge,
    },
    {
      label: DashboardTabs.Stats,
    },
    {
      label: DashboardTabs.Recent,
    },
  ];
  const onTabClickHandler = (tab: DashboardTabs) => {
    setActive(tab);
  };
  return (
    <Container>
      {tabs.map((tab) => (
        <Tab
          key={tab.label.toString()}
          label={tab.label}
          onClick={() => onTabClickHandler(tab.label)}
          isActive={active === tab.label}
        />
      ))}
    </Container>
  );
};

export default Tabs;
