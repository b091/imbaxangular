app.factory('BasketController', function() {

    return {
        sum: 0,
        items: [],
        checked: {},
        addRemoveItemFromBasket: function(event, item) {
            var key = 'id_' + item.id;
            this.checked[key] = this.checked[key] || {};

            if (event.target.checked && this.items.indexOf(item) < 0) {
                this.items.push(item);
                this.checked[key].selected = true;
                this.sum += parseInt(item.price);
            }
            else {
                this.items.splice(this.items.indexOf(item), 1);
                this.checked[key].selected = false;
                this.sum -= parseInt(item.price);
            }
        }
    };
});
