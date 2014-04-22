/*
angular.module('myapp.directives', []).directive('myCustomer', function() {
    return {
        restrict: 'E',
        template: 'Agent: {{agent}} '
    }
});
*/

'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('myCustomer', function() {
    return {
        restrict: 'E',
        template: 'Agent: {{agent}} '
    }
});