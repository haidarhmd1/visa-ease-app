/* eslint-disable unicorn/prevent-abbreviations */
import ConfigDev from './config.dev';
import ConfigProd from './config.prod';

export const isProd = process.env.NODE_ENV === 'production';

const config = isProd ? ConfigProd : ConfigDev;

export default config;
