'use strict';

/**
 * @ngdoc service
 * @name playbletsSampleClientApp.sockets
 * @description
 * # sockets
 * Factory in the playbletsSampleClientApp.
 */
angular.module('playbletsSampleClientApp')
  .factory('sockets', function (socketFactory) {
  return socketFactory();
});