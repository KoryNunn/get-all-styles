var test = require('tape');
var getAllStyles = require('../');

test('gets inline styles', function(t){
    t.plan(2);
    getAllStyles(document.querySelector('html'), function(error, styles){
        t.notOk(error, 'Got no error');
        t.equal(styles.replace(/\s/g, ''), '.inStyleSheetStyles{font-size:50px;}.inHeadTagStyles{color:red;}.inBodyTagStyles{border:solid5pxblue;}');
    });
})