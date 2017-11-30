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
  
  this.render(hbs`{{convert-units 293.15 'kelvin' to='deg F'}}`);
  assert.equal(this.$().text(), '68');
});

test(`works with speed values`, function(assert) {
  this.render(hbs`{{convert-units 32 'kph' to='mph'}}`);
  assert.equal(this.$().text(), '19.88383296106523');

  this.render(hbs`{{convert-units 20 'mph' to='kph'}}`);
  assert.equal(this.$().text(), '32.186953152');
});

test(`works with pressure values`, function(assert) {
  this.render(hbs`{{convert-units 100 'pa' to='psi'}}`);
  assert.equal(this.$().text(), '0.01450376807894691');

  this.render(hbs`{{convert-units 100 'psi' to='pa'}}`);
  assert.equal(this.$().text(), '689476');
  
  this.render(hbs`{{convert-units 100 'psi' to='at'}}`);
  assert.equal(this.$().text(), '6.804599062422897');
  
  this.render(hbs`{{convert-units 100 'at' to='kilobars'}}`);
  assert.equal(this.$().text(), '0.101325');
});

test(`can specify the strict option`, function(assert) {
  this.render(hbs`{{convert-units '19' 'ounces' to='grams' strict=false}}`);
  assert.equal(this.$().text(), '538.640939375');
});
