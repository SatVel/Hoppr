import Ember from 'ember';
import layout from '../templates/components/hoppr-grid';

const keys = Object.keys;

const {
  get,
  set,
  getWithDefault,
  setProperties,
  getProperties,
  computed,
  observer,
  isNone,
  A,
  on,
  defineProperty,
  compare,
  typeOf,
  run,
  Component,
  assert,
  String: S,
  Object: O,
  $: jQ
} = Ember;


export default Component.extend({
layout,
data:A([]),
columns:A([]),

init(){

this._super(...arguments);
let height=this.attrs;
let width=this.attrs;
let gridOptions=this.attrs;
},

didInsertElement(){

//console.log(gridOptions.getColumns());

}


});
