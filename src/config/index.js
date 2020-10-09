import merge from 'lodash.merge';

import devConfig from './dev';
import testingConfig from './testing';

const env = process.env.NODE_ENV ?? 'development';

const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: 3001,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: '100d',
  },
};

let envConfig = {};

switch (env) {
  case 'dev':
  case 'development':
    envConfig = devConfig;
    break;
  case 'test':
  case 'testing':
    envConfig = testingConfig;
    break;
  default:
    envConfig = devConfig;
}

export default merge(baseConfig, envConfig);
