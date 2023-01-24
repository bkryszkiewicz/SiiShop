
// ARRAYS
const shopItemsData = [
    {
        id:1,
        name: "Thor",
        manufacturer: "Empik",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img1.jpg",
    },
    {
        id:2,
        name: "Gomora",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img2.jpg",
    },
    {
        id:3,
        name: "Gomora",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. balbalbalbala",
        price: 12,
        image: "./img/img2.jpg",
    },
    {
        id:4,
        name: "Gomora",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img2.jpg",
    },
    {
        id:5,
        name: "Gomora",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img3.jpg",
    },
    {
        id:6,
        name: "Gomora",
        manufacturer: "Pop Vinyl",
        description: "",
        price: 12,
        image: "./img/img3.jpg",
    },
    {
        id:7,
        name: "Gomora",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img3.jpg",
    },
    {
        id:8,
        name: "Gomora",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img3.jpg",
    },
];
let basket = [];
let cart =[];
// DOM
let storeOffer = document.querySelector(".store__offer");
let cartOffer = document.querySelector(".cart__offer");

//SHOP PART
function renderProducts() { 
    shopItemsData.forEach((product) => {
        let {id, name, image, manufacturer, description, price} = product;
        storeOffer.innerHTML +=`<div class="product" id="product-id-${id}">       
            <div class="product__info" >
            <img src="${image}" class="product-picture"/>
            <div>
            <h3 class="product__name">${name}</h3>
            <h4 class="product__manufacturer">${manufacturer}</h4>
            </div>
            </div>
            <p class="product__description">${description.substring(0, 70)+"..."}</p>
            
            <div class="product__menu">
                <div class="centered-item">${price}$</div>
                <div class="centered-item quantity" id="${id}">0</div>
            <div class="product__buttons">
                <button class="product__buttons--quantity" onClick="increment(${id})">+</button>
                <button class="product__buttons--quantity" onClick="decrement(${id})">-</button>
            </div>
            <div class="product__buttons--cart-btn centered-item" onClick="addToCart(${id})"> <ion-icon name="cart"></ion-icon>
            </div>
            </div>
            </div>
            ` })
        }

renderProducts();

    function increment(id) {
        let search = basket.find((product) =>
            product.id === id);
         
        if(search===undefined) {
            const item = shopItemsData.find((product) => product.id === id);
            basket.push({
            ...item,
            id: id,
            numberOfUnits: 1,
                });
        } else {
            search.numberOfUnits += 1;
        }        
        update(id)    
    };

    function decrement(id){
        let search = basket.find((product) =>
        product.id === id);

        if(search.numberOfUnits===0) return;
        else {
            search.numberOfUnits -= 1;
        }
        // basket = basket.filter
        update(id)
    };

    function update(id) {
        let search = basket.find((product) =>
        product.id === id);
        document.getElementById(id).innerHTML = search.numberOfUnits;
        console.log(basket);
    };


    function addToCart(id) {
        
        let search = cart.find((product) =>
            product.id === id,);
        let item = basket.find((product) =>
            product.id === id);

        if (item.numberOfUnits === 0) return;
        else if(search===undefined) {
            cart.push({
            ...item,
                });
        renderCartItems(id);
        } else {
            search.numberOfUnits = search.numberOfUnits + item.numberOfUnits;
            
        }
        console.log(cart);
    }

// CART PART

    function renderCartItems(id) {
    cart.forEach((product) => {
        let {name, manufacturer, price, numberOfUnits} = product;
        cartOffer.innerHTML += `<div class="cart__offer--container">
        <input type="checkbox"/>
        <div>${manufacturer}</div>
    <div class="cart_product">
    <input type="checkbox"/>
    <div class="product__name">${name}</div>
    <div class="product__price">${price}</div>
    <div class="quantity">${numberOfUnits}</div>
    <div class="product__buttons">
        <button class="product__buttons--quantity" onClick="increment()">+</button>
        <button class="product__buttons--quantity" onClick="decrement()">-</button>
    </div>
<div class="cart__delete">obrazek</div>
</div>

<div class="cart_offer--footer"></div>

</div>
`})
}


// jeśli manufacturer z basketa === manufakturer który jest w cart
// to dodaj tam gdzie już istnieje

// jeśli nie ma takiego manu w cartcie to stworz nowa OL