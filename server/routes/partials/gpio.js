/**
 * Created by danielabrao on 4/11/16.
 */
/*jslint node:true*/
(function () {
    'use strict';
    var Gpio = require('onoff').Gpio,
        color0 = new Gpio(18, 'out'),
        color1 = new Gpio(5, 'out'),
        color2 = new Gpio(6, 'out'),
        optionSelected;

    function handleSwitches(switch1, switch2) {
        try {
            switch1.writeSync(0);
            switch2.writeSync(0);
        } catch (e) {
            console.log(["Error occurred turning the lights off: ", e].join(""));
        }
    }

    module.exports = function (app) {

        app.post('/changeLightState', function (req, res) {
            optionSelected = req.body.selectedLight;
            console.log(optionSelected);
            if (optionSelected) {
                switch (optionSelected) {
                    case 1:
                        handleSwitches(color1, color2);
                        color0.writeSync(1, function () {
                            return res.status(200).send("Switch 0 turned on");
                        });
                        break;
                    case 2:
                        handleSwitches(color0, color2);
                        color1.writeSync(1, function () {
                            return res.status(200).send("Switch 1 turned on");
                        });
                        break;
                    case 3:
                        handleSwitches(color0, color1);
                        return color2.writeSync(1, function () {
                            return res.status(200).send("Switch 2 turned on");
                        });
                    default:
                        return res.status(500).send("Unavailable switch");
                }
            } else {
               return res.status(500).send("can't operate without a switch");
            }

        });

    };

}());