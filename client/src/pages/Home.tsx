import React from 'react';
import styled from 'styled-components';
import { CreateRecord } from '../components/CreateRecord';
import Icon from '../components/Icon.style';
import { Icons } from '../utils/enums';

const WelcomeUser = styled.h2`
  color: ${(props) => props.theme.dark};
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0;
  display: block;
`;
const WordRow = styled.li`
  padding: 1rem;
  margin-bottom: 0.5rem;
  background: var(--bg);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
`;
const Word = styled.span``;
const Actions = styled.div``;
const Container = styled.div`
  --bg: ${(props) => `${props.theme.light}24`};
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  position: relative;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
const Label = styled.h3`
  color: ${(props) => props.theme.primary};
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0;
`;
const Collection = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Home = () => {
  const renderCollection = () => {
    if (true) {
      return (
        <Collection>
          <WordRow>
            <Word>Complex word</Word>
            <Actions>
              <Icon iconType={Icons.Details}></Icon>
            </Actions>
          </WordRow>
          <WordRow>
            <Word>Complex word</Word>
            <Actions>
              <Icon iconType={Icons.Details}></Icon>
            </Actions>
          </WordRow>
          <WordRow>
            <Word>Complex word</Word>
            <Actions>
              <Icon iconType={Icons.Details}></Icon>
            </Actions>
          </WordRow>
        </Collection>
      );
    } else {
      return <h2>Your vocabulary is empty</h2>;
    }
  };
  return (
    <Container>
      <Header>
        {/* <WelcomeUser>Welcome, Kate!</WelcomeUser> */}
        <Label>Your Words</Label>
        <Icon iconType={Icons.Create} />
      </Header>
      {renderCollection()}
      <CreateRecord show={true} />
    </Container>
  );
};

export default Home;
