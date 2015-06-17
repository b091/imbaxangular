app.controller('ProductController',
    ['$scope', '$routeParams', 'Product',
        function($scope, $routeParams, Product) {
            $scope.product = null;
             Product.getById($routeParams.productId).then(function(response){
                 $scope.product = response.data.results;
             });
        }]);
