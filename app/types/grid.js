import Ember from 'ember';

export default Ember.Object.extend({

	init:function(){

    var columnsOrder=[];
    var hiddenColumns=[];  
    var frozenColumnCount=4;
    var groupedHeaders={};
    var editableColumns=[];
    var columnCaption={};
    
    
    

      this.getColumnOrder=function(){
      }
      this.getHiddenColumns=function(){
      }
      this.getFrozenColumnCount=function(){
      }
      this.getGroupHeader=function(){
      }
      this.getEditableColumns=function(){
      }
      this.getColumnCaptions=function(){
      }

    
    

    
      
      this.setColumnOrder=function(val){
      }
    
      this.setHiddenColumns=function(val){
      }
    
      this.setFrozenColumnCount=function(val){
      }
   
      this.setGroupHeader=function(val){
      }
  
     this.setEditableColumns=function(val){
     }
  
    this.setColumnCaptions=function(val){
    }

  
    this._super(...arguments);

	}
  

});


