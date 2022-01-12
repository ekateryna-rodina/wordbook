import React from 'react';
import styled from 'styled-components';

const List = styled.div<{ height: string }>`
  overflow-y: auto;
  -webkit-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
  height: ${({ height }) => height};
  display: flex;
  flex-direction: columns;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin: 0;
  padding: 0.25rem;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    scroll-snap-align: center;
    -webkit-scroll-snap-align: center;
  }
`;
const ScrollableHorizontalList: React.FC<{ height: string }> = ({
  height,
  children,
}) => {
  return <List height={height}>{children}</List>;
};

export default ScrollableHorizontalList;
