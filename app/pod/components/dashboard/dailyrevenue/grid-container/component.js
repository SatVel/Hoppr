import Ember from 'ember';

export default Ember.Component.extend({
    toggle: 'toggle',
    actions: {
        toggle(what) {
            this.sendAction('toggle', what);
        }
    }
});
