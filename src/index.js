import serverConfig from './configs/server.config';
import envConfig from './configs/env.config';

serverConfig.listen(envConfig.port, () => {
  if (['development', 'test', 'production'].includes(envConfig.env)) {
    console.info("=====================================================================================");
    console.info(`[INFO] Server started on port ${envConfig.host}:${envConfig.port} (${envConfig.env})`);
    console.info("=====================================================================================");
    return true;
  }
  console.error(`[ERROR] APP_ENV is set to ${envConfig.env}, but only production, development and testing are valid.`);
  process.exit(1);
});