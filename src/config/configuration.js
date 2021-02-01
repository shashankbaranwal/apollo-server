import * as dotenv from 'dotenv';

<<<<<<< HEAD
const envVar = dotenv.config().parsed;
=======
const envVars = dotenv.config();
>>>>>>> c6165c8bcd0077335598db8ba1d0fd9ea0500f87

const config = {
  PORT: envVar.PORT,
  serviceUrl: envVar.serviceUrl,
};
<<<<<<< HEAD
Object.freeze(config);
=======

Object.freeze(
  config,
);
>>>>>>> c6165c8bcd0077335598db8ba1d0fd9ea0500f87
export default config;
