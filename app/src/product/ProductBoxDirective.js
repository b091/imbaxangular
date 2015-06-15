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
            $scope.quantity = null;

            $scope.onCheckboxChange = function(event) {
                var method = (event.target.checked && !$scope.selectedElement) ?
                    'add' : 'remove';
                basket[method](this.value);
            };

            $scope.onSelectChange = function() {
                this.$parent.basket.setQuantity(this.value, $scope.quantity);
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
