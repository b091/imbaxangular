app.directive('productBox', function () {
    return {
        restrict: 'E',
        scope: {
            value: '='
        },
        templateUrl: 'directives/productBox.html'
    }
});
