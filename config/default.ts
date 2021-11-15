export default {
  port: 3000,
  dbUri: 'mongodb://localhost:27017/wordbook-db',
  wordsHost: 'wordsapiv1.p.rapidapi.com',
  associationsHost: 'twinword-word-associations-v1.p.rapidapi.com',
  collocationsHost: 'linguatools-english-collocations.p.rapidapi.com',
  saltFactor: 15,
  accessTokenExpireIn: '20m',
  refreshTokenExpireIn: '1y',
  rsaSecret: 'top secret',
};
