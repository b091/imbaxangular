app.factory('BasketController', ['BlockChain', function(BlockChain) {
    var quantityList = {},
        items = [],
        sum = 0,
        currencies = [];

    BlockChain.getCurrencies().then(function(data) {
        currencies = data.currencies;
    });

    function getQuantityKey(id) {
        return '__k__' + id;
    }

    function addQuantity(id) {
        var key = getQuantityKey(id);
        quantityList[key] = quantityList[key] || 0;
        quantityList[key] += 1;
    }

    function removeQuantity(id) {
        quantityList[getQuantityKey(id)] -= 1;
    }

    function removePrice(price) {
        sum -= parseInt(price);
    }

    return {
        add: function(item) {
            if (!this.contains(item)) {
                items.push(item);
            }
            addQuantity(item.id);
            sum += parseInt(item.price);
        },
        remove: function(item) {
            while (quantityList[getQuantityKey(item.id)] > 0) {
                removeQuantity(item.id);
                removePrice(item.price);
            }
            items.splice(items.indexOf(item), 1);
        },
        contains: function(item) {
            return items.indexOf(item) >= 0;
        },
        setQuantity: function(item, quantity) {
            var elementQuantity = quantityList[getQuantityKey(item.id)];
            if (elementQuantity < quantity) {
                while (elementQuantity <= --quantity) {
                    this.add(item);
                }
            }
            else if (elementQuantity < quantity) {
                while (elementQuantity > quantity++) {
                    removeQuantity(item.id);
                    removePrice(item.price);
                }
            }
            return elementQuantity;
        },
        countPrice: function() {
            return sum;
        },
        countItems: function() {
            var result = 0;
            for (var index in quantityList) {
                result += quantityList[index];
            }
            return result;
        },
        getQuantity: function(item) {
            return quantityList[getQuantityKey(item.id)];
        },
        getItems: function() {
            return items;
        }
    };
}]);
