
// ARRAYS
const shopItemsData = [
    {
        id: 1,
        name: "Thor",
        manufacturer: "Empik",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img1.jpg",
    },
    {
        id: 2,
        name: "Gomora",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 15,
        image: "./img/img2.jpg",
    },
    {
        id: 3,
        name: "Mighty Thor",
        manufacturer: "Empik",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. balbalbalbala",
        price: 20,
        image: "./img/img3.jpg",
    },
    {
        id: 4,
        name: "Bisky",
        manufacturer: "PopStore",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img4.jpg",
    },
    {
        id: 5,
        name: "Kite",
        manufacturer: "PopStore",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img5.jpg",
    },
    {
        id: 6,
        name: "Satoru Gojo",
        manufacturer: "Empik",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. ",
        price: 15,
        image: "./img/img6.jpg",
    },
    {
        id: 7,
        name: "Mahito",
        manufacturer: "Empik",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img7.jpg",
    },
    {
        id: 8,
        name: "Carmela Soprano",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img8.jpg",
    },
    {
        id: 9,
        name: "Cinderella",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 15,
        image: "./img/img9.jpg",
    },
    {
        id: 10,
        name: "Dark Trooper",
        manufacturer: "Empik",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 15,
        image: "./img/img10.jpg",
    },
    {
        id: 11,
        name: "Infinite Deku",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img11.jpg",
    },
    {
        id: 12,
        name: "Care-A-Lot-Bear",
        manufacturer: "Empik",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img12.jpg",
    },
    {
        id: 13,
        name: "Goblin",
        manufacturer: "PopStore",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img13.jpg",
    },
    {
        id: 14,
        name: "Marty Bryde",
        manufacturer: "Empik",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img14.jpg",
    },
    {
        id: 15,
        name: "Wendy Bryde",
        manufacturer: "Empik",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 15,
        image: "./img/img15.jpg",
    },
    {
        id: 16,
        name: "Hulk",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 15,
        image: "./img/img16.jpg",
    },
    {
        id: 17,
        name: "Legolas",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 15,
        image: "./img/img17.jpg",
    },
    {
        id: 18,
        name: "Zeus",
        manufacturer: "PopStore",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img18.jpg",
    },
    {
        id: 19,
        name: "Supreme Strange",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 20,
        image: "./img/img19.jpg",
    },
    {
        id: 20,
        name: "Gohan",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 20,
        image: "./img/img20.jpg",
    },
    {
        id: 21,
        name: "Olivier Mira",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img21.jpg",
    },
    {
        id: 22,
        name: "Riza Hawkeye",
        manufacturer: "PopStore",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img22.jpg",
    },
    {
        id: 23,
        name: "Drax",
        manufacturer: "PopStore",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 20,
        image: "./img/img23.jpg",
    },
    {
        id: 24,
        name: "Mantis",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img24.jpg",
    },
    {
        id: 25,
        name: "Fawkes",
        manufacturer: "PopStore",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 15,
        image: "./img/img25.jpg",
    },
    {
        id: 26,
        name: "Hermione Granger",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img26.jpg",
    },
    {
        id: 27,
        name: "Neville Longbottom",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img27.jpg",
    },
    {
        id: 28,
        name: "Ron Weasley",
        manufacturer: "PopStore",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img28.jpg",
    },
    {
        id: 29,
        name: "Hawkeye",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img29.jpg",
    },
    {
        id: 30,
        name: "Maya Lopez",
        manufacturer: "PopStore",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img30.jpg",
    },
];
let basket = [];
let cart = [];
let manu = [];
var uniqueManu = [];
// DOM
let storeOffer = document.querySelector(".store__offer");
let cartOffer = document.querySelector(".incart__offer--container");
//SHOP PART

