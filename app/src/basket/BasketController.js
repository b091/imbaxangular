app.factory('BasketController', function() {

    function add(scope, item, key) {
        scope.items.push(item);
        scope.checked[key].selected = true;
        scope.sum += parseInt(item.price);
    }

    function remove(scope, item) {
        scope.items.splice(scope.items.indexOf(item), 1);
        scope.checked[key].selected = false;
        scope.sum -= parseInt(item.price);
    }

    return {
        sum: 0,
        items: [],
        checked: {},
        addRemoveItemFromBasket: function(event, item) {
            var key = 'id_' + item.id;
            this.checked[key] = this.checked[key] || {};
            if (event.target.checked && this.items.indexOf(item) < 0) {
                add(this, item, key);
            }
            else {
                remove(this, item);
            }
        }
    };
});
