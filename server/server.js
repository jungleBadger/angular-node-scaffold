/*jslint node: true, nomen:true*/
(function () {
    'use strict';
    var express = require('express'),
        bodyParser = require('body-parser'),
        cfenv = require('cfenv'),
        engines = require('consolidate'),
        path = require('path'),
        ejs = require('ejs'),
        app = express(),
        appEnv = cfenv.getAppEnv(),
        server = require('http').createServer(app);

    //uncomment for w3.ibm internal bluemix
//    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json({limit: '50mb'}));
    
    app.use(express['static'](path.join(__dirname, '/public/')));
    app.use(express['static'](path.join(__dirname, '../client/')));
    
    app.set('views', __dirname + '/client');
    app.engine('html', engines.ejs);
    app.set('view engine', 'html');

    require('./routes/index.js')(app);
    
    server.listen(appEnv.port, '0.0.0.0', function () {
        module.exports = app;
        console.log(appEnv.url);
    });

}());