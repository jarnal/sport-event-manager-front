var React = require('react');
var RestrictedAccesMixin = require('../mixins/RestrictedAccesMixin');
var SessionStore = require('../stores/SessionStore');

var Dashboard = React.createClass({
    
    mixins: [RestrictedAccesMixin],
    
    render: function () {
        return (
            <div>
                <span>Dashboard</span>
            </div>
        );
    }
});

module.exports = Dashboard;