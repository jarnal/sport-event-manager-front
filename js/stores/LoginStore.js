var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypeConstants = require('../constants/ActionTypeConstants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";

var LoginStore = assign({}, EventEmitter.prototype, {
    
    emitChange:function(){
        this.emit(CHANGE_EVENT);    
    },
    
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT, callback);  
    },
    
    removeChangeListener:function(callback){
        this.removeListener(CHANGE_EVENT, callback);   
    },
    
    getToken: function () {
        return localStorage.getItem("us_token");
    },
    
    setToken: function() {
        
    },
    
    loggedIn: function(){
        return !!this.getToken();   
    }
    
    /*dispatcherIndex:AppDispatcher.register(function(payload){
        var action = payload.action;
        switch(action.actionType){
            case ActionTypeConstants.LOGIN_SUCCESSFULL:
                console.log(localStorage.getItem("us_id"));
                break;
        };
        LoginStore.emitChange();
        
        return true;
    })*/
    
});

module.exports = LoginStore;