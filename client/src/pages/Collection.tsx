import React from 'react';
import styled from 'styled-components';
import { CollectionItem } from '../components/CollectionItem';
import Icon from '../components/Icon.style';
import { SearchBar } from '../components/SearchBar';
import { theme } from '../globalStyles';
import { Icons, SpeechPart } from '../utils/enums';

const Container = styled.div`
  width: 100%;
  height: calc(100% - 4.1rem);
  padding: 1rem;
`;
const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const BackButton = styled.div``;
const CollectionName = styled.span`
  margin: auto;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary};
`;
const Total = styled.span`
  font-size: 1rem;
  color: ${(props) => `${props.theme.colors.gray}87`};
`;
const CollectionItemsContainer = styled.div`
  height: auto;
  max-height: calc(100% - 5rem);
  /* max-height: inherit; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  justify-items: center;
  gap: 1rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Collection = () => {
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
  return (
    <Container>
      <HeaderRow>
        <BackButton>
          <Icon iconType={Icons.Back} color={theme.colors.primary} />
        </BackButton>
        <CollectionName>
          All<Total> (total: 155)</Total>
        </CollectionName>
      </HeaderRow>
      <SearchBar />
      <CollectionItemsContainer>
        {collectionItems.map((ci) => (
          <CollectionItem {...ci} />
        ))}
      </CollectionItemsContainer>
    </Container>
  );
};

export default Collection;
