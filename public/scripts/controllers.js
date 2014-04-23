'use strict';

/* Controllers */
angular.module('myApp.controllers', [])
  .controller('IndexCtrl', ['$scope', function($scope) {
    
    $scope.greeting = 'Hola!';
    
    $scope.agent = "Matt Hersh";
  
    $scope.customer = { name: "Bob", address: "104 welsh dr." };
  }])
  .controller('GreetingController', [function() {
    function GreetingController($scope) {
        $scope.sayHello = function() {
            alert('hello');
        }
    }
  }]);
