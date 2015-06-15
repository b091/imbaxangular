app.factory('BasketController', function() {

    return {
        sum: 0,
        items: [],
        checked: {},
        getKey: function(id) {
            return 'id_' + id;
        },
        add: function(item) {
            var key = this.getKey(item.id);
            this.initElement(key);
            this.items.push(item);
            this.checked[key].selected = true;
            this.sum += parseInt(item.price);
        },
        initElement: function(key){
            this.checked[key] = this.checked[key] || {quantity: 1};
        },
        remove: function(item) {
            this.items.splice(this.items.indexOf(item), 1);
            this.checked[this.getKey(item.id)].selected = false;
            this.sum -= parseInt(item.price);
        },
        contains: function(item) {
            return this.items.indexOf(item) >= 0;
        },
        isSelected: function(id) {
            return this.checked[this.getKey(id)] && this.checked[this.getKey(id)].selected;
        },
        setQuantity: function(id) {
            console.log(this.checked[this.getKey(id)]);
        }
    };
});
