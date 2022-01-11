import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Attention } from '../Attention';

const TextareaWithHighlightStyled = styled.div`
  margin: 1rem 0 1rem 0;
  & .container {
    position: relative;
    border: ${(props) => `1px solid ${props.theme.colors.primary}21`};
    display: block;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
  }

  & .container,
  & .backdrop,
  & textarea {
    width: 100%
    max-width: 20rem;
    height: 5rem;
  }

  & .container > * {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    height: calc(100% - 1rem);
    width: calc(100% - 1rem);
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 1rem;
    overflow-y: auto;
  }
  }

  & .container > *:focus {
    outline: none;
  }

  & .backdrop {
    z-index: 1;
  }

  & .highlights {
    white-space: pre-wrap;
    word-wrap: break-word;
    color: transparent;
    overflow: auto;
  }
  & textarea {
    background: transparent;
    border: 0;
    border-radius: 0;
    z-index: 2;
    resize: none;
  }

  & mark {
    border-radius: 3px;
    color: transparent;
    background-color: ${(props) => props.theme.colors.yellow};
  }
`;

const Label = styled.label`
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};

  text-transform: capitalize;
`;
type TextareaWithHighlightProps = {
  label: string;
};
const TextareaWithHighlight = ({ label }: TextareaWithHighlightProps) => {
  const [input, setInput] = useState('');
  const [highlights, setHighlights] = useState('');
  const [selected, setSelected] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const applyHighlights = () => {
    const text = input
      .replace(/\n$/g, '\n\n')
      .replace(new RegExp(selected, 'gi'), '<mark>$&</mark>');
    setHighlights(text);
  };

  const selectHandler = (e: any) => {
    e.preventDefault();
    const selected =
      window.getSelection()?.toString().trim() ??
      document.getSelection()?.toString().trim() ??
      '';

    if (!selected || selected.split(' ').length > 1) return;
    setSelected(selected);
  };

  const inputHandler = (e: any) => {
    setInput(e.target.value);
    if (!input.includes(selected)) {
      setHighlights('');
    }
  };
  const scrollToRef = () => {
    const pos = textareaRef.current?.scrollTop;
    backdropRef.current?.scrollTo({ top: pos });
  };

  const scrollHandler = () => {
    scrollToRef();
  };

  useEffect(() => {
    textareaRef.current?.focus();
  });
  useEffect(() => {
    applyHighlights();
    // eslint-disable-next-line
  }, [selected, input]);
  return (
    <TextareaWithHighlightStyled>
      <Label>{label}</Label>
      <div className="container">
        <div className="backdrop" ref={backdropRef}>
          <div
            className="highlights"
            dangerouslySetInnerHTML={{ __html: `${highlights}` }}
          ></div>
        </div>
        <textarea
          ref={textareaRef}
          onScroll={scrollHandler}
          onMouseUp={selectHandler}
          onTouchEnd={selectHandler}
          value={input}
          onChange={inputHandler}
        />
      </div>
      <Attention />
    </TextareaWithHighlightStyled>
  );
};

export default TextareaWithHighlight;
