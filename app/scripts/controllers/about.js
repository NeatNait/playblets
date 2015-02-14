'use strict';

/**
 * @ngdoc function
 * @name playbletsSampleClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the playbletsSampleClientApp
 */
angular.module('playbletsSampleClientApp')
  .controller('AboutCtrl', function ($scope) {

    var socket = io('http://localhost:3000'),
		selfId;

	socket.on('connect', function(client){
		console.log('connected');
		selfId = socket.id;
		$scope.selfId = selfId;
		$scope.$apply();
	});

  });
