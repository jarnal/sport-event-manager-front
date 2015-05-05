var React = require('react');
var router = require('./router');

router.run(function (Handler) {  
    React.render(
        <Handler />,
        document.getElementById('main')
    );
});