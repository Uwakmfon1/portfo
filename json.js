

const CART = []
let products;
const number = document.getElementById("number")

let items = 1;
const container = document.getElementById("container");
async function desmond(){
                products = await fetch('./assets/pro/product.json')
        .then((data)=>data.json());

        let show=[]
        products.forEach((item)=>{
        let display= `
        <div class="food_cart">
                <h2 class="cart_title" id="itemName">${item.name}</h2>
                <img src="${item.image}" class="cart_image" id="itemImage">
                <p class="cart_description" id="itemDescription">${item.description}</p>
                <button data-product="${item.id}" class="btn btn-primary add-to-cart" id="addToCartBtn">Add To Cart</button>
        </div>
        `
        show.push(display);
        })

        container.innerHTML = show.join("");  
        const addToCartBtn = document.querySelectorAll(".add-to-cart");
        addToCartBtn.forEach((button)=>{
                button.addEventListener('click',addToCart)

        })   
        }
        desmond()



        function addToCart(event){
                const buttonClicked = event.target;
                const productId = buttonClicked.dataset["product"];
                
                const product = products.find((item)=>{  //products: elements awaited in async function above  
                                        return item.id == productId;
                        
                        
        }) 


        const productIndexInCart = CART.findIndex(cartProduct => cartProduct.id === product.id);
        console.log(productIndexInCart);
        
        

        if(productIndexInCart > -1){
                // increment quantity
                const productInCart = CART[productIndexInCart];
                productInCart.quantity = productInCart.quantity + 1;
                console.log(productInCart.quantity)
                CART.splice(productIndexInCart, 1, productInCart);
        }
        else{
               // Add product to cart
               product.quantity = 1;
               CART.push(product);
        }
        updateCart()     
        }

                     
function removeFromCart(event){
        const buttonClicked = event.target;
        const productId = buttonClicked.dataset["product"];
        const productIndexInCart = CART.findIndex(cartProduct => cartProduct.id == productId);
        if(productIndexInCart > -1){
                CART.splice(productIndexInCart, 1);
        }
        updateCart();
}

const cartDisplay = document.getElementById("cart");


function updateCart(){  
if(CART.length > 0 ){
        let cartTotal = 0;
        let cartProducts = [];
        document.querySelector("table").classList.remove("d-none");

        cartDisplay.innerHTML="";
        

        CART.forEach((product)=>{                       //product.quantity, (product.price)*quantity[quantityInputs]    new Intl.NumberFormat().format(quantity()) 
                
                let display =
                `
                  <tr>
                    <td>${product.name}</td>
                    <td><input type="number" min="1" value="${product.quantity}" data-product="${product.id}" class="cart-item-quantity"/></td>
                    <td id="price">₦${product.quantity  * product.price}</td>
                    <td><button data-product="${product.id}"
                     class= "btn btn-sm btn-outline-danger btn-remove-from-cart">Remove</button>
                    </td>
                  <tr>
                `;
                cartProducts.push(display);
                const total = document.getElementById("total")
                cartTotal = cartTotal + (product.price * product.quantity);
                total.style.color ='red'
                total.style.padding="0.2em o.6em"
                total.innerHTML="Total:   "+" ₦"+cartTotal;
                
        });
        
cartDisplay.innerHTML = cartProducts.join("");



        const quantityInputs = document.querySelectorAll('.cart-item-quantity');
        quantityInputs.forEach(input=>{
                input.addEventListener('change', (e)=>{
                        // console.log(e.target.value);
                        // console.log(e.target.dataset);
                        let inputVal = e.target.value;
                        let inputDataset = e.target.dataset;
                        const finalVal = added()
                        
                        function added(){
                                return inputVal;
                        }
                        console.log(finalVal)
                })
        });       
}else{
        document.querySelector("table").classList.add("d-none");
}


const removeFromCartButtons = document.querySelectorAll(".btn-remove-from-cart");
removeFromCartButtons.forEach((button)=>{
        button.addEventListener("click",removeFromCart);
})
}

const container1 = document.getElementById("container")


/**
 * find the item with the id
 * update the value of the input
 */