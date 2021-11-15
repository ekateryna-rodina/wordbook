import { NextFunction, Request, Response } from 'express';
import {
  createTag,
  deleteTag,
  findAndUpdateTag,
  findTag,
  findTags,
} from '../service/tag.service';
import logger from '../utils/logger';

export async function createTagHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = res.locals.user._id;
    const body = req.body;
    const tag = await createTag({ ...body, user: userId });
    return res.send(tag);
  } catch (error: any) {
    logger.error(error.message);
  }
}
export async function updateTagHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = res.locals.user._id;
    const tagId = req.params.tagId;
    const update = req.body;
    const tag = await findTag({ tagId });
    if (!tag) {
      return res.status(404);
    }
    if (tag.user !== userId) {
      return res.status(403);
    }
    const updatedTag = await findAndUpdateTag({ tagId }, update, {
      new: true,
    }); // return tag after update is applied
    return res.send(updatedTag);
  } catch (error: any) {
    logger.error(error.message);
  }
}
export async function getTagHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = res.locals.user._id;
    const tagId = req.params.tagId;
    const tag = await findTag({ tagId });
    if (!tag) {
      return res.status(404);
    }
    if (tag.user !== userId) {
      return res.status(403);
    }
    return res.send(tag);
  } catch (error: any) {
    logger.error(error.message);
  }
}
export async function getTagsHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = res.locals.user._id;
    const tags = await findTags({ user: userId });
    return res.send(tags);
  } catch (error: any) {
    logger.error(error.message);
  }
}
export async function deleteTagHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = res.locals.user._id;
    const tagId = req.params.recordId;
    const tag = await findTag({ tagId });
    if (!tag) {
      return res.status(404);
    }
    if (tag.user !== userId) {
      return res.status(403);
    }

    await deleteTag({ tagId });
    return res.send(200);
  } catch (error: any) {
    logger.error(error.message);
  }
}
