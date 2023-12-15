export const ENVIRONMENTS = {
  DEVELOPMENT: 'development',
  TESTING: 'testing',
  PRODUCTION: 'production',
};

export const isTesting = () => process.env.NODE_ENV === ENVIRONMENTS.TESTING;
