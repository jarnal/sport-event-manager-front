var ServerPlayerActions = require('../actions/ServerPlayerActions');
var ServerConstants = require('../constants/ServerConstants');

var PlayerAPIUtils = {
    
    /**
     *
     */
    login: function(login, password) {
        var ajaxCall = $.ajax({
            type: "POST",
            url: ServerConstants.SERVER_BASE_URL + "/security/",
            dataType: "json",
            data: {
                user_l: login,
                user_p: password
            },
            success:$.proxy(function(pResponse){
                localStorage.setItem('us_id', pResponse.id);
                localStorage.setItem('us_ak', pResponse.api_key);
                
                this.getToken(true);
            }, this),
            error:function(error){
                PlayerActions.login_error(error);
            }
        });
    },
        
    /**
     *
     */
    getToken:function(afterLogin=false)
    {
        $.ajax({
            type: "GET",
            url: ServerConstants.SERVER_OAUTH_URL,
            dataType: "json",
            data: {
                client_id: "2_1v4wtyml54v4k4kswk0csocks8g40wc0gkwgggcgccck8oo08o",
                client_secret:"2a7lfimd34ysoc8ko88o48o80kkwswkswggskw880wgkgwk8w0",
                grant_type: "http://www.teammanager.com/web/app_dev.php/grants/api_key",
                api_key: localStorage.getItem('us_ak')
            },
            success:function( pResponse ){
                localStorage.setItem('tok', pResponse.access_token);
                localStorage.setItem('ref_tok', pResponse.refresh_token); 
                
                if(afterLogin)
                    ServerPlayerActions.login_successfull();
                ServerPlayerActions.token_successfull();
            },
            error:function(error){
                PlayerActions.token_error(error);
            }
        });
    },
    
    /**
     *
     */
    refreshToken:function()
    {
        $.ajax({
            type: "GET",
            url: ServerConstants.SERVER_OAUTH_URL,
            dataType: "json",
            data: {
                client_id: "2_1v4wtyml54v4k4kswk0csocks8g40wc0gkwgggcgccck8oo08o",
                client_secret:"2a7lfimd34ysoc8ko88o48o80kkwswkswggskw880wgkgwk8w0",
                grant_type: "refresh_token",
                refresh_token: localStorage.getItem('ref_tok')
            },
            success:function( pResponse ){
                localStorage.setItem('tok', pResponse.access_token);
                localStorage.setItem('ref_tok', pResponse.refresh_token);
                
                ServerPlayerActions.token_successfull();
            },
            error:function(error){
                ServerPlayerActions.token_error(error);
            }
        });
    }

};



module.exports = PlayerAPIUtils;