import { ITag } from './tag';

export type IRecord = {
  id: string;
  record: string;
  tags: ITag[];
  sentences: string[];
  synonyms: {}[];
  antonyms: {}[];
  idioms: {}[];
};
