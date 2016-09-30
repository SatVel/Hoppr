import Ember from 'ember';
import grid from 'hoppr-ui/types/grid';

export default Ember.Component.extend({
    toggle: 'toggle',

    gridOptions:null,   	

    setupGridOptions: Ember.on('init',function(){
     
    var myGrid=grid.create({
    
     columns:[

    {
      name:"units",
      caption:"#",
      isHidden:false,
      isEditable:true,
      isDraggable:false
    },

    {
      name:"avg",
      caption:"Avg",
      isHidden:false,
      isEditable:true,
      isDraggable:false

    },

    {
      name:"revenue",
      caption:"Revenue",
      isHidden:false,
      isEditable:true,
      isDraggable:false

    }	

    ]

    });

/*
    myGrid.setColumns([

    {
      name:"units",
      caption:"#",
      isHidden:false,
      isEditable:true,
      isDraggable:false
    },

    {
      name:"avg",
      caption:"Avg",
      isHidden:false,
      isEditable:true,
      isDraggable:false

    },

    {
      name:"revenue",
      caption:"Revenue",
      isHidden:false,
      isEditable:true,
      isDraggable:false

    }	

    ]); 
*/
    this.set("gridOptions",myGrid);
    console.log(this.get("gridOptions"));

    }),
    
    actions: {
        toggle(what) {
            this.sendAction('toggle', what);
        }
    }
});
