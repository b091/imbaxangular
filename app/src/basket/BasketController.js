app.factory('BasketController', function() {
    var quantityList = {};
    var items = [];
    var sum = 0;

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
            items.splice(items.indexOf(item), 1);
            removeQuantity(item.id);
            removePrice(item.price);
        },
        contains: function(item) {
            return items.indexOf(item) >= 0;
        },
        setQuantity: function(item, quantity) {
            var elementQuantity = quantityList[getQuantityKey(item.id)];
            if (elementQuantity === quantity) {
                return;
            }

            if (elementQuantity < quantity) {
                while (elementQuantity <= --quantity) {
                    this.add(item);
                }
                return;
            }
            else {
                while (elementQuantity > quantity++) {
                    removeQuantity(item.id);
                    removePrice(item.price);
                }
                return;
            }

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
        getItems: function() {
            return items;
        }
    };
});