function renderProducts() {
    shopItemsData.forEach((product) => {
        let { id, name, image, manufacturer, description, price } = product;
        storeOffer.innerHTML += `<div class="product" id="product-id-${id}">       
            <div class="product__info" >
            <img src="${image}" class="product-picture"/>
            <div class="product__data">
            <h3 class="product__name">${name}</h3>
            <h4 class="product__manufacturer">${manufacturer}</h4>
            </div>
            </div>
            <p class="product__description">${description.substring(0, 70)}</p>
            
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

// QUANTITY SHOP
function increment(id) {
    let search = basket.find((product) =>
        product.id === id);

    if (search === undefined) {
        const item = shopItemsData.find((product) => product.id === id);

        basket.push({
            ...item,
            numberOfUnits: 1,
        });
    } else {
        search.numberOfUnits += 1;
    }
    update(id)
};

function decrement(id) {
    let search = basket.find((product) =>
        product.id === id);

    if (search.numberOfUnits === 0) return;
    else {
        search.numberOfUnits -= 1;
    }

    update(id)
};

function update(id) {
    let search = basket.find((product) =>
        product.id === id);

    document.getElementById(id).innerHTML = search.numberOfUnits;
   
};

// QUANITITY CART

function incrementCart(id) {
    let search = cart.find((product) =>
        product.id === id);

    search.numberOfUnits += 1;
    search.finalTotal = search.numberOfUnits * search.price;

    updateCart(id);
};

function decrementCart(id) {
    let search = cart.find((product) =>
        product.id === id);

    if (search.numberOfUnits === 1) return;
    else if(search === undefined) return;
    else {search.numberOfUnits -= 1;};

    cart = cart.filter((x)=> x.numberOfUnits !== 0);

    search.finalTotal = search.numberOfUnits * search.price;

    updateCart(id);
};

function updateCart(id) {
    let search = cart.find((product) =>
        product.id === id);

    document.getElementById("num" + search.id).innerHTML = search.numberOfUnits;

    renderCartItems();
};

function addToCart(id) {
    let search = cart.find((product) =>
        product.id === id,);
    let item = basket.find((product) =>
        product.id === id);

    if (item.numberOfUnits === 0) return;
    else if (search === undefined) {
        cart.push({
            ...item,
            finalTotal: item.price * item.numberOfUnits,
        })

        manu.push(item.manufacturer)
        manu.forEach((element) =>{
            if(!uniqueManu.includes(element)) {uniqueManu.push(element)}
        }); 
        renderCartItems(id);
            } else {
        search.numberOfUnits = search.numberOfUnits + item.numberOfUnits;
        search.finalTotal = search.numberOfUnits * search.price;
        renderCartItems(id);
    };
}

function deleteItem(id) {
    cart = cart.filter((product) =>
        product.id !== id);
   
    renderCartItems()
}

// CART PART

function renderCartItems() {
    
    cartOffer.innerHTML = "";
    uniqueManu.forEach((manu)=>{

        cartOffer.innerHTML += `  <div class="incart__manu" id="incart${manu}">
        <div class="incart">
            <input type="checkbox" id="optionAll${manu}" onClick="checkAll(this)"/>
            <h4 class="incart__manufacturer" >${manu}</h4>
        </div>
        </div> 
        <div id="${manu}"></div>
        <div class="incart__footer" id="total${manu}">Total: $</div>`

        
        manufacturerCalculation(manu);
    }) 
 
    cart.forEach((product) => {
        let { id, name, manufacturer, price, numberOfUnits} = product;

        document.getElementById(manufacturer).innerHTML += `
        <div class="incart__grid" ">
        <div class="incart__product">
            <input type="checkbox" onclick="showId(${id})" id="checkbox${manufacturer}"/>
        <div class="incart__name">${name}</div>
        <div class="incart__price" id="${manufacturer}price">${price}</div>
        <div class="incart__quantity" id="num${id}">${numberOfUnits}</div>
        <div class="incart__buttons">
            <button class="product__buttons--quantity" onClick="incrementCart(${id})">+</button>
            <button class="product__buttons--quantity" onClick="decrementCart(${id})">-</button>
        </div>
        </div>
        <div class="incart__delete" onClick="deleteItem(${id})"><ion-icon name="trash-outline"></ion-icon></div>

        </div>
        </div>
        </div>` })

        calculationGrandTotal()

        
};

function manufacturerCalculation(manu) {
    let arrmanu = cart.filter((x)=> x.manufacturer===manu);
    let manuamount = arrmanu.map((x) => x.finalTotal).reduce((x, y)=>x+y,0);
    let totalManufacturer = document.getElementById("total"+manu);
    
    totalManufacturer.innerHTML = "Total: "+manuamount+"$";

    if(manuamount ===0) {document.getElementById("incart"+manu).innerHTML = "";
    totalManufacturer.innerHTML = "";
    } else return;
}

function calculationGrandTotal(){
    let amount = cart.map((x) => x.finalTotal).reduce((x, y)=>x+y,0);
    let totaleGrande = document.getElementById("grandTotal");

    totaleGrande.innerHTML = ("Grand total: " +amount+ " $");

    if(cart.length ===0) {cartOffer.innerHTML = "Your cart is empty."
    } else return;
}


// CHECKBOXES
