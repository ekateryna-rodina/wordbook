import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { DashboardTabs } from '../../utils/enums';
import Card from '../Card.style';
import ScrollableHorizontalList from '../ScrollableHorizontalList.style';

const recent = [
  {
    word: 'generous',
    example: 'He was generous with both his time and his money',
  },
  {
    word: 'sizzling',
    example: 'It’s a sizzling hot day today!',
  },
  {
    word: 'soothed',
    example: 'At once, the rhythm and scent of the ocean soothed her',
  },
  {
    word: 'generous',
    example: 'He was generous with both his time and his money',
  },
  {
    word: 'sizzling',
    example: 'It’s a sizzling hot day today!',
  },
  {
    word: 'soothed',
    example: 'At once, the rhythm and scent of the ocean soothed her',
  },
  {
    word: 'very long example',
    example:
      'Trained in a school where the principles of responsible government were still in an embryonic state, where the adroit management of coalitions and cabals was essential to the life of a political party, and where plots and counterplots were looked upon as a regular part of the political game, he acquired a dexterity and skill in managing men that finally gave him an almost autocratic power among his political followers.Trained in a school where the principles of responsible government were still in an embryonic state, where the adroit management of coalitions and cabals was essential to the life of a political party, and where plots and counterplots were looked upon as a regular part of the political game, he acquired a dexterity and skill in managing men that finally gave him an almost autocratic power among his political followers.',
  },
];

const Word = styled.div`
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  text-transform: capitalize;
  font-size: clamp(1rem, 2vw, 1.2rem);
`;
const Example = styled.div`
  color: ${(props) => props.theme.colors.dark};
  font-style: italic;
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Container = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  height: calc(100% - 5rem);
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
`;

type RecentItemProps = {
  word: string;
  example: string;
};
const RecentItem = ({ word, example }: RecentItemProps) => {
  return (
    <Card>
      <Content>
        <Example>{example}</Example>
        <Word>{word}</Word>
      </Content>
    </Card>
  );
};
const DashboardRecentTab = () => {
  const activeTab = useAppSelector((state) => state.dashboard.tabSelected);
  return (
    <Container show={activeTab === DashboardTabs.Recent}>
      <ScrollableHorizontalList height={'30%'}>
        {recent.map((item, idx) => (
          <RecentItem {...item} key={item.word + Math.random()} />
        ))}
      </ScrollableHorizontalList>
    </Container>
  );
};

export default DashboardRecentTab;
