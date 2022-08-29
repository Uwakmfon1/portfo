"use strict"
const selectOptions = document.getElementById("selectOptions");
console.log(selectOptions);

async function awaiting(){
    try{
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        return await data.json();
        
    }catch(error){
        console.log(error);
    }
}

async function fetching(id){
    const url = await awaiting()
    
    const value1 = document.getElementById("value1")
    const value2 = document.getElementById("value2")

    const foundUser = url.find(user =>user.id == id)
    console.log(foundUser)
    value1.value = foundUser.name
    value2.value = foundUser.id;

}

selectOptions.addEventListener('change',(e)=>{
    fetching(e.target.value); 
})

const container = document.querySelector(".container");
async function display(){
    let url = await awaiting();
    console.log(url);
    let html = ''
    url.forEach(item=>{
        
        let htmlSegment = `<div class="user">
       name: <span>${item.name}</span><br>
       username: <span>${item.username}</span><br><br>
        </div>`;
        html += htmlSegment;
    })
    container.innerHTML = html;
}
display();

const array =[
    {id:123,name:'saraj'},
    {id:673,name:'asj'},
    {id:131,name:'subo'},
    {id:342,name:'epraim'}
]
// let find  = array.find(item =>{return item.id === 673}) || {name:'unknown'};
let find = array.find(item => item.id == 342);
console.log(find);





const elem = document.getElementById("elem");
async function getter(){
    let getting = await fetch('./assets/pro/product.json')
    .then((data)=>data.json());

    let html=''
    getting.forEach((item)=>{
        let display= `
        <div class="food_cart" >
            
            <h3>food samples</h3>
            <img src="${item.image}" alt="" >
            <h2 id="description">Description</h2>
            <p>${item.description}</p>
            <h4>price:${item.price}</h4>
            
        <button type="button" class="btn btn-primary" id="cart">Add to cart</button>
        </div>
        `
        function addItemToCart(event){
            let button = document.getElementById("cart")
            button.addEventListener("click",()=>{
            let shopItem = button.parentElement
            let title = shopItem.getElementsByClassName("food_cart")[3].innerText;
            console.log(title)
            })
            
        }
        html += display;
       
    })
    elem.innerHTML=html; 
}
getter();




async function js(){
try{
    let res = await fetch('./assets/pro/product.json')
    return await res.json();
    
    }catch(error){
        console.log(error)
    }
}


async function select(id){
    let fetching = await js();
    
    const SELECT = document.getElementById("SELECT");
    const display = document.getElementById("display");
    const display2 =document.getElementById("display2");

    const foundUser = fetching.find(user => user.id == id);

    display.value = foundUser.name;
    display2.value = foundUser.description;
}

