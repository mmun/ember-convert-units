import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import QUnit from 'qunit';
import { convertUnits } from 'ember-convert-units';

setApplication(Application.create(config.APP));

start();

QUnit.extend(QUnit.assert, {
  isNaN(value) {
    this.notStrictEqual(value, value, 'value is NaN');
  },

  conversionEqual(quantity1, unit1, quantity2, unit2) {
    this.strictEqual(
      convertUnits(quantity1, unit1, { to: unit2 }),
      quantity2,
      `${quantity1} ${unit1} => ${quantity2} ${unit2}`
    );

    this.strictEqual(
      convertUnits(quantity2, unit2, { to: unit1 }),
      quantity1,
      `${quantity1} ${unit1} <= ${quantity2} ${unit2}`
    );
  },

  conversionAlmostEqual(quantity1, unit1, quantity2, unit2, tolerance=1e-10) {
    this.ok(
      Math.abs(convertUnits(quantity1, unit1, { to: unit2 }) - quantity2) < tolerance,
      `${quantity1} ${unit1} ~> ${quantity2} ${unit2}`
    );

    this.ok(
      Math.abs(convertUnits(quantity2, unit2, { to: unit1 }) - quantity1) < tolerance,
      `${quantity1} ${unit1} <~ ${quantity2} ${unit2}`
    );
  }
});
