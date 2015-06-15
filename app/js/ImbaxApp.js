var app = angular.module('ImbaxApp', ['ngRoute', 'ngResource']);

app.controller('ProductsController',
    ['$scope', '$timeout', '$routeParams', 'Products', 'BlockChain', 'Product', function ($scope, $timeout, $routeParams, Products, BlockChain, Product) {

        $scope.hideSpecial = false;
        $scope.tagFilter = '';
        $scope.products = [];
        $scope.tags = [];
        $scope.sorting = {
            by: ['special', 'price'],
            desc: true
        };
        $scope.basket = {
            sum: 0,
            items: [],
            checked: {}
        };

        $scope.testtest = $routeParams;
        if($routeParams.productId){
            $scope.product = Product.get({id: $routeParams.productId});
        }
        BlockChain.getLatestBTCPrice().then(function (data) {
            $scope.btcPrice = data.data.PLN.last;
            $timeout(BlockChain.getLatestBTCPrice, 500);
        });

        $scope.isEditMode = true;
        Products.list().then(function (response, dupa) {
            $scope.products = response.data.results;
        });

        Product.get().$promise.then(function (response) {
            var i, x;
            for (i = 0; response.results.length > i; i++) {
                for (x = 0; response.results[i].tags.length > x; x++) {
                    if ($.inArray(response.results[i].tags[x], $scope.tags) < 0) {
                        $scope.tags.push(response.results[i].tags[x]);
                    }
                }
            }
        });

        $scope.filterTags = function (item, filter) {
            if (filter != '') {
                return ($.inArray(filter, item.tags) > -1);
            }
            return true;
        };

        $scope.addRemoveItemFromBasket = function (event, item) {
            var key = 'id_' + item.id;
            $scope.basket.checked[key] = $scope.basket.checked[key] || {};
            if (event.target.checked && $scope.basket.items.indexOf(item) < 0) {
                $scope.basket.items.push(item);
                $scope.basket.checked[key].selected = true;
                $scope.basket.sum += parseInt(item.price);
            }
            else {
                $scope.basket.items.splice($scope.basket.items.indexOf(item), 1);
                $scope.basket.checked[key].selected = false;
                $scope.basket.sum -= parseInt(item.price);
            }
        };
    }]);


app.config(function ($routeProvider) {

    $routeProvider.when('/home', {
        templateUrl: 'templates/main.html'
    }).when('/basket', {
        templateUrl: 'templates/basket.html'
    }).when('/product/:productId', {
        templateUrl: 'templates/product.html'
    }).otherwise({
        redirectTo: '/home'
    });
});