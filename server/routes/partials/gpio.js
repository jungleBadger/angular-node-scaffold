/**
 * Created by danielabrao on 4/11/16.
 */
/*jslint node:true*/
(function () {
    'use strict';
    var Gpio = require('onoff').Gpio,

        color = [new Gpio(18, 'out'), new Gpio(6, 'out'), new Gpio(5, 'out'), new Gpio(23, 'out')];

    module.exports = function (app) {

        app.post('/testLight', function (req, res) {
            color[req.body.selected].write(Number(req.body.status), function () {
                return res.status(200).send([req.body.selected, 'to', req.body.status].join(' '));
            })
        });



    };

}());