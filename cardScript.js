
//this Object was generated with ratingsGenerator.js
//then i just copied it from mozilla web dev console
const ratings = {
  0: ["🤍", "🤍", "🤍", "🤍", "🤍"],
  1: ["💛", "🤍", "🤍", "🤍", "🤍"],
  2: ["💛", "💛", "🤍", "🤍", "🤍"],
  3: ["💛", "💛", "💛", "🤍", "🤍"],
  4: ["💛", "💛", "💛", "💛", "🤍"],
  5: ["💛", "💛", "💛", "💛", "💛"],
};

let connected=false;
if(sessionStorage.getItem("isConnected")!==null){
  if(sessionStorage.getItem("isConnected")==="true"){
    connected=true;
  }
}

const registeredUsers=[{"user":"adil","password":"123"},{"user":"simo","password":"123"}];

const cartIcon=document.createElement("span");
cartIcon.classList.add("material-symbols-outlined");
cartIcon.classList.add("bigger");
cartIcon.textContent="shopping_cart";



let panier=[];
if(connected){
  if(sessionStorage.getItem("panier")!=null)
  panier=JSON.parse(sessionStorage.getItem("panier"));
}
//import products from './products.js'
// this object was fetchedthrough a call to the fake store api
// https://fakestoreapi.com/
const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3, count: 400 },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: { rate: 2.2, count: 140 },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: { rate: 2.6, count: 235 },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: { rate: 3.8, count: 679 },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: { rate: 4.5, count: 146 },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: { rate: 3.6, count: 145 },
  },
];

const panierCount=document.createElement("span");
panierCount.classList.add("panierCount");
panierCount.textContent="0";

for(let i=0;i<20;i++){
    if(i%3===0)
    products[i].modifier="special";
    else if(i%3==1){
        products[i].modifier="discount";
    }
        else
        products[i].modifier="nouveau";
    
}


// create scrollers

const scrollerPromos=document.createElement("div");
const scrollerNouveautes=document.createElement("div");
const scrollerSpecial=document.createElement("div");

scrollerNouveautes.id="NEWS";
scrollerPromos.id="PROMOS";
scrollerSpecial.id="SPECIALS";


const scrollers=[scrollerPromos,scrollerSpecial,scrollerNouveautes];

scrollers.forEach(scroller=>{

    scroller.classList.add("scrollerContainer");
    scroller.animated="true";
})

// create card containers
const promos=document.createElement("ul");
const nouveautes=document.createElement("ul");
const offresSpeciales=document.createElement("ul");

const listes=[promos,offresSpeciales,nouveautes];

listes.forEach(lis=>{
    lis.classList.add("cardFlexContainer");
})

scrollerPromos.appendChild(promos);
scrollerNouveautes.appendChild(nouveautes);
scrollerSpecial.appendChild(offresSpeciales);


// remove the i from the par name
function productToCard(product ){
    // this is just for auto completion TOREMOVE
    let card= document.createElement("li");
    let imgcontainer=document.createElement("div");
    let image=document.createElement("img");
    let textual=document.createElement("div");

    card.classList.add("card");
    imgcontainer.classList.add("imageContainer");
    image.src=product.image;
    image.classList.add("productImage");

    textual.classList.add("productText");

    card.appendChild(imgcontainer);
    imgcontainer.appendChild(image);
    card.appendChild(textual);

    let productTitle=document.createElement("h4");
    productTitle.textContent=product.title.slice(0,30)+"...";
    productTitle.classList.add("productTitle");
    let productDescription=document.createElement("p");
    productDescription.textContent=product.description.slice(0,30) +"...";
    productDescription.classList.add("productDescription");

    let productRating=document.createElement("p");
    productRating.classList.add("productRating");
    productRating.textContent=ratings[Math.round(product.rating.rate)].join("   ");

    let productPrice=document.createElement("p");
    productPrice.classList.add("productPrice");
    productPrice.textContent=((parseFloat(product.price)*10).toFixed(2) +" DH");

    textual.appendChild(productTitle);
    textual.appendChild(productDescription);
    textual.appendChild(productPrice);
    textual.appendChild(productRating);

  

    let button =document.createElement("button");
    button.classList.add("productButton");
    button.id=`buttonProduct${product.id}`;
    button.addEventListener("click",(event)=>{if(connected){
        panier.push(products.find((element)=>{
        console.log(element);

        return ""+element.id===event.target.id.slice("buttonProduct".length);
        }))
        console.log(event.target.id.slice("buttonProduct".length))
        panier=((data)=>{
          return [...new Set(data)]

        })(panier);

        
          // TO DO if Connected add the visual effect to show a smaller version of the cart
          // Add also a counter == Small User notification to show that the cart has been updated
          // use panier.length should i make the element disappear? or change the button text to remove? 
          // see later
          panierCount.textContent=panier.length;
          panierCount.classList.add("panierAnimate");
          setTimeout(()=>{
            panierCount.classList.remove("panierAnimate");
          },500);
          sessionStorage.setItem("panier",JSON.stringify(panier));

          console.log("todo");
        }

    });
    button.textContent="Add to Cart";
    card.appendChild(button);
    return card;
}

