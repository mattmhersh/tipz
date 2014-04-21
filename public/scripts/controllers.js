/*
function IndexCtrl($scope, $http) {
  $scope.agent = "Matt Hersh";
  
  $scope.customer = { name: "Bob", address: "104 welsh dr." };
  
}
*/

angular.module('myapp.controllers', []).controller('IndexCtrl', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';
    
    $scope.agent = "Matt Hersh";
  
    $scope.customer = { name: "Bob", address: "104 welsh dr." };
}]);

