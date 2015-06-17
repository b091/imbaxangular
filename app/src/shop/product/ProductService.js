app.factory('Product', ['$http', '$resource', function ($http) {
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
            return $http.get("resources/product.json?" + productId);
        }
    };
}]);
