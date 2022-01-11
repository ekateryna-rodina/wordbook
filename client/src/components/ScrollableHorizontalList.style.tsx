import React from 'react';
import styled from 'styled-components';

const List = styled.ul<{ height: string }>`
  height: ${({ height }) => height}:;
  overflow: auto;
  display: flex;
  flex-direction: columns;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;
const ScrollableHorizontalList: React.FC<{ height: string }> = ({
  height,
  children,
}) => {
  return <List height={height}>{children}</List>;
};

export default ScrollableHorizontalList;
