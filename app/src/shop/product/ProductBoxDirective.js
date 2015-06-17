app.directive('productBox', function() {
    return {
        restrict: 'E',
        scope: {
            value: '=',
            quantityOptions: '='
        },
        templateUrl: 'src/shop/tpl/productBox.html',
        link: function($scope, element, attrs) {
            var basket = $scope.$parent.basket;

            $scope.isEditMode = false;
            $scope.showHideDescription = false;
            //$scope.quantity = basket.getQuantity($scope.value);

            $scope.onShowHideDescriptionChange = function() {
                $scope.showHideDescription = !$scope.showHideDescription;
            };

            $scope.onEditInPlaceChange = function() {
                $scope.isEditMode = !$scope.isEditMode;
            };
        }
    }
});
