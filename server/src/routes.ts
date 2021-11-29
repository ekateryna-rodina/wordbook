import { Express } from 'express';
import {
  createRecordHandler,
  deleteRecordHandler,
  getRecordHandler,
  getRecordsHandler,
  updateRecordHandler,
} from './controller/record.controller';
import {
  createUserSessionHandler,
  deleteUserSessionHandler,
  getUserSessionsHandler,
} from './controller/session.controller';
import {
  createTagHandler,
  deleteTagHandler,
  getTagHandler,
  getTagsHandler,
  updateTagHandler,
} from './controller/tag.controller';
import {
  createUserHandler,
  getCurrentUserHandler,
} from './controller/user.controller';
import { getWordInfoHandler } from './controller/words.controller';
import { requireUser } from './middleware/requireUser';
import validateResource from './middleware/validateResource';
import {
  createRecordSchema,
  deleteRecordSchema,
  getRecordSchema,
  updateRecordSchema,
} from './schema/record.schema';
import { createSessionSchema } from './schema/session.schema';
import {
  createTagSchema,
  deleteTagSchema,
  getTagSchema,
  updateTagSchema,
} from './schema/tag.schema';
import { createUserSchema } from './schema/user.schema';
import { getWordInfoSchema } from './schema/word.schema';
function routes(app: Express) {
  // users
  app.post('/api/users', validateResource(createUserSchema), createUserHandler);
  app.get('/api/users/currentUser', requireUser, getCurrentUserHandler);
  // sessions
  app.post(
    '/api/sessions',
    validateResource(createSessionSchema),
    createUserSessionHandler
  );
  app.get('/api/sessions', requireUser, getUserSessionsHandler);
  app.delete('/api/sessions', requireUser, deleteUserSessionHandler);
  // tags
  app.post(
    '/api/tags',
    [requireUser, validateResource(createTagSchema)],
    createTagHandler
  );
  app.get(
    '/api/tags/:tagId',
    [requireUser, validateResource(getTagSchema)],
    getTagHandler
  );
  app.get('/api/tags', requireUser, getTagsHandler);
  app.put(
    '/api/tags/:tagId',
    [requireUser, validateResource(updateTagSchema)],
    updateTagHandler
  );
  app.delete(
    '/api/tags/:tagId',
    [requireUser, validateResource(deleteTagSchema)],
    deleteTagHandler
  );
  // user's records
  app.post(
    '/api/records',
    [requireUser, validateResource(createRecordSchema)],
    createRecordHandler
  );
  app.get(
    '/api/records/:recordId',
    [requireUser, validateResource(getRecordSchema)],
    getRecordHandler
  );
  app.get('/api/records/', requireUser, getRecordsHandler);
  app.put(
    '/api/records/:recordId',
    [requireUser, validateResource(updateRecordSchema)],
    updateRecordHandler
  );
  app.delete(
    '/api/records/:recordId',
    [requireUser, validateResource(deleteRecordSchema)],
    deleteRecordHandler
  );
  // words api
  app.get(
    '/api/words/:word',
    [requireUser, validateResource(getWordInfoSchema)],
    getWordInfoHandler
  );
}
export default routes;
