import { isTesting as isTestingEnvironment } from '@lmc-eu/spirit-common/constants/environments';
import { SERVERS, getDevelopmentEndpointUri } from '@lmc-eu/spirit-common/constants/servers';

export const getServerUrl = (packageName: string) =>
  isTestingEnvironment()
    ? SERVERS.TESTING[packageName]
    : getDevelopmentEndpointUri(packageName, { isDocker: packageName !== 'web-twig' });
