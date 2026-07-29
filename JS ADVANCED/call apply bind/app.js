let product = {
    name :"pakola",
    quantity : "500ml",
    price: 100,
}

     function showPrice (...kucbi){
    //   console.log(this.quantity);
           let[name,price] =kucbi     
        //  console.log(this[price]);                    
    }




let product2 = {
    name :"pakola 2",
    quantity : "700ml",
    price: 150,
}


// showPrice.call(product, "name","price")
// showPrice.apply(product2, ["name" , "price"])

let bindNaiReturnKiya = showPrice.bind(product2, "name")
console.log(bindNaiReturnKiya());


