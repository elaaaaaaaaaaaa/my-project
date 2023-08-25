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
        name: 'SVR (gel peau seche)',
        image: '1.png',
        price: 50 
    },
    {
        id:2,
        name: 'C+',
        image: '2.jpg',
        price: 60
    },
    {
        id:3,
        name: 'OXI ( peaux grasse)',
        image: '3.jpg',
        price: 30
    },
    {
        id:4,
        name: 'AVENE (gel peau mixte)',
        image: '4.jpg',
        price: 27
    },  
    {
        id:5,
        name: 'URIAGE (gel peau grasse)',
        image: '5.png',
        price: 70
    },    
    {
        id:6,
        name : 'SVR ecran solaire',
        image : '6.jpg',
        price: 51
    },
    {
        id:7,
        name: 'SYNNY (grasse)',
        image: '7.jpg',
        price: 60
    },
    {
        id:8,
        name: 'PRODERMA (peau seche°',
        image: '8.jpg',
        price: 60
    },
    {
        id:9,
        name: 'mask vitamin C + serum',
        image: '9.jpg',
        price: 60
    },
    {
        id:10,
        name: 'GOLD mask',
        image: '10.jpg',
        price: 60
    },  
    {
        id:11,
        name: 'CLAY mask',
        image: '11.jpg',
        price: 60
    },  
    {
        id:12,
        name: 'PACKET : serum + oil + body butter + gommage cream + vitamin E  en promotion',
        image: '12.jpg',
        price: 150
    },    
    {
        id:13,
        name: 'SEPHORA packet',
        image: '13.jpg',
        price: 200
    },   
    {
        id:14,
        name: 'FRE',
        image: '14.jpg',
        price: 53
    },
    {
        id:15,
        name: 'M hydra ',
        image: '15.jpg',
        price: 27
    },   
    {
        id:16,
        name: 'OLAY ',
        image: '16.jpg',
        price: 40
    },
    {
        id:17,
        name: 'AVENE creme hy ',
        image: '17.jpg',
        price: 38
    },  
    {
        id:18,
        name: 'packet E-S-K',
        image: '18.jpg',
        price: 38
    },
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
                <div><img src="./${value.image}"/></div> 
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