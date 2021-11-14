import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from 'mongoose';
import Tag, { TagDocument } from '../models/tag.model';

export async function createTag(
  input: DocumentDefinition<Omit<TagDocument, 'createdAt' | 'updatedAt'>>
) {
  return Tag.create(input);
}
export async function createTags(
  input: Array<DocumentDefinition<Omit<TagDocument, 'createdAt' | 'updatedAt'>>>
) {
  return Tag.insertMany(input);
}
export async function findTag(
  query: FilterQuery<TagDocument>,
  options: QueryOptions = { lean: true }
) {
  return Tag.findOne(query, {}, options);
}
export async function findTags(
  query: FilterQuery<TagDocument>,
  options: QueryOptions = { lean: true }
) {
  return Tag.find(query, {}, options);
}
export async function findAndUpdateTag(
  query: FilterQuery<TagDocument>,
  update: UpdateQuery<TagDocument>,
  options: QueryOptions = { lean: true }
) {
  return Tag.findOneAndUpdate(query, update, options);
}
export async function deleteTag(query: FilterQuery<TagDocument>) {
  return Tag.deleteOne(query);
}
