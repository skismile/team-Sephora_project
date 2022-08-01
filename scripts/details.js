let data=JSON.parse(localStorage.getItem("MoreDetails"));

console.log(data);
let D1=document.querySelector("#D1");
let D2=document.querySelector("#D2")

let D_Img=document.createElement("img");
D_Img.src=data.image_link;
let button=document.createElement("button");
button.innerText="Add to Bag"
D1.append(D_Img,button)

let D_brand=document.createElement("h3");
D_brand.innerText=data.brand;

let D_desc=document.createElement("p");
D_desc.innerText=data.description;

let D_price=document.createElement("p");
D_price.innerText="₹"+data.price;

D2.append(D_brand,D_price,D_desc)