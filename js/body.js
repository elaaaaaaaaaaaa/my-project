// Get references to the DOM elements
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.quantity');
// Event listener to open shopping cart
openShopping.addEventListener('click',()=>{
    body.classList.add('active');
})
// Event listener to close shopping cart
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active');
})
// Define an array of product objects
let products = [
    // Each product has an id, name, image, and price
    {
        id: 1,
        name: 'NIVEA body lotion',
        image: '1-.jpg',
        price: 25 
    },
    {
        id:2,
        name: 'ROSA body lotion',
        image: '2-.jpg',
        price: 25
    },
    {
        id:3,
        name: 'VASELINE',
        image: '3-.jpg',
        price: 13
    },
    {
        id:4,
        name: 'ALOE body lotion',
        image: '4-.jpg',
        price: 27
    },  
    {
        id:5,
        name: 'gel douche',
        image: '5-.jpg',
        price: 17
    },    
    {
        id:6,
        name : 'DOVE',
        image : '6-.jpg',
        price: 51
    },
    {
        id:7,
        name: 'body lotion (chacolate)',
        image: '7-.jpg',
        price: 60
    },
    {
        id:8,
        name: 'TRESOR',
        image: '8-.jpg',
        price: 60
    },
    {
        id:9,
        name: 'GOMMAGE',
        image: '9-.jpg',
        price: 60
    },
    {
        id:10,
        name: 'SPA BODY LOTION',
        image: '10-.jpg',
        price: 60
    },  
    {
        id:11,
        name: 'MY WAY ferfum',
        image: '11-.jpg',
        price: 60
    },  
    {
        id:12,
        name: 'oily body lotion',
        image: '12-.jpg',
        price: 150
    },    
    {
        id:13,
        name: 'gel douche riche en vitamines + effet gommage',
        image: '13-.jpg',
        price: 200
    },   
    {
        id:14,
        name:'gommage',
        image: '14-.jpg',
        price: 53
    },
    {
        id:15,
        name: 'BODY BUTTER',
        image: '15-.jpg',
        price: 27
    },   
    {
        id:16,
        name: 'BODY BUTTER (starwbery)',
        image: '16-.jpg',
        price: 40
    },
    {
        id:17,
        name: 'HYDRA ',
        image: '17-.jpg',
        price: 38
    },  
    {
        id:18,
        name: 'MISS DIOR',
        image: '18-.jpg',
        price: 38
    },        
];

let listCards= [];
// Initialize the app by populating the product list
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
          <img  src="/assets/${value.image}"/>
          <div class="title">${value.name}</div>
          <div class="price">${value.price.toLocaleString()}</div>
          <button onclick="addToCard(${key})">Add to cart</button>
          `;
          list.appendChild(newDiv);
        })
}
// Add a product to the shopping cart
initApp();
function addToCard(key){
    if(listCards[key]==null){
        listCards[key]= products[key];
        listCards[key].quantity= 1;
    }
    reloadCard();
}
// Reload the shopping cart with updated items
function reloadCard(){
    listCard.innerHTML='';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML=`
                <div><img src="/assets/${value.image}"/></div> 
                <div>${value.name} </div>
                <div>${value.price.toLocaleString()}</div>  
                
                <div>
                    <button onclick="changeQuantity(${key} , ${value.quantity - 1})"> - </button>
                    <div class"count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key},${value.quantity + 1})"> + </button>
                <div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
// Change the quantity of a product in the shopping cart
function changeQuantity(key,quantity){
    if(quantity==0){
        delete listCards[key];
    }
    else{
        listCards[key].quantity= quantity;
        listCards[key].price= quantity * products[key].price;
    }
    reloadCard();
}