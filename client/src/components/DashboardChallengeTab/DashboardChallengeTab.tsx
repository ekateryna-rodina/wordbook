import React from 'react';
import styled from 'styled-components';
import { theme } from '../../globalStyles';
import { ChallengeType, Icons } from '../../utils/enums';
import { Challenge } from '../Challenge';
import Icon from '../Icon.style';

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
  return (
    <>
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
    </>
  );
};

export default DashboardChallengeTab;
