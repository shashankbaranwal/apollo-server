import * as dotenv from 'dotenv';

const envVar = dotenv.config().parsed;
const config = {
  PORT: envVar.PORT,
  serviceUrl: envVar.serviceUrl,
};
Object.freeze(config);
export default config;
