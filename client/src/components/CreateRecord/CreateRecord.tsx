import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useCreateRecordMutation } from '../../services/api';
import { TagsInput } from '../TagsInput';

const Container = styled.div<{ show: boolean }>`
  height: 100vh;
  position: absolute;
  inset: 0;
  transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  background: ${(props) => props.theme.white};
  padding: 2rem 1rem;
`;
const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0.5rem 0 1rem 0;
  padding: 0;
`;
const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: -0.5rem;
  background: ${(props) => props.theme.white};
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
  border: ${(props) => `1px solid ${props.theme.primary}`};
`;
const DescriptionInput = styled.textarea`
  ${TextAreaStyle};
  border: ${(props) => `1px solid ${props.theme.neutral}`};
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
          <InputContainer>
            <Label htmlFor="record">Word or phrase</Label>
            <RecordInput
              required
              id="record"
              value={record}
              onChange={(e) => setRecord(e.target.value)}
              data-testid="wordInputTestId"
            ></RecordInput>
          </InputContainer>
          <InputContainer>
            <Label htmlFor="description">Description</Label>
            <DescriptionInput
              required
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></DescriptionInput>
          </InputContainer>
          <InputContainer>
            <TagsInput />
          </InputContainer>
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
