app.factory('Product', ['$resource', function ($resource) {
    return $resource('resources/product.json?:id', null,
        {
            'update': {method: 'PUT'}
        });
}]);
