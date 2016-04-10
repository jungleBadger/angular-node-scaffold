/*global angular*/
(function () {
    'use strict';
    
    angular.module('starter.controller', []).controller('StarterController', ['$scope', '$state', '$mdDialog', 'StarterService', function StarterController($scope, $state, $mdDialog, StarterService) {
		        
        var self = this,
            root = $scope.$root;
        self.validUser = true;
        self.userId = '';
        
        function buildDialog(ev, dialogObj) {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(false)
                    .title(dialogObj.title)
                    .textContent(dialogObj.text)
                    .ariaLabel('Dialog message')
                    .ok('OK')
                    .targetEvent(ev)
            );
        }
        
        self.triggerService = (function () {
            StarterService.greetUser().then(function (data) {
                self.messageToDisplay = data;
            }, function (error) {
                self.errorMessage = error;
            });
        }());
	 
    }]);
    
	
}());