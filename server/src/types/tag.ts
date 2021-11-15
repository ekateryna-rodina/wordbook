import { IRecord } from './record';

export type ITag = {
  id: string;
  name: string;
  user: string;
  records: IRecord[];
};
