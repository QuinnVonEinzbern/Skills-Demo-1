class Order {
    
        constructor (name, price, town, shipping ) {
        
            this.name = name
            this.price = parseInt(price)
            this.town = town
            this.shipping = parseInt(shipping)
        }



        cartDetails () {
        
            return "You have just added " + this.name + " (\u20AC " + this.price + ") to your cart."

        }


    
        shippingDetails () {
         var total = this.shipping + this.price

            return "Item Price: \u20AC" + this.price + ". Order Total inc Delivery to " + this.town + ": " + total

        }

}

    var myOrder = new Order("Baseball Bat", 20 ,"Heimdallr", 5 )
   
    console.log(myOrder.cartDetails ())
    console.log(myOrder.shippingDetails ())