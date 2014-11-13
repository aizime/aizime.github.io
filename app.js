/**
 * Created by wangyuqiu on 11/13/14.
 */
var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic('./', {'index': ['index.html', 'default.htm']}));
app.listen(8080);