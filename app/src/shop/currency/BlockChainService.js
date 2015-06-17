app.factory('BlockChain', ['$http', function($http) {
    return {
        getLatestBTCPrice: function() {
            return $http.get('https://blockchain.info/pl/ticker?cors=true');
        },
        getCurrencies: function(currencies) {
            return this.getLatestBTCPrice().then(function(data) {
                data.currencies = [];
                for (var key in data.data) {
                    if (key === 'length' || !data.data.hasOwnProperty(key)) continue;
                    data.currencies.push(key);
                }
                return data;
            });
        }
    };
}]);
