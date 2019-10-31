import { convertUnits } from 'ember-convert-units';
import { module, test } from 'qunit';

module(`convertUnits`);

test(`converts scaled units correctly`, function(assert) {
  assert.conversionEqual(3, 'm', 300, 'cm');
  assert.conversionEqual(10.3632, 'km', 10363.2, 'm');

  assert.conversionEqual(24, 'in', 2, 'feet');
  assert.conversionEqual(3, 'ft', 1, 'yd');
  assert.conversionEqual(15840, 'ft', 3, 'mi');
  assert.conversionEqual(17600, 'yd', 10, 'mi');

  assert.conversionEqual(2000000, 'sq mm', 2, 'sq m');
  assert.conversionEqual(2000, 'sq cm', 0.2, 'sq m');
  assert.conversionEqual(1, 'sq m', 0.0001, 'ha');
  assert.conversionEqual(123, 'ha', 1.23, 'sq km');

  assert.conversionAlmostEqual(5, 'sq m', 7750.015500031001, 'sq in');
  assert.conversionEqual(1584, 'sq in', 11, 'sq ft');
  assert.conversionEqual(21780, 'sq ft', 0.5, 'acre');
  assert.conversionEqual(1920, 'acre', 3, 'sq mi');

  assert.conversionEqual(2, 'lb', 32, 'oz');
  assert.conversionEqual(2, 'lb', 0.90718474, 'kg');
  assert.conversionEqual(1, 'ton', 2000, 'lb');
  assert.conversionEqual(1, 'ton', 32000, 'oz');

  assert.conversionEqual(150000, 'ms', 2.5, 'minutes');
  assert.conversionEqual(1, 'l', 1000, 'mL');
  assert.conversionAlmostEqual(1, 'l', 0.26417231643, 'gal');
  assert.conversionAlmostEqual(1, 'l', 1.05668926572, 'qt');
  assert.conversionAlmostEqual(1, 'l', 2.11337853145, 'pt');
  assert.conversionAlmostEqual(1, 'l', 33.8140565032, 'fl oz');
  assert.conversionEqual(4, 'qt', 1, 'gal');
  assert.conversionEqual(8, 'pt', 1, 'gal');
  assert.conversionEqual(128, 'fl oz', 1, 'gal');
  assert.conversionEqual(1, 'acre*in', 27154, 'gal');
  assert.conversionEqual(1, 'acre*ft', 325851, 'gal');

  // Floating point rounding errors
  assert.conversionAlmostEqual(1.3, 'ounces', 36.8543800625, 'g');
  assert.conversionAlmostEqual(1.3, 'mi', 209214.72, 'cm');
});

test(`converts scaled and offset units correctly`, function(assert) {
  assert.conversionEqual(32, 'deg F', 0, 'deg C');
  assert.conversionEqual(0, 'deg C', 32, 'deg F');
  assert.conversionEqual(68, 'deg F', 20, 'deg C');
  assert.conversionEqual(20, 'deg C', 68, 'deg F');
});

test(`invalid source unit throws a friendly error`, function(assert) {
  assert.throws(function() {
    convertUnits(42, 'cats', { to: 'pounds' });
  }, /Unknown source unit cats/);
});

test(`invalid target unit throws a friendly error`, function(assert) {
  assert.throws(function() {
    convertUnits(42, 'pounds', { to: 'cats' });
  }, /Unknown target unit cats/);
});

test(`incompatible units throw a friendly error`, function(assert) {
  assert.throws(function() {
    convertUnits(42, 'pounds', { to: 'inches' });
  }, /Cannot convert between pounds and inches/);
});

test(`non-number quantity with strict=true`, function(assert) {
  assert.throws(function() {
    convertUnits('19', 'ounces', { to: 'grams', strict: true });
  }, /Cannot convert quantity of type string in strict mode/);
});

test(`non-number quantity with strict=false coerces the quantity`, function(assert) {
  assert.strictEqual(convertUnits('19', 'ounces', { to: 'grams', strict: false }), 538.640939375);
});

test(`non-number quantity without strict option returns NaN`, function(assert) {
  assert.isNaN(convertUnits('19', 'ounces', { to: 'grams' }));
});
