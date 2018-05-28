describe("ShoppingCart", () => {
    it("Should return a string 'Your cart is full' if add more than 5 items", ()=>{
        const shoppingCart = new ShoppingCart();

        shoppingCart.add([{
            itemName: "camera",
            itemId: 246,
            price: 799,
        }])
        shoppingCart.add([{
            itemName: "Iphone",
            itemId: 2,
            price: 1089,
        }])

        expect(shoppingCart.add([{
            itemName: "sofa",
            itemId: 259,
            price: 474,
        }])).toBe("Your cart is full")
    })

    
    
    it("Should return a string 'Your cart is empty' if remove an item from empty shopping cart", ()=>{
        const shoppingCart = new ShoppingCart();

        expect(shoppingCart.remove()).toEqual([{
            itemName: "apple",
            itemId: 148,
            price: 5,
        },{
            itemName: "chair",
            itemId: 122,
            price: 120,
        }])
        expect(shoppingCart.remove()).toEqual([{
            itemName: "apple",
            itemId: 148,
            price: 5,
        }])
        expect(shoppingCart.remove()).toEqual([])
        expect(shoppingCart.remove()).toBe(["Your cart is empty"])
    })

   
   
    it("Should return discount 50% if it discount items more than 50%", function(){
        const shoppingCart = new ShoppingCart();

        expect(shoppingCart.discount()).toEqual()
    })

    
    
    
    it("Should return the total of all items in the cart when I plus them", function(){
        const shoppingCart = new ShoppingCart();

        expect(shoppingCart.total()).toEqual(2123)

        
        
        const shoppingCart1 = new ShoppingCart();
        expect(shoppingCart1.discount(90)).toEqual()
        expect(shoppingCart1.total()).toEqual(1061.5)

        
        
        const shoppingCart2 = new ShoppingCart();
        expect(shoppingCart2.discount(20)).toEqual()
        expect(shoppingCart2.total()).toEqual(1698.4)
    })

    
    
    
    it("Should return the cuttent items when I use items fuction in my cart", function(){
        const shoppingCart = new ShoppingCart();

        expect(shoppingCart.items()).toEqual([{
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
        }])
    })
})