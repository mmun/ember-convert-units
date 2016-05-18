import Ember from 'ember';
import { convertUnits } from '../index';

export default Ember.Helper.helper((params, hash) => {
  return convertUnits(...params, hash);
});
