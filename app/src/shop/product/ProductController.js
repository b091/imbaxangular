app.controller('ProductController',
    ['$scope', '$routeParams', 'Product', 'BasketController',
        function($scope, $routeParams, Product, BasketController) {
            Product.getById($routeParams.productId).then(function(response) {
                $scope.product = BasketController.getItemById(response.data.results.id) ;
            });
        }]);
