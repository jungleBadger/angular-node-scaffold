/*jslint node:true*/
(function () {
    'use strict';

    module.exports = function (app, service) {
        
        app.post('/scaffold', function (req, res, next) {
            res.status(200).send(['Hello', req.body.userId, 'Thank you for scaffold this project'].join(' '));
        });
       
    };
    
}());