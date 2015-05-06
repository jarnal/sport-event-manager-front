var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypeConstants = require('../constants/ActionTypeConstants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";

var SessionStore = assign({}, EventEmitter.prototype, {
    
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
        return localStorage.getItem("token");
    },
    
    setToken: function(token) {
        localStorage.setItem('token', token);
    },
    
    getRefreshToken: function () {
        return localStorage.getItem("refresh_token");
    },
    
    setRefreshToken: function(refreshToken) {
        localStorage.setItem('refresh_token', refreshToken);
    },
    
    loggedIn: function() {
        return !!this.getToken();   
    },
    
    logout: function() {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
    },
    
    dispatcherIndex:AppDispatcher.register(function(payload){
        var action = payload.action;
        switch(action.actionType){
            case ActionTypeConstants.TOKEN_SUCCESSFULL:
                SessionStore.setToken(action.token);
                SessionStore.setRefreshToken(action.refreshToken);
                break;
            case ActionTypeConstants.LOGOUT_ACTION:
                SessionStore.logout();
                break;
        };
        SessionStore.emitChange();
        
        return true;
    })
    
});

module.exports = SessionStore;