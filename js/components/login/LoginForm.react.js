var React = require('react');
var LoginActions = require('../../actions/LoginActions');
var Store = require('../../stores/LoginStore');

var LoginForm = React.createClass({

    getInitialState: function() {
        return null;
    },

    componentDidMount: function() {

    },

    componentWillUnmount: function() {

    },
    
    onLoginSubmit:function(e){
        e.preventDefault();
        LoginActions.login("player1", "RwtgxAGDe826LHciu5MHbq1KVJ8KmPEukNqrCti2RGzrMEXYwATPjS9wQksz8PV92HpTPpHVFlSGFWQCQhEjjQ==");
    },
    
    

    /**
    * @return {object}
    */
    render: function() {
    return (
        <form className="form-inline" onSubmit={this.onLoginSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputName2">Name</label>
                <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail2">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"/>
            </div>
            <button type="submit" className="btn btn-default">Send invitation</button>
        </form>
    );
    },

});

module.exports = LoginForm;