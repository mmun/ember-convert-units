import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent(`convert-units`, `Integration | Helper | convert-units`, {
  integration: true
});

test(`works with static values`, function(assert) {
  this.render(hbs`{{convert-units 3.2 'km' to='m'}}`);
  assert.equal(this.$().text(), '3200');
});

test(`works with dynamic values`, function(assert) {
  this.setProperties({ quantity: 2, unit: 'lb' });
  this.render(hbs`{{convert-units quantity unit to='g'}}`);
  assert.equal(this.$().text(), '907.18474');

  this.setProperties({ quantity: 19, unit: 'oz' });
  assert.equal(this.$().text(), '538.640939375');
});

test(`works with temperatures values`, function(assert) {
  this.render(hbs`{{convert-units 32 'deg F' to='deg C'}}`);
  assert.equal(this.$().text(), '0');

  this.render(hbs`{{convert-units 20 'deg C' to='deg F'}}`);
  assert.equal(this.$().text(), '68');
});

test(`works with temperatures values`, function(assert) {
  this.render(hbs`{{convert-units 32 'deg F' to='deg C'}}`);
  assert.equal(this.$().text(), '0');

  this.render(hbs`{{convert-units 20 'deg C' to='deg F'}}`);
  assert.equal(this.$().text(), '68');
});

test(`can specify the strict option`, function(assert) {
  this.render(hbs`{{convert-units '19' 'ounces' to='grams' strict=false}}`);
  assert.equal(this.$().text(), '538.640939375');
});
