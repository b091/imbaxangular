app.directive('productBox', function() {
    return {
        restrict: 'E',
        scope: {
            value: '=',
            quantityOptions: '='
        },
        templateUrl: 'directives/productBox.html'
    }
});
