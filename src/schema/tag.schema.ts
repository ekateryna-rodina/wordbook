import { object, string, TypeOf } from 'zod';

const payload = {
  body: object({
    name: string({
      required_error: 'Your tag is empty',
    }).min(3, 'Minimum tags length must be 3'),
  }),
};

const params = {
  params: object({
    tagId: string({
      required_error: 'TagId is required',
    }),
  }),
};

export const createTagSchema = object({
  ...payload,
});

export const updateTagSchema = object({
  ...payload,
  ...params,
});

export const deleteTagSchema = object({
  ...params,
});
export const getTagSchema = object({
  ...params,
});

export type CreateTagInput = TypeOf<typeof createTagSchema>;
export type UpdateTagInput = TypeOf<typeof updateTagSchema>;
export type DeleteTagInput = TypeOf<typeof deleteTagSchema>;
export type GetTagInput = TypeOf<typeof getTagSchema>;
