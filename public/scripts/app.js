// Declare app level module which depends on filters, and services
var myapp = angular.module('myapp', ['myapp.directives']);

myapp.controller('IndexCtrl', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';
    
    $scope.agent = "Matt Hersh";
  
    $scope.customer = { name: "Bob", address: "104 welsh dr." };
}]);
