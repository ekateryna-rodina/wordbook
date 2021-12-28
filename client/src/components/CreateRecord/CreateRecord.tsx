import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useCreateRecordMutation } from '../../services/api';
import { RecordInputTypes } from '../../utils/enums';
import { Input } from '../Input';
import { SetSelector } from '../SetSelector';
import { TagsInput } from '../TagsInput';
import { Textarea } from '../Textarea';

const Container = styled.div<{ show: boolean }>`
  height: 100vh;
  position: absolute;
  inset: 0;
  transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  background: ${(props) => props.theme.colors.white};
  padding: 2rem 1rem;
`;
const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const TagsInputContainer = styled.div`
  position: relative;
  width: 100%;
`;
const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: -0.5rem;
  background: ${(props) => props.theme.colors.white};
  margin-top: 0.5rem;
`;
const TextAreaStyle = css`
  width: 100%;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.8rem;
  box-sizing: border-box;
`;
const RecordInput = styled.textarea`
  ${TextAreaStyle};
  border: ${(props) => `1px solid ${props.theme.colors.primary}`};
`;
const HintInput = styled.textarea`
  ${TextAreaStyle};
  border: ${(props) => `1px solid ${props.theme.colors.neutral}`};
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
`;
const CreateRecord = ({ show }: { show: boolean }) => {
  const [record, setRecord] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [saveRecord, { isLoading, data, error }] = useCreateRecordMutation();

  const selectTagsHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setTags([...tags, ...selected]);
  };

  const createRecordHandler = () => {
    if (!record) return;
    saveRecord({ record, tags });
  };

  return (
    <Container show={show}>
      <InnerContainer>
        <Form onSubmit={createRecordHandler}>
          <Textarea name={RecordInputTypes.Word} />
          <Textarea name={RecordInputTypes.Hint} />
          <Textarea name={RecordInputTypes.Example} />
          <SetSelector />
          <TagsInputContainer>
            <TagsInput />
          </TagsInputContainer>
          <Input name={RecordInputTypes.Transcription} />
          <input
            style={{ position: 'absolute', bottom: 0, right: 0 }}
            type="submit"
            value="Add to my vocabulary"
          />
        </Form>
      </InnerContainer>
    </Container>
  );
};

export default CreateRecord;
