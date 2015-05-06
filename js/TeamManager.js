var React = require('react');
var Router = require('react-router');
var router = require('./router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var SessionStore = require('./stores/SessionStore');
var Logout = require('./components/navigation/logout.react');
var ReactRouterBootstrap = require('react-router-bootstrap')
  , ButtonLink = ReactRouterBootstrap.ButtonLink;

var TeamManager = React.createClass({

    componentDidMount: function(){
        if(SessionStore.loggedIn()){
            
        }
    },
    
    render: function () {
        return (
            <div>
            <header>
                <ButtonLink to="app" params={{ someparam: 'hello' }}>Dashboard</ButtonLink>        
                <ButtonLink to="inbox" params={{ someparam: 'hello' }}>Inbox</ButtonLink>        
                <ButtonLink to="calendar" params={{ someparam: 'hello' }}>Calendar</ButtonLink>
                <Logout/>
            </header>

            <RouteHandler/>
            </div>
        );
    }
});

module.exports = TeamManager;
