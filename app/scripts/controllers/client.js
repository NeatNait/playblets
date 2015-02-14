'use strict';

/**
 * @ngdoc function
 * @name playbletsSampleClientApp.controller:ClientCtrl
 * @description
 * # ClientCtrl
 * Controller of the playbletsSampleClientApp
 */
angular.module('playbletsSampleClientApp')
  .controller('ClientCtrl', function ($scope) {
    

    $scope.buttons = [0,1,2,3,4,5,6,7,8,9];

    var socket = io('http://172.20.10.2:3000'),
		selfId;

	socket.on('connect', function(client){
		console.log('connected');
		selfId = socket.id;
		$scope.selfId = selfId;
		$scope.$apply();
	});



	$scope.run = function () {
		console.log('run');
		socket.emit('player action', {yeah:true});
	};


	$scope.setValue = function (n) {
		//$scope.input += ''+n;

		//if($scope.input == getResult()){
		if(n == getResult()){
			$scope.run();
		}
		else{
		}

		init();

	};


	var getResult = function () {
		return _.reduce($scope.numbers, function(memo, num){ return memo + num; }, 0);
	};




	var create = function () {
		$scope.numbers = [];

		var n = 2;

		for(var i=0; i<n; i++){
			$scope.numbers.push((Math.random()*4+1)|0);
		}
		//$scope.$apply();
	};

	//$scope.input;


	function init () {
		$scope.input = '';
		create();
	}

	init();


	//create();

  });
