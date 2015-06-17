app.directive('sortingButton', function() {
    return {
        restrict: 'E',
        scope: {
            text: '@',
            value: '@',
            sort: '='
        },
        templateUrl: 'src/core/tpl/sortingButton.html',
        link: function(scope) {
            scope.sortBy = function(byWhat, sortOrder) {
                scope.sort.by = ['special', byWhat];
                scope.sort.desc = !scope.sort.desc; //sortOrder;
            }
        }
    };
});
