/*
function IndexCtrl($scope, $http) {
  $scope.agent = "Matt Hersh";
  
  $scope.customer = { name: "Bob", address: "104 welsh dr." };
  
}
*/

'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('IndexCtrl', [function() {
    $scope.agent = "Matt Hersh";
  
    $scope.customer = { name: "Bob", address: "104 welsh dr." };
  }])
  .controller('MyCtrl2', [function() {

  }]);
