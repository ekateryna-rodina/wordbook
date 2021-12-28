import React, { useEffect, useState } from 'react';
import styled, { css, useTheme } from 'styled-components';
import { Icons } from '../../utils/enums';
import { getRandomColor } from '../../utils/helpers';
import Icon from '../Icon.style';

const typographyStyle = css`
  font-size: 1rem;
  font-family: 'Roboto', Times, serif;
  letter-spacing: 0.1rem;
`;

const AutocompleteContainer = styled.div`
  --input-height: 2.25rem;
  --padding-left: 0.5rem;
  position: inherit;
  width: 100vw;
  max-width: 15rem;
  //   height: 7rem;
  z-index: 1000;
`;
const Input = styled.input`
  border: 1px solid blue;
  outline-color: blue;
  border-radius: 0.2rem;
  width: 100%;
  position: absolute;
  height: var(--input-height);
  padding-left: var(--padding-left);
  ${typographyStyle};
`;
const Autocomplete = styled.div<{ show: boolean }>`
  background: transparent;
  color: rgba(0, 0, 0, 0.5);
  width: auto;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  ${typographyStyle};
`;
const Hidden = styled.div`
  visibility: hidden;
  width: auto;
  float: left;
  ${typographyStyle};
`;
const VirtualWrapper = styled.div`
  position: absolute;
  width: auto;
  height: var(--input-height);
  pointer-events: none;
  padding-left: var(--padding-left);
  overflow: hidden;
  display: flex;
  align-items: center;
`;
const Tag = styled.div<{ bg: string }>`
  background: ${({ bg }) => bg};
  padding: 0.3em;
  color: white; //dynamic depending on bg
  border-radius: 0.2em;
  ${typographyStyle};
`;
const DisplayTags = styled.div`
  margin-top: 2.625rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.2em;
`;
const IconContainer = styled.div`
  margin-left: var(--padding-left);
  display: inline;
  cursor: pointer;
`;

const TagsInput = () => {
  const data = {
    tag1: { id: 'id1', bg: 'green' },
    mag111111: { id: 'id1', bg: 'red' },
  };
  const [tag, setTag] = useState<string>('');
  const [suggestion, setSuggestion] = useState<Partial<
    Record<keyof typeof data, string>
  > | null>(null);
  const [selectedTags, setSelectedTags] = useState<
    Partial<Record<keyof typeof data, { id: string; bg: string }>>[]
  >([]);
  const theme = useTheme();
  const autocomplete = () => {
    if (!tag.length) {
      setSuggestion(null);
      return;
    }
    const relevantKeys = Object.keys(data).filter((k) => k.startsWith(tag));
    if (!relevantKeys.length) {
      setSuggestion(null);
      return;
    }
    const suggestion: Partial<Record<keyof typeof data, string>> =
      relevantKeys.reduce((result: {}, key: string) => {
        return Object.assign(result, { [key]: data[key as keyof typeof data] });
      }, {});
    setSuggestion(suggestion);
  };
  const handleTab = (e: any) => {
    if (suggestion && e.key === 'Tab') {
      e.preventDefault();
      const suggestionString = Object.keys(suggestion)[0];
      setTag(suggestionString);
      setSuggestion(null);
    }
  };
  const handleEnter = (e: any) => {
    if (e.key === 'Enter' && tag.length) {
      e.preventDefault();
      const duplicate =
        selectedTags.filter((selected) => Object.keys(selected)[0] === tag)
          .length > 0;
      if (duplicate) {
        setTag('');
        return;
      }
      if (tag in data) {
        let newTag = Object.keys(data)
          .filter((k) => k === tag)
          .reduce((result, key) => {
            return Object.assign(result, {
              [key]: data[key as keyof typeof data],
            });
          }, {});
        setSelectedTags([...selectedTags, newTag]);
      } else {
        setSelectedTags([
          ...selectedTags,
          { [tag]: { id: null, bg: getRandomColor() } },
        ]);
      }
      setTag('');
    }
  };
  const confirmSuggestionHandler = (e: any) => {
    handleTab(e);
    handleEnter(e);
  };
  const removeTagHandler = (tag: string) => {
    console.log(tag);
    if (!tag.length) return;
    const newSelectedTags = selectedTags.filter(
      (t) => Object.keys(t)[0] !== tag
    );
    setSelectedTags(newSelectedTags);
  };
  useEffect(() => {
    autocomplete();
    // eslint-disable-next-line
  }, [tag]);

  return (
    <AutocompleteContainer>
      <Input
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        onKeyDown={confirmSuggestionHandler}
        data-testid="tags-autocomplete-testid"
      />
      <VirtualWrapper>
        <Hidden>{tag}</Hidden>
        <Autocomplete
          show={Boolean(suggestion)}
          onTouchStart={confirmSuggestionHandler}
        >
          {suggestion ? Object.keys(suggestion)[0].substring(tag.length) : ''}
        </Autocomplete>
      </VirtualWrapper>
      <DisplayTags>
        {selectedTags.map((tag) => (
          <Tag key={Object.keys(tag)[0]} bg={Object.values(tag)[0]['bg']}>
            {Object.keys(tag)}
            <IconContainer
              onClick={removeTagHandler.bind(null, Object.keys(tag)[0])}
            >
              <Icon iconType={Icons.Remove} color={(theme as any).white}></Icon>
            </IconContainer>
          </Tag>
        ))}
      </DisplayTags>
    </AutocompleteContainer>
  );
};

export default TagsInput;
