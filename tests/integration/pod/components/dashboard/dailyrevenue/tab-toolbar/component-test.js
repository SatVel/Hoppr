import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dashboard/dailyrevenue/tab-toolbar', 'Integration | Component | dashboard/dailyrevenue/tab toolbar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dashboard/dailyrevenue/tab-toolbar}}`);

  assert.ok(this.$().text().trim().match('Toolbar'));

});
