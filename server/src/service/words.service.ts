import axios from 'axios';
import config from 'config';
import {
  associationsEndpoint,
  collocationsEndpoint,
  dictionaryEndpoint,
  wordsEndpoint,
} from '../utils/apiHelper';
import logger from '../utils/logger';
// I priority
export async function fetchWordInfo({ word }: { word: string }) {
  if (!word) {
    throw new Error('Input is not provided');
  }
  try {
    const endpoint = wordsEndpoint(word);
    const secretKey = process.env.RAPID_API_KEY ?? '';
    const headers = {
      'x-rapidapi-host': config.get<string>('wordsHost'),
      'x-rapidapi-key': secretKey,
    };

    const { data } = await axios.get<any>(endpoint, {
      headers,
    });
    return data ?? null;
  } catch (error: any) {
    logger.error(error.message);
    return null;
  }
}
// I priority
export async function fetchWordDictionary({ word }: { word: string }) {
  if (!word) {
    throw new Error('Input is not provided');
  }
  try {
    const endpoint = dictionaryEndpoint(word);
    const { data } = await axios.get<any>(endpoint);
    return data ?? null;
  } catch (error: any) {
    logger.error(error.message);
    return null;
  }
}
// III priority
export async function fetchWordAsossiations({ word }: { word: string }) {
  if (!word) {
    throw new Error('Input is not provided');
  }
  try {
    const endpoint = associationsEndpoint();
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Host': config.get<string>('associationsHost'),
      'x-rapidapi-key': process.env.RAPID_API_KEY as string,
    };
    const body = { entry: word };
    const { data } = await axios.post<any>(endpoint, body, { headers });
    return data ?? null;
  } catch (error: any) {
    logger.error(error.message);
    return null;
  }
}
// II priority
export async function fetchWordCollocations({ word }: { word: string }) {
  if (!word) {
    throw new Error('Input is not provided');
  }
  try {
    const endpoint = collocationsEndpoint();
    const headers = {
      'x-rapidapi-host': config.get<string>('collocationsHost'),
      'x-rapidapi-key': process.env.RAPID_API_KEY as string,
    };
    const params = { lang: 'en', query: word, max_results: '25' };
    const { data } = await axios.post<any>(endpoint, { headers, params });
    return data ?? null;
  } catch (error: any) {
    logger.error(error.message);
    return null;
  }
}
