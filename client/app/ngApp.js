/*global angular*/
(function () {
	'use strict';
	
	var app = angular.module('yourApp', ['ngAnimate', 'ngMaterial', 'ngAria', 'starter.controller', 'starter.service', 'ngAnimate', 'ui.router']);
    app.config(function () {

    }).run(function ($window, $rootScope) {
        $rootScope.ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	}).config(['$stateProvider', '$urlRouterProvider', '$compileProvider', function ($stateProvider, $urlRouterProvider, $compileProvider) {
				 
        $compileProvider.debugInfoEnabled(false);

        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('Home', {
            url: '/home',
            templateUrl: 'starter/starter.view.html',
            controller: 'StarterController',
            controllerAs: 'sc'
        });

    }]).filter('nospace', function () {
        return function (value) {
            return (!value) ? '' : value.replace(/ /g, '');
        };
    });
	
}());