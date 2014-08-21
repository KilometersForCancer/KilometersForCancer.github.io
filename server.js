'use strict';

var express = require('express'),
    app     = express(),
    parser  = require('body-parser'),
    mcAPI   = require('./node_modules/mailchimp-api/mailchimp'),
    config  = require('./config.js');

app.set('views', __dirname + '/app');

app.use(express.static(__dirname + '/app'));
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use(parser.json({ type: 'application/vnd.api+json' }));

var mc = new mcAPI.Mailchimp(config.key);

app.get('/', function(req, res) {
  res.send('index');
});

// app.post('/', function(req, res) {
//   var name = req.body.name;
//   var email = req.body.email;
// })

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('started on ' + port);
});
