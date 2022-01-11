import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { DashboardTabs } from '../../utils/enums';
import Card from '../Card.style';
import ScrollableHorizontalList from '../ScrollableHorizontalList.style';

const SwipeHint = styled.div``;

const Word = styled.div`
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  padding: 0.5rem;
  text-transform: capitalize;
  font-size: 1.5rem;
`;
const Example = styled.div`
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.primary};
  font-style: italic;
`;
const Container = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  height: calc(100% - 5rem);
`;

type RecentItemProps = {
  word: string;
  example: string;
};
const RecentItem = ({ word, example }: RecentItemProps) => {
  return (
    <Card>
      <Example>{example}</Example>
      <Word>{word}</Word>
    </Card>
  );
};
const DashboardRecentTab = () => {
  const activeTab = useAppSelector((state) => state.dashboard.tabSelected);
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
  ];
  return (
    <Container show={activeTab === DashboardTabs.Recent}>
      <SwipeHint></SwipeHint>
      <ScrollableHorizontalList height={'10%'}>
        {recent.map((item) => (
          <RecentItem {...item} key={item.word + Math.random()} />
        ))}
      </ScrollableHorizontalList>
    </Container>
  );
};

export default DashboardRecentTab;
