import React from 'react';
import styled from 'styled-components';
import AddButton from '../components/AddButton.style';

const Container = styled.div`
  width: 92%;
  height: calc(100% - 4rem);
  margin: 1rem auto;
`;
const Title = styled.h3`
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.primary};
  font-size: var(--title-font-size);
  margin: 0.5rem;
`;
const CollectionsContainer = styled.div`
  height: auto;
  max-height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  justify-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem 0.5rem;

  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;
const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CollectionStyled = styled.div`
  width: 100%;
  height: 7rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.light};
  box-shadow: ${(props) => `2px 2px 5px ${props.theme.colors.highlight}`};
`;
type CollectionProps = {
  name: string;
  size: number;
  progress: number;
};
const Collection = ({ name, size, progress }: CollectionProps) => {
  return <CollectionStyled></CollectionStyled>;
};
const Library = () => {
  const collections = [
    { name: 'Personality traits', size: 22, progress: 0 },
    { name: 'Business writing', size: 10, progress: 1 },
    { name: 'Top 100 verbs', size: 100, progress: 2 },
    { name: 'Interesting questions', size: 1, progress: 1 },
    { name: 'My stories', size: 10, progress: 1 },
  ];
  return (
    <Container>
      <HeaderRow>
        <Title>your collections</Title>
        <AddButton />
      </HeaderRow>
      <CollectionsContainer>
        {collections.map((c) => (
          <Collection {...c} />
        ))}
      </CollectionsContainer>
      {}
    </Container>
  );
};

export default Library;
