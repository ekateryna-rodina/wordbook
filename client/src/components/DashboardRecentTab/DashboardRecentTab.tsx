import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { DashboardTabs } from '../../utils/enums';

const SwipeHint = styled.div``;
const RecentList = styled.ul`
  overflow-x: auto;
`;
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
const RecentItemStyled = styled.li`
  width: 10rem;
  height: max-content;
  border-radius: 0.5rem;
  display: inline-block;
  background: ${(props) => `${props.theme.colors.primary}24`};
  margin: 0 0.5rem;
`;
type RecentItemProps = {
  word: string;
  example: string;
};
const RecentItem = ({ word, example }: RecentItemProps) => {
  return (
    <RecentItemStyled>
      <Example>{example}</Example>
      <Word>{word}</Word>
    </RecentItemStyled>
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
  ];
  return (
    <Container show={activeTab === DashboardTabs.Recent}>
      <SwipeHint></SwipeHint>
      <RecentList>
        {recent.map((item) => (
          <RecentItem {...item} />
        ))}
      </RecentList>
    </Container>
  );
};

export default DashboardRecentTab;
