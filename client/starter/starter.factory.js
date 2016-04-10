/*global angular*/
(function () {
    'use strict';
    	
    function returnReqObj(reqObj) {
        return {
            method: reqObj.HTTPMethod,
            url: reqObj.proxyURL,
            timeout: reqObj.timeout || 200000,
            headers: reqObj.headers || {},
            data: reqObj.requestData || {}
        };
    }
    
    angular.module('starter.service', []).factory('StarterService', ['$http', '$q', '$timeout', function StarterService($http, $q, $timeout) {

		function greetUser(userId) {
			var deferred = $q.defer();
			$http(returnReqObj({
				HTTPMethod : 'POST',
				proxyURL: '/scaffold',
                requestData: {
                    userId: 'IBMer'
                }
			})).success(function (data) {
				deferred.resolve(data);
			}).error(function (err) {
				deferred.reject(err);
			});

			return deferred.promise;
		}
        
        return {
			greetUser: greetUser
		};

    }]);

}());