import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon.style';
import { Menu } from '../components/Menu';
import { NotificationsIntervalSelector } from '../components/NotificationsIntervalSelector';
import { ScreenModeSwitcher } from '../components/ScreenModeSwitcher';
import { theme } from '../globalStyles';
import { Icons } from '../utils/enums';

const Container = styled.div`
  width: 100%;
  height: calc(100% - 4.1rem);
  padding: 1.5rem 1rem 1rem 1rem;
  background: white;
`;
const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
const BackButton = styled.div``;
const Header = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary};
`;
const Label = styled.label`
  color: ${(props) => props.theme.colors.dark};
`;
const SettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`;
const Settings = () => {
  return (
    <Container>
      <HeaderRow>
        <BackButton>
          <Icon iconType={Icons.Back} color={theme.colors.primary} />
        </BackButton>
        <Header>Settings</Header>
      </HeaderRow>
      <SettingContainer>
        <Label>Screen mode:</Label>
        <ScreenModeSwitcher />
      </SettingContainer>
      <SettingContainer>
        <Label>Notifications interval:</Label>
        <NotificationsIntervalSelector />
      </SettingContainer>
      <Menu />
    </Container>
  );
};

export default Settings;
