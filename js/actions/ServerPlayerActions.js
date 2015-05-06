var ActionTypeConstants = require('../constants/ActionTypeConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var router = require('../router');

var ServerPlayerActions = {
    
    login_successfull:function(id_user){
        AppDispatcher.handleServerAction({
            actionType: ActionTypeConstants.LOGIN_SUCCESSFULL,
            id_user:id_user
        });
        //router.transitionTo('dashboard');
    },
    
    login_error:function(error){
        AppDispatcher.handleServerAction({
            actionType: ActionTypeConstants.LOGIN_ERROR,
            error:error
        });
    },
    
    token_successfull:function(token, refreshToken){
        AppDispatcher.handleServerAction({
            actionType: ActionTypeConstants.TOKEN_SUCCESSFULL,
            token: token,
            refreshToken, refreshToken
        });
    },
    
    token_error:function(error){
        AppDispatcher.handleServerAction({
            actionType: ActionTypeConstants.TOKEN_ERROR,
            error:error
        });
    }
    
}

module.exports = ServerPlayerActions;