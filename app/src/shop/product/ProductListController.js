app.controller('ProductsListController', ['$scope', '$timeout', '$routeParams', 'BlockChain', 'Product', 'QuantityOptions', 'BasketController', function($scope, $timeout, $routeParams, BlockChain, Product, QuantityOptions, BasketController) {

    $scope.productsQuantityOptions = QuantityOptions;
    $scope.quantity = null;
    $scope.hideSpecial = false;
    $scope.tagFilter = '';
    $scope.products = [];
    $scope.tags = [];
    $scope.sorting = {
        by: ['special', 'price'],
        desc: true
    };
    $scope.basket = BasketController;

    BlockChain.getLatestBTCPrice().then(function(data) {
        $scope.btcPrice = data.data.PLN.last;
        $timeout(BlockChain.getLatestBTCPrice, 500);
    });

    $scope.isEditMode = true;

    Product.list().then(function(response) {
        $scope.products = response.data.results;
        var i, x;
        for (i = 0; response.data.results.length > i; i++) {
            for (x = 0; response.data.results[i].tags.length > x; x++) {
                if ($.inArray(response.data.results[i].tags[x], $scope.tags) < 0) {
                    $scope.tags.push(response.data.results[i].tags[x]);
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
