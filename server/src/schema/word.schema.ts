import { object, string, TypeOf } from 'zod';

const params = {
  params: object({
    word: string({
      required_error: 'Word is required',
    }).min(1, 'Word must be at least 1 character'),
  }),
};

export const getWordInfoSchema = object({
  ...params,
});

export type GetWordInfoInput = TypeOf<typeof getWordInfoSchema>;
