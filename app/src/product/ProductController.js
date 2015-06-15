app.controller('ProductsController', ['$scope', '$timeout', '$routeParams', 'Products', 'BlockChain', 'Product', 'QuantityOptions', 'BasketController', function($scope, $timeout, $routeParams, Products, BlockChain, Product, QuantityOptions, BasketController) {

    $scope.productsQuantityOptions = QuantityOptions;
    $scope.hideSpecial = false;
    $scope.tagFilter = '';
    $scope.products = [];
    $scope.tags = [];
    $scope.currencies = [];
    $scope.sorting = {
        by: ['special', 'price'],
        desc: true
    };
    $scope.basket = BasketController;

    if ($routeParams.productId) {
        $scope.product = Product.get({id: $routeParams.productId});
    }

    BlockChain.getCurrencies().then(function(data) {
        $scope.currencies = data.currencies;
    });

    BlockChain.getLatestBTCPrice().then(function(data) {
        $scope.btcPrice = data.data.PLN.last;
        $timeout(BlockChain.getLatestBTCPrice, 500);
    });

    $scope.isEditMode = true;
    Products.list().then(function(response, dupa) {
        $scope.products = response.data.results;
    });

    Product.get().$promise.then(function(response) {
        var i, x;
        for (i = 0; response.results.length > i; i++) {
            for (x = 0; response.results[i].tags.length > x; x++) {
                if ($.inArray(response.results[i].tags[x], $scope.tags) < 0) {
                    $scope.tags.push(response.results[i].tags[x]);
                }
            }
        }
    });

    $scope.filterTags = function(item, filter) {
        if (filter != '') {
            return ($.inArray(filter, item.tags) > -1);
        }
        return true;
    };
}]);
