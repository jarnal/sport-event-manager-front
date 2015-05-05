var React = require('react');
var Router = require('react-router');
var router = require('./router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

console.log( router);

var TeamManager = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="inbox">Inbox</Link></li>
            <li><Link to="calendar">Calendar</Link></li>
          </ul>
          Logged in as Jane
        </header>
        
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = TeamManager;
