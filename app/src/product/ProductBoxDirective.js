app.directive('productBox', function() {
    return {
        restrict: 'E',
        scope: {
            value: '=',
            quantityOptions: '='
        },
        templateUrl: 'directives/productBox.html',
        link: function($scope, element, attrs) {
            var basket = $scope.$parent.basket;

            $scope.isEditMode = false;
            $scope.showHideDescription = false;
            $scope.selectedElement = basket.contains($scope.value);
            $scope.quantity = basket.getQuantity($scope.value);

            $scope.onCheckboxChange = function(event) {
                if(event.target.checked && !$scope.selectedElement){
                    basket.add(this.value);
                }
                else {
                    basket.remove(this.value);
                }
                $scope.quantity = basket.getQuantity($scope.value);
            };

            $scope.onSelectChange = function() {
                $scope.quantity = basket.setQuantity(this.value, $scope.quantity);
            };

            $scope.selectDisabled = function() {
                return !$scope.selectedElement;
            };

            $scope.onShowHideDescriptionChange = function() {
                $scope.showHideDescription = !$scope.showHideDescription;
            };

            $scope.onEditInPlaceChange = function() {
                $scope.isEditMode = !$scope.isEditMode;
            };
        }
    }
});
