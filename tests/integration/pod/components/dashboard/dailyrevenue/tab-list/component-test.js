import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dashboard/dailyrevenue/tab-list', 'Integration | Component | dashboard/dailyrevenue/tab list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dashboard/dailyrevenue/tab-list}}`);
  assert.ok(this.$().text().trim().match('Summary View'));
  assert.ok(this.$().text().trim().match('Rooms Data'));
  assert.ok(this.$().text().trim().match('F&B Data'));
  assert.ok(this.$().text().trim().match('Other Income'));

});
