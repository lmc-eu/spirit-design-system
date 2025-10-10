import { isTesting as isTestingEnvironment } from '@alma-oss/spirit-common/constants/environments';
import { SERVERS, getDevelopmentEndpointUri } from '@alma-oss/spirit-common/constants/servers';

export const getServerUrl = (packageName: string) =>
  isTestingEnvironment() ? SERVERS.TESTING[packageName] : getDevelopmentEndpointUri(packageName, { isDocker: true });
