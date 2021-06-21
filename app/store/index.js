import loading from '@rematch/loading';
import { init } from '@rematch/core';
import * as models from '../models';

const store = init({
  models,
  plugins: [loading()]
});

export default store;
