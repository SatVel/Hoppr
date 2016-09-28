import Ember from 'ember';
export default Ember.Component.extend({

init(){

this._super(...arguments);
let height=this.attrs.height;
let width=this.attrs.width;
let showColumnsDropdown=this.attrs.showColumnsDropdown; 
}

});
