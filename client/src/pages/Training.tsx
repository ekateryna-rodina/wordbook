import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon.style';
import { ProgressBar } from '../components/ProgressBar';
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
const Training = () => {
  return (
    <Container>
      <HeaderRow>
        <BackButton>
          <Icon iconType={Icons.Back} color={theme.colors.primary} />
        </BackButton>
        <Header>Training</Header>
      </HeaderRow>
      <ProgressBar />
    </Container>
  );
};

export default Training;
