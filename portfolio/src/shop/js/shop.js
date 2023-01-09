// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.

//prevent from erase

let cartList = [];



// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

var total = 0;



    let counter = cartList.length;
 document.getElementById("count_product").innerHTML = counter;




// Exercise 1

function buy(id) {

    var audio = new Audio('images/coin.mp3');
    audio.play();

    let buyItem = products.find(o => o.id === id);

    console.log(buyItem);
    cartList.push(buyItem);
    console.log(cartList);


  
    let counter = cartList.length;
    document.getElementById("count_product").innerHTML = counter;



}



// Exercise 2
function cleanCart() {

    var audio = new Audio('images/jump.mp3');
    audio.play();

    cart = [];
    cartList = [];

    let total  = document.getElementById("total_price");
    let bodyList = document.getElementById("cart_list");
    total.innerHTML = 0;
    bodyList.innerHTML = "No products selected";


    counter =0;
    document.getElementById('count_product').innerHTML = counter;
   
    //console.log(cart);

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array

    applyPromotionsCart()

    let totalPrice = 0;
    for (let prod of cart) {
        totalPrice += prod.quantity * prod.price

    } return totalPrice.toFixed(2);
    console.log(totalPrice);

}

/*/Users/xaxax/Desktop/IT ACADEMY/SPRINT 3/starter-code-frontend-sprint-3-main/js/checkout.js

// Exercise 4

/Users/xaxax/Desktop/IT ACADEMY/SPRINT 3/starter-code-frontend-sprint-3-main/js/shop_2juny.js
function generateCart() {

    cart = [];
    let total  = document.getElementById("total_price");
    let bodyList = document.getElementById("cart_list");
    total.innerHTML = 0;
    bodyList.innerHTML = "";

    for (let i = 0; i<cartList.length; i++){
        let found = cart.find((prod) => prod.id === cartList[i].id);
        
        if(found === cartList[i]){
            let prodIndex = cart.indexOf(found);
            cart[prodIndex].quantity++;
        }else{
            cartList[i].quantity = 1;
            cart.push(cartList[i]);
        }
    }
}

*/
   

// Exercise 5
function applyPromotionsCart() {
for (let prod of cart){
    if (prod.id === 1 && prod.price === 10.5){

        
        if (prod.id === 1 && prod.quantity >= prod.offer.number){
        
        let promo1Price = prod.price - (prod.price * prod.offer.percent/100);
        promo1Price.toFixed(2);
        prod.price = promo1Price;
       
    }
}}

for (let prod of cart){
    if (prod.id === 3 && prod.price === 5){
        for (let prod of cart){
            if (prod.id === 3 && prod.quantity >= 10){
                promo3Price = prod.price - (prod.price * prod.offer.percent/100);
                promo3Price.toFixed(2);
                prod.price = promo3Price;
        }
    }
        
    }

}
    

}



// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom


    let total  = document.getElementById("total_price");
    let bodyList = document.getElementById("cart_list");


    
    addToCart();
    

     total.innerHTML = calculateTotal();

    for(prod of cart){

        bodyList.innerHTML += toString(prod);
 
    }
    function toString(prod){
        let total = prod.quantity * prod.price;
        return `<tr>
        <th scope="row">${prod.name}</th>
        <td>${prod.price}</td>
        <td>${prod.quantity}</td>
        <td>${total.toFixed(2)}<button type="button" class="btn-close" aria-label="Close" onClick=removeFromCart(${prod.id})></button></td>
      </tr>`
    }

    
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {

    cart = [];
    let total  = document.getElementById("total_price");
    let bodyList = document.getElementById("cart_list");
    total.innerHTML = 0;
    bodyList.innerHTML = "";

    for (let i = 0; i<cartList.length; i++){
        let found = cart.find((prod) => prod.id === cartList[i].id);
        
        if(found === cartList[i]){
            let prodIndex = cart.indexOf(found);
            cart[prodIndex].quantity++;
        }else{
            cartList[i].quantity = 1;
            cart.push(cartList[i]);
        }
    }
    


    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {

    var audio = new Audio('images/jump.mp3');
    audio.play();

  for (let i = 0; i<cartList.length; i++){
    if(id === cartList[i].id){
        cartList.splice(i, 1);
        break;
    }
  }

      

    addToCart();
  
    printCart();
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    var audio = new Audio('images/coin.mp3');
    audio.play();

    printCart();
}