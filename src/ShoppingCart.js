class ShoppingCart {
    constructor(items){
       this.items = [{
            itemName: "apple",
            itemId: 148,
            price: 5,
        },{
            itemName: "chair",
            itemId: 122,
            price: 120,
        },{
            itemName: "laptop",
            itemId: 1589,
            price: 1998,
        }]
    }

    add(product){
        if(this.items.length<5){
            this.items.push(product)
        }else {
            return "Your cart is full"
         }
    }

    remove(){
        if(this.items.length<1){
            return "Your cart is empty"
        }else {
            this.items.pop()
         }
    }


    items(){
        return this.items;
    }
}