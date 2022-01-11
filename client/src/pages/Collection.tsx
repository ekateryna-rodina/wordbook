import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { CollectionItem } from '../components/CollectionItem';
import Icon from '../components/Icon.style';
import { Menu } from '../components/Menu';
import { SearchBar } from '../components/SearchBar';
import { theme } from '../globalStyles';
import { Icons, SpeechPart } from '../utils/enums';

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
const CollectionName = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary};
`;
const TogglableSearchTerm = styled.div<{ show: boolean }>`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.1s ease-in-out;
  color: ${(props) => props.theme.colors.primary};
  margin: auto;
  font-size: 1.2rem;
`;
const CollectionItemsContainer = styled.div<{ top: boolean }>`
  height: auto;
  max-height: ${({ top }) =>
    top ? 'calc(100% - 5rem + 43px)' : 'calc(100% - 5rem)'};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  justify-items: center;
  gap: 1rem;
  padding-top: ${({ top }) => (top ? '3rem' : 0)};
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  transform: ${({ top }) => (top ? 'translateY(-50px)' : 'translateY(0)')};
`;
const SearchBarContainer = styled.div<{ show: boolean }>`
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-100%)')};
  position: relative;
  z-index: ${({ show }) => (show ? 100 : -1)};
`;

const collectionItems = [
  {
    isIdiom: true,
    word: 'under the weather',
    description: 'not feeling well',
    examples: [
      'My boss has been under the weather all week and has not come to work that time',
      'I have my final exam today, but I am feeling under the weatther. I don`t know how I will fare',
    ],
    tags: ['idiom', 'mood'],
    collectionId: 1,
    isFavorite: false,
  },
  {
    isIdiom: true,
    word: 'come hell or high water',
    description: 'no matter what happens',
    collectionId: 1,
    examples: [
      'Come hell or high water we will be in NYC for the meeting tomorrow morning',
    ],
    tags: ['idiom', 'organization', 'business'],
    isFavorite: true,
  },
  {
    isIdiom: false,
    word: 'essentric',
    description: 'conspicuously or grossly unconventional or unusual',
    examples: ['famed for his eccentric spelling'],
    tags: ['idiom', 'mood'],
    isFavorite: true,
    synonyms: ['bizarre', 'flakey', 'flaky', 'freakish', 'freaky', 'gonzo'],
    antonyms: ['ordinary', 'conventional'],
    partOfSpeach: SpeechPart.Adjective,
    transcription: `ekˈsentrɪk`,
    collectionId: 1,
  },
  {
    isIdiom: true,
    word: 'come hell or high water',
    description: 'no matter what happens',
    collectionId: 1,
    examples: [
      'Come hell or high water we will be in NYC for the meeting tomorrow morning',
    ],
    tags: ['idiom', 'organization', 'business'],
    isFavorite: true,
  },
  {
    isIdiom: false,
    word: 'essentric',
    description: 'conspicuously or grossly unconventional or unusual',
    examples: ['famed for his eccentric spelling'],
    tags: ['idiom', 'mood'],
    isFavorite: true,
    synonyms: ['bizarre', 'flakey', 'flaky', 'freakish', 'freaky', 'gonzo'],
    antonyms: ['ordinary', 'conventional'],
    partOfSpeach: SpeechPart.Adjective,
    transcription: `ekˈsentrɪk`,
    collectionId: 1,
  },
  {
    isIdiom: true,
    word: 'come hell or high water',
    description: 'no matter what happens',
    collectionId: 1,
    examples: [
      'Come hell or high water we will be in NYC for the meeting tomorrow morning',
    ],
    tags: ['idiom', 'organization', 'business'],
    isFavorite: true,
  },
  {
    isIdiom: false,
    word: 'essentric',
    description: 'conspicuously or grossly unconventional or unusual',
    examples: ['famed for his eccentric spelling'],
    tags: ['idiom', 'mood'],
    isFavorite: true,
    synonyms: ['bizarre', 'flakey', 'flaky', 'freakish', 'freaky', 'gonzo'],
    antonyms: ['ordinary', 'conventional'],
    partOfSpeach: SpeechPart.Adjective,
    transcription: `ekˈsentrɪk`,
    collectionId: 1,
  },
];
const Collection = () => {
  const collectionRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [searchVisible, setSearchVisible] = useState(true);
  // const debouncedScrollValue = useDebounce(scrollTop)
  const onScrollHandler = () => {
    const current = (collectionRef.current as any).scrollTop;
    const visible = current < scrollTop;
    setScrollTop(current);
    setSearchVisible(visible);
  };
  return (
    <Container>
      <HeaderRow>
        <BackButton>
          <Icon iconType={Icons.Back} color={theme.colors.primary} />
        </BackButton>
        <CollectionName>All</CollectionName>
        <TogglableSearchTerm show={!searchVisible}>
          {'Test search'}
        </TogglableSearchTerm>
      </HeaderRow>
      <SearchBarContainer show={searchVisible}>
        <SearchBar />
      </SearchBarContainer>
      <CollectionItemsContainer
        ref={collectionRef}
        onScroll={onScrollHandler}
        top={!searchVisible}
      >
        {collectionItems.map((ci) => (
          <CollectionItem {...ci} />
        ))}
      </CollectionItemsContainer>
      <Menu />
    </Container>
  );
};

export default Collection;
