'use strict';

/**
 * @ngdoc function
 * @name playbletsSampleClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the playbletsSampleClientApp
 */
angular.module('playbletsSampleClientApp')
  .controller('MainCtrl', function ($scope) {
    //$scope.user = {};
    $scope.users = [];

    //$scope.user.clientId = 'yeah';

	var socket = io('http://localhost:3000'),
		selfId;

	socket.on('connect', function(client){
		console.log('connected');
		selfId = socket.id;
	});

	//var selfId = socket;
	//console.log(selfId);
	  /*$('form').submit(function(){
	    socket.emit('chat message', $('#m').val());
	    $('#m').val('');
	    return false;
	  });*/
	socket.on('user connected', function(user){
		//$('#messages').append($('<li>').text(msg));
		console.log(user);
		//$scope.user.clientId = msg.clientId;

		console.log(selfId);
		if(user.clientId !== selfId){
			$scope.users.push({
				clientId : user.clientId,
				x : 100,
				color : Math.random()*1000+100|0
			});
		}
		console.log('yeah');
		//console.log($scope.user);
		//$scope.apply();
		//shit();
		$scope.$apply();

	});

	socket.on('screen action', function(user){
		var findedUser = _.find($scope.users, function (u) {
			return u.clientId === user.clientId;
		});


		findedUser.x += 20;


		$scope.$apply();
	});

	socket.on('user disconnected', function(user){
		//$('#messages').append($('<li>').text(msg));
		console.log(user);
		console.log('disconnected');

		$scope.users = _.filter($scope.users, function (u) {
			return u.clientId !== user.clientId;
		});


		//console.log(removedUser);


		//$scope.user.clientId = msg.clientId;

		//$scope.users.push(user);
		//console.log($scope.user);
		//$scope.apply();
		//shit();
		$scope.$apply();
	});


  });
