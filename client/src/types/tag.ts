import { Record } from './record';

export type Tag = {
  id: string;
  name: string;
  user: string;
  records: Record[];
};
