import Ember from 'ember';

export default Ember.Object.extend({

	init:function(){

    var column=[];
    

    this.getColumns=function(){
      return column;
    };

    this.setColumns=function(val){
      column.push(val);
    };

    this._super(...arguments);

	}
  

});


