var ActionTypeConstants = require('../constants/ActionTypeConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var PlayerAPIUtils = require('../utils/PlayerAPIUtils');

var Actions = {
    
    login:function(login, password){
        AppDispatcher.handleViewAction({
            actionType: ActionTypeConstants.LOGIN_ACTION
        });
        
        PlayerAPIUtils.login(login, password);
    },
    
    logout:function(){
        AppDispatcher.handleViewAction({
            actionType: ActionTypeConstants.LOGOUT_ACTION 
        });
    }
    
}

module.exports = Actions;