import React from 'react';
import styled from 'styled-components';
import { SpeechPart } from '../../utils/enums';

const Container = styled.div``;
type CollectionItemProps = {
  isIdiom: boolean;
  word: string;
  description: string;
  examples: string[];
  tags: string[];
  isFavorite: boolean;
  synonyms?: string[];
  antonyms?: string[];
  partOfSpeach?: SpeechPart;
  collectionId?: number;
  transcription?: string;
};
const CollectionItem = ({
  isIdiom,
  word,
  description,
  examples,
  tags,
  isFavorite,
  synonyms = [],
  antonyms = [],
  partOfSpeach = SpeechPart.None,
  collectionId = 1,
  transcription = '',
}: CollectionItemProps) => {
  return <Container></Container>;
};

export default CollectionItem;
