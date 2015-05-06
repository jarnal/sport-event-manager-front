var React = require('react');
var RestrictedAccesMixin = require('../mixins/RestrictedAccesMixin');
var SessionStore = require('../stores/SessionStore');

var Inbox = React.createClass({
    
    mixins: [RestrictedAccesMixin],
    
    render: function () {
        return (
            <div>
                <span>Inbox</span>
            </div>
        );
    }
});

module.exports = Inbox;