var React = require('react');
var ReactForm = require('../components/login/LoginForm.react');
var SessionStore = require('../stores/SessionStore');
var router = require('../router');

var Login = React.createClass({

    getInitialState: function() {
      return null;
    },

    componentDidMount: function() {
    
    },

    componentWillUnmount: function() {
    
    },
    
    componentWillMount: function() {
        console.log("componentWillMount");
        //SessionStore.logout();
        if(SessionStore.loggedIn()){
            //var router = this.context.route;
            console.log(router);
            router.transitionTo('dashboard');
        }
    },

    /**
     * @return {object}
     */
    render: function() {
        return (
            <ReactForm />
        );
    },

});

module.exports = Login;