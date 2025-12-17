import { isTesting as isTestingEnvironment } from '@alma-oss/spirit-common/constants/environments';
import { SERVERS, getDevelopmentEndpointUri } from '@alma-oss/spirit-common/constants/servers';

export const getServerUrl = (packageName: string) => {
  if (isTestingEnvironment()) {
    return SERVERS.TESTING[packageName];
  }

  // When running in Docker with host web server, use host.docker.internal
  // Otherwise (running locally), use localhost
  const isDocker = process.env.USE_DOCKER_HOST_WEBSERVER === 'true';

  return getDevelopmentEndpointUri(packageName, { isDocker });
};
