var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {
    
    handleViewAction:function(action){
        console.log( "handleViewAction :: "+action.actionType );
        this.dispatch({
            source:'VIEW_ACTION',
            action:action
        });
    },
    
    handleServerAction:function(action){
        console.log( "handleServerAction :: "+action.actionType );
        this.dispatch({
            source:'SERVER_ACTION',
            action:action
        });
    }
    
});

module.exports = AppDispatcher;