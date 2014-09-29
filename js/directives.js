
app.directive('sortingButton', function () {
    return {
        restrict: 'E',
        scope: {
            text: '@',
            value: '@',
            sort: '='
        },
        templateUrl: 'directives/sortingButton.html',
        link: function (scope) {
            scope.sortBy = function (byWhat, sortOrder) {
                scope.sort.by = ['special', byWhat];
                scope.sort.desc = !scope.sort.desc; //sortOrder;
            }
        }
    };
});

app.directive('productBox', function () {
    return {
        restrict: 'E',
        scope: {
            value: '='
        },
        templateUrl: 'directives/productBox.html'
    }
});
