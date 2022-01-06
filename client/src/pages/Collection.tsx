import React from 'react';
import styled from 'styled-components';
import { CollectionItem } from '../components/CollectionItem';
import Icon from '../components/Icon.style';
import { SearchBar } from '../components/SearchBar';
import { Icons, SpeechPart } from '../utils/enums';

const Container = styled.div`
  width: 100%;
  height: calc(100% - 4.1rem);
  background: red;
`;
const HeaderRow = styled.div``;
const BackButton = styled.div``;
const CollectionName = styled.span``;
const CollectionItemsContainer = styled.div``;
const Collection = () => {
  console.log('here');
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
      isFavorite: true,
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
          <Icon iconType={Icons.Back} />
        </BackButton>
        <CollectionName></CollectionName>
      </HeaderRow>
      <SearchBar />
      <CollectionItemsContainer>
        $
        {collectionItems.map((ci) => (
          <CollectionItem {...ci} />
        ))}
      </CollectionItemsContainer>
    </Container>
  );
};

export default Collection;
