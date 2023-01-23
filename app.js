// funkcja dodawania na buttonie
// funkcja odejmowania na buttonie
const productsArr = [
    {
        id:1,
        name: "Thor",
        manufacturer: "Empik",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12+"$",
        image: "/SiiShop/img/img1.jpg",
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
        id:2,
        name: "Gomora",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. balbalbalbala",
        price: 12,
        image: "./img/img2.jpg",
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
        id:2,
        name: "Gomora",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img3.jpg",
    },
    {
        id:2,
        name: "Gomora",
        manufacturer: "Pop Vinyl",
        description: "",
        price: 12,
        image: "./img/img3.jpg",
    },
    {
        id:2,
        name: "Gomora",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img3.jpg",
    },
    {
        id:2,
        name: "Gomora",
        manufacturer: "Pop Vinyl",
        description: "Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall. Comes with a clear, built-in stand. Vinyl bobblehead is 11.6 cm tall.",
        price: 12,
        image: "./img/img3.jpg",
    },
]
console.log(productsArr);

// const prod1 = document.querySelector(".store__offer");

function showProducts(){
    productsArr.forEach((product) => {
    document.querySelector(".store__offer").innerHTML +=`<div class="product">       
            <div class="product__info">
            <img src="${product.image}" class="product-picture"/>
            <div>
            <h3 class="product__name">${product.name}</h3>
            <h4 class="product__manufacturer">${product.manufacturer}</h4>
            </div>
            </div>
            <p class="product__description">${product.description.substring(0, 70)+"..."}</p>
            
            <div class="product__menu">
                <div class="centered-item">${product.price}$</div>
                <div class="centered-item"></div>
            <div class="product__buttons">
                <button class="product__buttons--amount">+</button>
                <button class="product__buttons--amount">-</button>
            </div>
            <div class="product__buttons--cart-btn centered-item"> <ion-icon name="cart"></ion-icon>
            </div>
            </div>
            </div>
        ` })
    }
    showProducts();