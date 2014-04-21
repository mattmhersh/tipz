angular.module('myapp.directives', []).directive('myCustomer', function() {
    return {
        restrict: 'E',
        template: 'Agent: {{agent}} '
    }
});