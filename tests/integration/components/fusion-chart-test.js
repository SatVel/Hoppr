import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import chartoptions from 'hoppr-ui/types/chartoptions';
import chartdata from 'hoppr-ui/types/chartdata';

moduleForComponent('fusion-chart', 'Integration | Component | fusion chart', {
  integration: true
});

test('chart renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  var options=chartoptions.create({

  height:'500',
  width:'500',
  charttype:"doughnut2d",
  renderat:"chartcontainer", 
  paletteColors:"FF5904,0372AB,FF0000"
  });

  var myData=chartdata.create({
     data: [{
            "label": "Group",
            "value": "880000"           
        }, {
            "label": "Transient",
            "value": "730000"
        }, {
            "label": "others",
            "value": "590000"    
        }]
  });

  this.set('varOptions', options);
  this.set('varData', myData);

  this.render(hbs`{{fusion-chart data=varData config=varOptions}}`);
  assert.equal(this.$().text().trim().match('Transient'));
  assert.equal(this.$().text().trim().match('Group'));
  assert.equal(this.$().text().trim().match('others'));
});