let specialCards=[];
let promoCards=[];
let nouveauCards=[];


for(let i=0;i<20;i++){
    if(products[i].modifier==="special"){
        specialCards.push(productToCard(products[i]));
    }
    if(products[i].modifier==="discount"){
        promoCards.push(productToCard(products[i]));
    }
    if(products[i].modifier==="nouveau"){
        nouveauCards.push(productToCard(products[i]));
    }
}

for(let i=0;i<20;i++){
    if(products[i].modifier==="special"){
        specialCards.push(productToCard(products[i]));
    }
    if(products[i].modifier==="discount"){
        promoCards.push(productToCard(products[i]));
    }
    if(products[i].modifier==="nouveau"){
        nouveauCards.push(productToCard(products[i]));
    }
}

specialCards.forEach(carte=>{
  offresSpeciales.appendChild(carte);  
})

promoCards.forEach(carte=>{
    promos.appendChild(carte);
})
nouveauCards.forEach(carte=>{
    nouveautes.appendChild(carte);
})


specialCards.forEach((arr=>{
  arr.addEventListener("mouseenter",()=>{
    offresSpeciales.classList.add("pausedAni");
    })
  

  arr.addEventListener("mouseleave",()=>{
    offresSpeciales.classList.remove("pausedAni");
    })
  
}));
promoCards.forEach((arr=>{
  arr.addEventListener("mouseenter",()=>{
    promos.classList.add("pausedAni");
    })
  

  arr.addEventListener("mouseleave",()=>{
    promos.classList.remove("pausedAni");
    })
  
}));

nouveauCards.forEach((arr=>{
  arr.addEventListener("mouseenter",()=>{
    nouveautes.classList.add("pausedAni");
    })
  

  arr.addEventListener("mouseleave",()=>{
    nouveautes.classList.remove("pausedAni");
    })
  
}));



const mainEntry=document.createElement("div");
mainEntry.classList.add("homeContainer");

// Generate the banner (logo navbar search area + login + cart button)

// logo
const logoDiv=document.createElement("div");
const logoImage=document.createElement("img");
const logoAnchor=document.createElement("a");

logoImage.src="./logo.png";
logoAnchor.href="./index.html";
logoDiv.id="logo";
logoDiv.appendChild(logoAnchor);
logoAnchor.appendChild(logoImage);
//navbar

const navigation=document.createElement("nav");
const navlinks=["Home","Gallery","Cart","Paiment","About"];
navlinks.forEach(str=>{
let divi=document.createElement("a");
divi.id=str+"ID";
divi.classList.add("navLink");
divi.href="./"+str.toLowerCase()+".html";
divi.innerText=str;
if(str==="Home"){
  divi.href="./index.html";
}

navigation.appendChild(
divi
);

})
navigation.id="navbar";


// search area 
const inputSearch=document.createElement("input");
inputSearch.type="text";
const buttonSearch=document.createElement("button");
const spanG=document.createElement("span");
spanG.classList.add("material-symbols-outlined");
spanG.textContent="search";

const searchArea=document.createElement("div");
searchArea.classList.add("searchContainer");
searchArea.appendChild(inputSearch);
searchArea.appendChild(spanG);

const loginbutton=document.createElement("button");
loginbutton.textContent="login";
searchArea.appendChild(loginbutton);

/*
document.body.appendChild(scrollerSpecial);
document.body.appendChild(scrollerPromos);
document.body.appendChild(scrollerNouveautes);
*/
const footer=document.createElement("footer");
footer.innerHTML="<h1> here a footer should be sitting </h1>";

const header1=document.createElement("h5");
const header2=document.createElement("h5");
const header3=document.createElement("h5");

