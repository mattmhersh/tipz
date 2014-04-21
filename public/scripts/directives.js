angular.module('myapp.directives', []).directive('myCustomer', function() {
    return {
      template: 'Agent: {{agent}} '
    }
});