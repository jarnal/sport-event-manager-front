var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Main = require('./TeamManager');
var Login = require('./pages/Login');
var Dashboard = require('./pages/Dashboard');
var Inbox = require('./pages/Inbox');
var Calendar = require('./pages/Calendar');

var routes = (
  <Route name="app" path="/" handler={Main}>
    <Route name="inbox" handler={Inbox}/>
    <Route name="calendar" handler={Calendar}/>
    <Route name="login" handler={Login}/>
    <DefaultRoute handler={Dashboard}/>
  </Route>
);

module.exports = routes;