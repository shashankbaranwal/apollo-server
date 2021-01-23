import * as dotenv from 'dotenv';

const envVars = dotenv.config();
const config = {
  PORT: envVars.parsed.PORT,
  nodeEnv: envVars.parsed.NODE_ENV,
};

Object.freeze(
  config,
);

export default config;
