var SessionStore = require('../stores/SessionStore');
var router = require('../router');

var SetIntervalMixin = {
    
    statics: {
        willTransitionTo: function (transition) {
            var nextPath = router.getCurrentQuery().nextPath;
            console.log( nextPath );
            
            if(!SessionStore.loggedIn()) {
                router.transitionTo('login');
            }
        }
    },
    
    getInitialState: function() {
        return {
            loggedIn : SessionStore.loggedIn()
        }
    },
    
    componentWillMount:function() {
        SessionStore.addChangeListener(this._handleSessionChange);
    },
    
    componentWillUnmount:function() {
        SessionStore.removeChangeListener(this._handleSessionChange);
    },
    
    componentWillUpdate:function() {
        if(!SessionStore.loggedIn()) {
            router.transitionTo('login');   
        }
    },
    
    _handleSessionChange:function() {
        this.setState({loggedIn:SessionStore.loggedIn()});
    }
};

module.exports = SetIntervalMixin;