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
        name: 'PACKET : vitamin A + oil(riche en vitamines ) + hair butter en promotion(-30%) ',
        image: '1+.jpg',
        price: 80 
    },
    {
        id:2,
        name: 'CURL TALK',
        image: '2+.jpg',
        price: 60
    },
    {
        id:3,
        name: 'ROSE BAE',
        image: '3+.jpg',
        price: 30
    },
    {
        id:4,
        name: ' keratine',
        image: '4+.jpg',
        price: 10
    },  
    {
        id:5,
        name: 'ULTRA DOUX shompoing',
        image: '5+.jpg',
        price: 70
    },    
    {
        id:6,
        name : 'STYLING (curly hair)',
        image : '6+.jpg',
        price: 51
    },
    {
        id:7,
        name: 'mousse (curly)',
        image: '7+.jpg',
        price: 60
    },
    {
        id:8,
        name: 'packet : oil + serum + vetamins +  vitamine A serum + vitamine C serum ( en promotion  40% jusqu à 30 decembre )',
        image: '8+.jpg',
        price: 160
    },
    {
        id:9,
        name: 'serum',
        image: '9+.jpg',
        price: 60
    },
    {
        id:10,
        name: 'cream',
        image: '10+.jpg',
        price: 60
    },  
    {
        id:11,
        name: ' PACKET FOR KIDS ( cream + hair oil + vitaaaaaaaaamiiiins A E D F G Y ) ',
        image: '11+.jpg',
        price: 60
    },  
    {
        id:12,
        name: ' PANTENE ',
        image: '12+.jpg',
        price: 50
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