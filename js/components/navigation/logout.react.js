var React = require('react');
var LoginActions = require('../../actions/LoginActions');

var LoginForm = React.createClass({

    onLogout:function(e){
        console.log("onLogout");
        LoginActions.logout();
    },

    /**
    * @return {object}
    */
    render: function() {
        return (
            <button className="btn btn-default" onClick={this.onLogout}>Logout</button>
        );
    },

});

module.exports = LoginForm;