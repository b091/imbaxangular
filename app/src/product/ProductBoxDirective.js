app.directive('productBox', function() {
    return {
        restrict: 'E',
        scope: {
            value: '=',
            quantityOptions: '='
        },
        templateUrl: 'directives/productBox.html',
        link: function($scope, element, attrs) {

            $scope.showHideDescription = false;
            $scope.isEditMode = false;

            $scope.onCheckboxChange = function(event) {
                var basket = this.$parent.basket;

                if (event.target.checked && !basket.contains(this.value)) {
                    basket.add(this.value);
                }
                else {
                    basket.remove(this.value);
                }
            };

            $scope.onSelectChange = function() {
                this.$parent.basket.setQuantity(this.value.id);
            };

            $scope.isSelectDisabled = function() {
                return !this.$parent.basket.isSelected(this.value.id);
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
