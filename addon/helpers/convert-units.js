import { helper } from '@ember/component/helper';
import { convertUnits } from '../index';

export default helper((params, hash) => {
  return convertUnits(...params, hash);
});
