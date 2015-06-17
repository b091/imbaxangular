app.directive('productBox', function() {
    return {
        restrict: 'E',
        scope: {
            value: '=',
            quantityOptions: '='
        },
        templateUrl: 'src/shop/tpl/productBox.html',
        link: function($scope, element, attrs) {
            $scope.isEditMode = false;
            $scope.showHideDescription = false;

            $scope.onShowHideDescriptionChange = function() {
                $scope.showHideDescription = !$scope.showHideDescription;
            };

            $scope.onEditInPlaceChange = function() {
                $scope.isEditMode = !$scope.isEditMode;
            };
        }
    }
});
