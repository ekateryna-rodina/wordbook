const wordsEndpoint = (key: string) => {
  return `https://wordsapiv1.p.rapidapi.com/words/${key}`;
};
const dictionaryEndpoint = (key: string) => {
  return `https://api.dictionaryapi.dev/api/v2/entries/en/${key}`;
};
// max 10 quota
const phraseEndpoint = (key: string, page: number) => {
  return `https://fraze.it/api/phrase/${key}/en/${page}/yes/${process.env.PHRASE_API_KEY}`;
};
// max 10 quota
const quotesEndpoint = (key: string, page: number) => {
  return `https://fraze.it/api/famous/${key}/en/${page}/yes/${process.env.PHRASE_API_KEY}`;
};
const associationsEndpoint = () => {
  return 'https://twinword-word-associations-v1.p.rapidapi.com/associations/';
};
const collocationsEndpoint = () => {
  return 'https://linguatools-english-collocations.p.rapidapi.com/bolls/';
};
export {
  wordsEndpoint,
  dictionaryEndpoint,
  associationsEndpoint,
  collocationsEndpoint,
};
