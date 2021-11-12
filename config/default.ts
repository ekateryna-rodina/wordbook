export default {
  port: 3000,
  dbUri: 'mongodb://localhost:27017/wordbook-db',
  saltFactor: 15,
  accessTokenExpireIn: '20m',
  refreshTokenExpireIn: '1y',
};
