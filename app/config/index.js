import debugConfig from './debug.config';
import releaseConfig from './release.config';

let config = releaseConfig;

if (__DEV__) {
  config = debugConfig;
}

export default config;
