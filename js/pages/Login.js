var React = require('react');
var ReactForm = require('../components/login/LoginForm.react');

var Login = React.createClass({

  getInitialState: function() {
      return null;
  },

  componentDidMount: function() {
    
  },

  componentWillUnmount: function() {
    
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