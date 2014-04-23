'use strict';

/* Directives */
angular.module('myApp.directives', []).
    directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
          elm.text(version);
        };
    }])
    .directive('myCustomer', function() {
        return {
            restrict: 'E',
            template: 'Customer Name: {{customer.name}} Customer Address: {{customer.address}}'
        }
    })
    .directive('mySample', function() {
        return {
            restrict: 'EC',
            template: "<br /><br /><input type='text' ng-model='sampleData' /> {{sampleData}} <br />",
            scope: {
            
            }
        }
    })
    .directive('greeting', function() {
        return {
            restrict: 'E',
            replace: true,
            template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
            controller: 'GreetingController'
        }
    });