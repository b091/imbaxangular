app.config(function($routeProvider) {

    $routeProvider.when('/home', {
        templateUrl: 'templates/main.html'
    }).when('/basket', {
        templateUrl: 'templates/basket.html'
    }).when('/product/:productId', {
        templateUrl: 'templates/product.html',
        controller: 'ProductController'
    }).otherwise({
        redirectTo: '/home'
    });
});
