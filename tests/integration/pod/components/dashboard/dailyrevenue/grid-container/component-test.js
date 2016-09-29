import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dashboard/dailyrevenue/grid-container', 'Integration | Component | dashboard/dailyrevenue/grid container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dashboard/dailyrevenue/grid-container}}`);
  assert.ok(this.$().text().trim().match('GRID!!'));
});
