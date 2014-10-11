
/**
 * This Bluemix app uses Watson's QAAPI as a service and was created using NodeExpress
 * Designed and developed by: Tinniam V Ganesh
 * Date: 10 Oct 2014
 * File: app.js
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , question = require('./routes/question')
  , simplesync = require('./routes/simplesync')
  , evidence = require('./routes/evidence')
  , evidencereq = require('./routes/evidencereq')
  , items = require('./routes/items')
  , itemsreq = require('./routes/itemsreq')
  , format = require('./routes/format')
  , formatreq = require('./routes/formatreq')  
  , connect = require('connect')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

// Ask Watson a simple synchronous query
app.get('/question',question.list);
app.post('/simplesync',simplesync.list);

// Ask Watson for responses based on evidence provided
app.get('/evidence',evidence.list);
app.post('/evidencereq',evidencereq.list);

// Ask Watson to provide specified number of responses to a query
app.get('/items',items.list);
app.post('/itemsreq',itemsreq.list);

// Get a formatted response from Watson for a query
app.get('/format',format.list);
app.post('/formatreq',formatreq.list);

//Start a Web server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
