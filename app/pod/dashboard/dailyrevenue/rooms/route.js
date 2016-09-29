import Ember from 'ember';


export default Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        controller.set('prefs', {
            toggle: {stats: false, grid: true} 
        });
    },
    actions: {
        toggle(what) {
            this.controller.set(
                'prefs.toggle.' + what, 
                !this.controller.get('prefs.toggle.' + what));
        }
    }

});
