let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.quantity');

openShopping.addEventListener('click',()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active');
})
// Define an array of product objects
let products = [
    // Each product has an id, name, image, and price
    {
        id: 1,
        name: 'joué',
        image: '1--.jpg',
        price: 150 
    },
    {
        id:2,
        name: 'bibron',
        image: '2--.jpg',
        price: 10
    },
    {
        id:3,
        name: 'baby POWDER',
        image: '3--.jpg',
        price: 30
    },
    {
        id:4,
        name: 'PACKET enfant',
        image: '4--.jpg',
        price: 27
    },  
    {
        id:5,
        name: 'GIFT for baby',
        image: '5--.jpg',
        price: 70
    },    
    {
        id:6,
        name : 'MINI BED',
        image : '6--.jpg',
        price: 51
    },
    {
        id:7,
        name: 'IDK',
        image: '7--.jpg',
        price: 60
    },
    {
        id:8,
        name: 'MOM packet',
        image: '8--.jpg',
        price: 159
    },
    {
        id:9,
        name: 'body lotions',
        image: '9--.jpg',
        price: 60
    },
    {
        id:10,
        name: 'body lotion',
        image: '10--.jpg',
        price: 60
    },  
    {
        id:11,
        name: 'joué',
        image: '11--.jpg',
        price: 60
    },  
    {
        id:12,
        name: 'bibrons',
        image: '12--.jpg',
        price: 150
    },    
    {
        id:13,
        name: '',
        image: '13--.jpg',
        price: 200
    },   
    {
        id:14,
        name: 'For girls',
        image: '14--.jpg',
        price: 270
    },
    {
        id:15,
        name: 'For boys',
        image: '15--.jpg',
        price: 270
    }
];

let listCards= [];
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
initApp();
function addToCard(key){
    if(listCards[key]==null){
        listCards[key]= products[key];
        listCards[key].quantity= 1;
    }
    reloadCard();
}
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