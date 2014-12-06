app.factory('BlockChain', ['$http', function ($http) {
    return {
        getLatestBTCPrice: function () {
            return $http.get('https://blockchain.info/pl/ticker?cors=true');
        }
    };
}]);

app.factory('Products', ['$http', '$resource', function ($http, $resource) {
    return {
        list: function () {
            return $http.get("resources/products.json")
                .success(function (data, status, headers, config) {
                })
                .error(function (data, status, headers, config) {
                    alert("AJAX failed!");
                });
        },
        getById: function (productId) {
            return $resource("resources/product.json", {id: productId});
        }
    };
}]);


app.factory('Product', ['$resource', function ($resource) {
    return $resource('resources/product.php?:id', null,
        {
            'update': {method: 'PUT'}
        });
}]);