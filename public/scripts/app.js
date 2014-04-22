// Declare app level module which depends on filters, and services
/*
var myapp = angular.module('myapp', []);

myapp.controller('IndexCtrl', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';
    $scope.agent = "Matt Hersh";
    $scope.customer = { name: "Bob", address: "104 welsh dr." };

}]);
*/


'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]);
