const items = document.querySelector(".items")
// console.log(items.children)

items.addEventListener('click',addToCartClicked)

function addToCartClicked(event){
    let button = event.target
    let shopItem = button.parentElement
    console.log(shopItem)
    let title = shopItem.getElementsByClassName("sectionHeader")[0].innerText;
    let imgSrc = shopItem.getElementsByClassName("shopItemImage")[0].src
    let price = shopItem.getElementsByClassName("shopItemPrice")[0].innerText
    
    addItemToCart(title,imgSrc,price)
}


function addItemToCart(title,imgSrc,price){
    
    const cartItems = document.getElementsByClassName("cartItems")[0];
    let cartRow = document.createElement("div")
    let cartHeading = document.getElementById("cartHeading");
    
    if(!addItemToCart){
        cartHeading.innerText = "NO ITEMS ADDED YET"
    }else{
        cartHeading.innerText = "ITEM(S) ADDED"   
    }
    
    let cartRowContent = `
        
    <div class="cartItems">
        <div class="border">
            <h3>${title}</h3>
            <img src="${imgSrc}" alt="">
            <span><h4>${price}</h4></span>
            <button id="btner">pay now</button>
        </div>
    </div>
    `
    cartRow.innerHTML += cartRowContent;
    cartItems.append(cartRow)
    

    
}
