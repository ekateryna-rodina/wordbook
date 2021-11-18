import { Tag } from './tag';

export type Record = {
  id: string;
  record: string;
  tags: Tag[];
  sentences: string[];
  synonyms: {}[];
  antonyms: {}[];
  idioms: {}[];
};
