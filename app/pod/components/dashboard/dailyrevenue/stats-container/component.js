import Ember from 'ember';
import chartoptions from 'hoppr-ui/types/chartoptions';
import chartdata from 'hoppr-ui/types/chartdata';

export default Ember.Component.extend({
    init() {
        this._super(...arguments);
    },

    toggle: 'toggle',

    config: chartoptions.create({
        height:'500',
        width:'500',
        charttype:"doughnut2d",
        renderat:"chartcontainer", 
        paletteColors:"FF5904,0372AB,FF0000"
    }),

    myData: chartdata.create({
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
    }),

    actions: {
        toggle(what) {
            console.log(what);
            this.sendAction('toggle', what);
        }
    }
});
