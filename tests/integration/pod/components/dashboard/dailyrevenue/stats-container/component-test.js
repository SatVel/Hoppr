import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dashboard/dailyrevenue/stats-container', 'Integration | Component | dashboard/dailyrevenue/stats container', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{dashboard/dailyrevenue/stats-container collapsed=true}}`);
  assert.ok(this.$().text().trim().match('Collapsed'));

  this.render(hbs`{{dashboard/dailyrevenue/stats-container collapsed=false}}`);
  assert.ok(this.$().text().trim().match('Expanded'));
});
