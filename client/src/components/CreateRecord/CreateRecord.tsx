import React, { useState } from 'react';
import { useCreateRecordMutation } from '../../services/api';

const CreateRecord = () => {
  const [record, setRecord] = useState<string>('');
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
    <form onSubmit={createRecordHandler}>
      <textarea
        required
        value={record}
        onChange={(e) => setRecord(e.target.value)}
      ></textarea>
      {/* TODO: change values to ids */}
      <select name="tags" multiple onChange={selectTagsHandler}>
        <option value="history">history</option>
        <option value="friends">friends</option>
        <option value="witty">witty</option>
        <option value="books">books</option>
      </select>
      <input type="submit" />
    </form>
  );
};

export default CreateRecord;
