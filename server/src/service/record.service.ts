import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from 'mongoose';
import Record, { RecordDocument } from '../models/record.model';

export async function createRecord(
  input: DocumentDefinition<Omit<RecordDocument, 'createdAt' | 'updatedAt'>>
) {
  return Record.create(input);
}
export async function findRecord(
  query: FilterQuery<RecordDocument>,
  options: QueryOptions = { lean: true }
) {
  return Record.findOne(query, {}, options);
}
export async function findRecords(
  query: FilterQuery<RecordDocument>,
  options: QueryOptions = { lean: true }
) {
  return Record.find(query, {}, options);
}
export async function findAndUpdateRecord(
  query: FilterQuery<RecordDocument>,
  update: UpdateQuery<RecordDocument>,
  options: QueryOptions = { lean: true }
) {
  return Record.findOneAndUpdate(query, update, options);
}
export async function deleteRecord(query: FilterQuery<RecordDocument>) {
  return Record.deleteOne(query);
}
