app.controller('ProductsController', ['$scope', '$timeout', '$routeParams', 'Products', 'BlockChain', 'Product', 'QuantityOptions', 'BasketController', function($scope, $timeout, $routeParams, Products, BlockChain, Product, QuantityOptions, BasketController) {

    function chunk(arr, size) {
        var newArr = [];
        for (var i=0; i<arr.length; i+=size) {
            newArr.push(arr.slice(i, i+size));
        }
        console.log(newArr);
        return newArr;
    }
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

    if ($routeParams.productId) {
        $scope.product = Product.get({id: $routeParams.productId});
    }

    BlockChain.getLatestBTCPrice().then(function(data) {
        $scope.btcPrice = data.data.PLN.last;
        $timeout(BlockChain.getLatestBTCPrice, 500);
    });

    $scope.isEditMode = true;
    Products.list().then(function(response) {
        $scope.products = chunk(response.data.results, 3);
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
