import { Request, Response } from 'express';
import { fetchWordInfo } from '../service/words.service';
import logger from '../utils/logger';

export async function getWordInfoHandler(req: Request, res: Response) {
  try {
    const { word } = req.params;
    const result = await fetchWordInfo({ word });
    return res.send(result);
  } catch (error: any) {
    logger.error(error);
    return res.sendStatus(500);
  }
}