header1.textContent="Offres Spéciales";
header2.textContent="Promotions";
header3.textContent="Nouveautés";

const headers=[header1,header2,header3];

headers.forEach(h=>{

  h.classList.add("scrollerHeader");
})

const formulaire=document.createElement("form");

formulaire.classList.add("loginForm");

const usernameLabel=document.createElement("label");
usernameLabel.htmlFor="username";
usernameLabel.textContent="Username"
const inputUN=document.createElement("input");
inputUN.type="text";
inputUN.id="username";
formulaire.action="#";
const passLabel=document.createElement("label");
passLabel.htmlFor="password";
passLabel.textContent="Password";

const inputPass =document.createElement("input");
inputPass.type="password";
inputPass.id="password";

const inputSubmit=document.createElement("input");
inputSubmit.type="submit";

const registerLabel=document.createElement("label");

registerLabel.textContent="Don't have an account?";
const registerButton=document.createElement("button");

registerLabel.htmlFor="register";
registerButton.textContent="Register";
registerButton.id="register";


formulaire.appendChild(usernameLabel);
formulaire.appendChild(inputUN);
formulaire.appendChild(passLabel);
formulaire.appendChild(inputPass);
formulaire.appendChild(inputSubmit);
formulaire.appendChild(registerLabel);
formulaire.appendChild(registerButton);


let namedLogin1= ()=>{
  header1.insertAdjacentElement("afterend",formulaire);
   scrollerSpecial.classList.add("smaller");
    header1.classList.add("smaller");
loginbutton.disabled=true;
  
}


loginbutton.addEventListener("click",namedLogin1

 // header1.insertAdjacentElement("afterend",formulaire);
 /* scrollers.forEach(s=>{
s.classList.add("smaller");

  })

  headers.forEach(h=>{
    h.classList.add("smaller");
    
      })*/
  //  scrollerSpecial.classList.add("smaller");
  //  header1.classList.add("smaller");
//loginbutton.disabled=true;
  
);

mainEntry.appendChild(logoDiv);
mainEntry.appendChild(navigation);
mainEntry.appendChild(searchArea);
mainEntry.appendChild(header1);
mainEntry.appendChild(scrollerSpecial);
mainEntry.appendChild(header2);
mainEntry.appendChild(scrollerPromos);
mainEntry.appendChild(header3);
mainEntry.appendChild(scrollerNouveautes);
mainEntry.appendChild(footer);

document.body.appendChild(mainEntry);


formulaire.addEventListener("submit",(event)=>{
  //event.preventDefault();
  console.log("we are answering the submit");
let uname=inputUN.value;
let upass=inputPass.value;
console.log(uname);
console.log(upass);

let NamedCallback2=()=>{
   //TODO 
      // Disconnecting means changing the button to login removing the event listener
      // adding the loggin eventListener
      // removing connected from session storage and user
      connected=false;
      sessionStorage.setItem("isConnected","false");
      sessionStorage.removeItem("user");
      //loginbutton.disabled=false;
      loginbutton.textContent="login";
      loginbutton.removeEventListener("click",NamedCallback2);
      loginbutton.addEventListener("click",namedLogin1);
      panierCount.remove();
      cartIcon.remove();



}


registeredUsers.forEach((credential)=>{
  console.log("login should work");
  if((credential.user===uname)&&(credential.password===upass)){


    searchArea.appendChild(cartIcon);
    searchArea.appendChild(panierCount);

    connected=true;
    console.log("login should work");
    sessionStorage.setItem("isConnected","true");
    sessionStorage.setItem("user",uname);
    loginbutton.disabled=false;
    loginbutton.textContent="disconnect";
    loginbutton.removeEventListener("click",namedLogin1);

   // header1.insertAdjacentElement("afterend",formulaire);
   // scrollerSpecial.classList.add("smaller");
   //  header1.classList.add("smaller");
   formulaire.remove();
    scrollerSpecial.classList.remove("smaller");
    header1.classList.remove("smaller");
   
   loginbutton.addEventListener("click",NamedCallback2
      //TODO 
      // Disconnecting means changing the button to login removing the event listener
      // adding the loggin eventListener
      // removing connected from session storage and used
     // console.log("Implement diconnection mechanism")
    )
  }

})

})

sessionStorage.setItem("navbar",navigation.outerHTML);
sessionStorage.setItem("logo",logoDiv.outerHTML);
sessionStorage.setItem("searchArea",searchArea.outerHTML);
sessionStorage.setItem("stored","true");