import { Tag } from './tag';

export type Record = {
  id: string;
  record: string;
  tags: Tag[] | string[];
  sentences: string[];
  synonyms: {}[];
  antonyms: {}[];
  idioms: {}[];
};
