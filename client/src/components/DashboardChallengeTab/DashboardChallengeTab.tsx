import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { theme } from '../../globalStyles';
import { ChallengeType, DashboardTabs, Icons } from '../../utils/enums';
import { Challenge } from '../Challenge';
import Icon from '../Icon.style';

const Container = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
`;
const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
`;
const Title = styled.span`
  text-transform: capitalize;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textPrimary};
  padding: 0.3rem;
  font-family: Quicksand, sans-serif;
`;

const DashboardChallengeTab = () => {
  const isActive = useAppSelector((state) => state.dashboard.tabSelected);
  return (
    <Container show={isActive === DashboardTabs.Challenge}>
      <TitleRow>
        <Icon
          iconType={Icons.Problem}
          size={20}
          color={theme.colors.secondary}
        />
        <Title>insert missing part</Title>
      </TitleRow>
      <Challenge
        type={ChallengeType.Missing}
        sentence="You are a naughty boy! Look what you've done you've done you've done you've done!"
        missing={['naughty']}
      ></Challenge>
      {/* <Challenge type={ChallengeType.Missing} {...props}></Challenge> */}
    </Container>
  );
};

export default DashboardChallengeTab;
