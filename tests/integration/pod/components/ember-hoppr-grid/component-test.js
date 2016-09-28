import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-hoppr-grid', 'Integration | Component | ember hoppr grid', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-hoppr-grid}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-hoppr-grid}}
      template block text
    {{/ember-hoppr-grid}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
