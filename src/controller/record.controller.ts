import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import {
  CreateRecordInput,
  DeleteRecordInput,
  GetRecordInput,
  UpdateRecordInput,
} from '../schema/record.schema';
import {
  createRecord,
  deleteRecord,
  findAndUpdateRecord,
  findRecord,
  findRecords,
} from '../service/record.service';
import { createTags } from '../service/tag.service';
import logger from '../utils/logger';

export async function createRecordHandler(
  req: Request<{}, {}, CreateRecordInput['body']>,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = res.locals.user._id;
    const body = req.body;
    // create new tags if needed
    const newTagsToCreate = body.tags.filter((t) => !isValidObjectId(t));
    const tagDocuments = newTagsToCreate.map((name) => ({
      name,
      user: userId,
      records: [],
    }));
    let newTags: any[] = [];
    if (newTagsToCreate.length) {
      newTags = await createTags(tagDocuments);
    }
    const tags: string[] = body.tags
      .filter((tag) => isValidObjectId(tag))
      .concat(newTags.map((tag) => tag._id));
    const record = await createRecord({ ...body, tags, user: userId });
    return res.send(record);
  } catch (error: any) {
    logger.error(error.message);
  }
}
export async function updateRecordHandler(
  req: Request<UpdateRecordInput['params']>,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = res.locals.user._id;
    const recordId = req.params.recordId;
    const update = req.body;
    const record = await findRecord({ recordId });
    if (!record) {
      return res.status(404);
    }
    if (String(record.user) !== userId) {
      return res.status(403);
    }

    const updatedRecord = await findAndUpdateRecord({ recordId }, update, {
      new: true,
    }); // return record after update is applied
    return res.send(updatedRecord);
  } catch (error: any) {
    logger.error(error.message);
  }
}
export async function getRecordHandler(
  req: Request<GetRecordInput['params']>,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = res.locals.user._id;
    const recordId = req.params.recordId;
    const record = await findRecord({ recordId });
    if (!record) {
      return res.sendStatus(404);
    }
    if (String(record.user) !== userId) {
      return res.status(403);
    }
    return res.send(record);
  } catch (error: any) {
    logger.error(error.message);
  }
}
export async function getRecordsHandler(
  req: Request<GetRecordInput['params']>,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = res.locals.user._id;
    const records = await findRecords({ user: userId });
    return res.send(records);
  } catch (error: any) {
    logger.error(error.message);
  }
}
export async function deleteRecordHandler(
  req: Request<DeleteRecordInput['params']>,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = res.locals.user._id;
    const recordId = req.params.recordId;
    const record = await findRecord({ recordId });
    if (!record) {
      return res.status(404);
    }
    if (String(record.user) !== userId) {
      return res.status(403);
    }

    await deleteRecord({ recordId });
    return res.send(200);
  } catch (error: any) {
    logger.error(error.message);
  }
}
