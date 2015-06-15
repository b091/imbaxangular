app.factory('BlockChain', ['$http', function ($http) {
    return {
        getLatestBTCPrice: function () {
            return $http.get('https://blockchain.info/pl/ticker?cors=true');
        }
    };
}]);
