/*jslint node:true*/
(function () {
    'use strict';
    var Cloudant = require('cloudant');

    module.exports = {
        init: new Cloudant(
            {
                account: 'youraccount-bluemix',
                password: 'yourpassword'
            },
            function (err) {
                if (err) {
                    console.log('error connecting to DB ' + err);
                } else {
                    console.log('connection success');
                }
            }
        )
    };

}());