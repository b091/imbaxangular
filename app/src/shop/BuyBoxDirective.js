app.directive('buyBoxDirective', function() {
    return {
        restrict: 'E',
        scope: {
            product: '='
        },
        templateUrl: 'src/shop/tpl/buyBox.html',
        link: function($scope, element, attrs) {
        },
        controller: function($scope, QuantityOptions, BasketController){
            $scope.quantityOptions = QuantityOptions;
            $scope.selectedElement = BasketController.contains($scope.product);
            $scope.onCheckboxChange = function(event) {
                if (event.target.checked && !$scope.selectedElement) {
                    BasketController.add($scope.product);
                }
                else {
                    BasketController.remove($scope.product);
                }
                $scope.quantity = BasketController.getQuantity($scope.product);
            };

            $scope.onSelectChange = function() {
                $scope.quantity = BasketController.setQuantity($scope.product, $scope.quantity);
            };

            $scope.selectDisabled = function() {
                return !$scope.selectedElement;
            };
        }
    }
});
