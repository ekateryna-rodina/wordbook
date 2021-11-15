import { object, string, TypeOf } from 'zod';

const payload = {
  body: object({
    record: string({
      required_error: 'Your input is empty',
    }).min(2, 'Single char is an invalid input'),
    tags: string().array().min(1, 'Add at least one tag'),
    sentences: string().array().optional(),
    synonyms: string().array().optional(),
    antonyms: string().array().optional(),
    idioms: string().array().optional(),
  }),
};

const params = {
  params: object({
    recordId: string({
      required_error: 'RecordId is required',
    }),
  }),
};

export const createRecordSchema = object({
  ...payload,
});

export const updateRecordSchema = object({
  ...payload,
  ...params,
});

export const deleteRecordSchema = object({
  ...params,
});
export const getRecordSchema = object({
  ...params,
});

export type CreateRecordInput = TypeOf<typeof createRecordSchema>;
export type UpdateRecordInput = TypeOf<typeof updateRecordSchema>;
export type DeleteRecordInput = TypeOf<typeof deleteRecordSchema>;
export type GetRecordInput = TypeOf<typeof getRecordSchema>;
