const url_1="https://sephoramasaiapi.herokuapp.com/mackupp";
const url_2="https://sephoramasaiapi.herokuapp.com/hair";

let container1=document.getElementById("add-product-div1")
let container2=document.getElementById("add-product-div2")
let container3=document.getElementById("add-product-div3")
let container4=document.getElementById("add-product-div4")
let container5=document.getElementById("add-product-div5")
let container6=document.getElementById("add-product-div6")

async function getData(url){
    try{
        let res=await fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
        let data=await res.json()
        console.log(data);
        return data;
        
    }catch(err){
        console.log(err)
    }
}

let data1=await getData(url_1)
let data2=await getData(url_2)
function appendFunc(data,container,j){
    container.innerHTML=null;
        let count=0
       while(count<4){
            let div=document.createElement("div")
            let img=document.createElement("img")
            img.src=data[j].api_featured_image;

            let offerdiv=document.createElement("div");
            offerdiv.setAttribute("class","offerdiv");
            let offericon=document.createElement("img");
            offericon.setAttribute("id","offericonimg")
            offericon.src="https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png";
            let offerword=document.createElement("h5");
            offerword.setAttribute("id","offerword")
            offerword.innerText="OFFER";
            offerdiv.append(offericon,offerword);

            let brandname=document.createElement("p")
            brandname.setAttribute("class","brandname")
            brandname.innerText=data[j].brand;
            let productName=document.createElement("p")
            productName.setAttribute("class","productname")
            productName.innerText=data[j].name;
            let price=document.createElement("p")
            price.setAttribute("class","productdivprice")
            price.innerText=`Rs.${data[j].price}`;

            let cartdiv=document.createElement("div");
            cartdiv.setAttribute("class","cartdiv");

            let bagimgdiv=document.createElement("div");
            let cartimg=document.createElement("img")
            cartimg.src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png";
            cartimg.addEventListener("click",function(){
                addtocartFunc(data[j-1]);
                
            });
            let addtobag=document.createElement("h5");
            addtobag.setAttribute("id","shopnowid")
            addtobag.innerText="SHOP NOW";

            let favimgdiv=document.createElement("div");
            let favimg=document.createElement("img");
            favimg.src="https://cdn-icons-png.flaticon.com/128/535/535285.png";
            favimg.addEventListener("click",function(){
                addtofavFunc(data[j-1]);
            });
            let addtofav=document.createElement("h5");
            addtofav.setAttribute("id","addfavid")
            addtofav.innerText="FAVOURITE";

            bagimgdiv.append(cartimg,addtobag);
            favimgdiv.append(favimg,addtofav)
            cartdiv.append(bagimgdiv,favimgdiv)
            div.append(cartdiv)

            div.append(img,offerdiv,brandname,productName,price)
            container.append(div)
            //console.log(j+"value of i")
            j++
            count++
       }


    return data;
}

// add to cart page
var addToCartArr=JSON.parse(localStorage.getItem("products")) || [];//aei key ta dekhte hbe
function addtocartFunc(ele){
    console.log(ele.price)
    addToCartArr.push(ele);
    localStorage.setItem("products",JSON.stringify(addToCartArr));
    alert("Product added successfully!")
}
//add to favourite page
var addToFavArr=JSON.parse(localStorage.getItem("favourites")) || [];//aei key ta dekhte hbe
function addtofavFunc(ele){
    console.log(ele.price)
    addToFavArr.push(ele);
    localStorage.setItem("favourites",JSON.stringify(addToFavArr));
    alert("Product added to favorite")
}


let reData1=appendFunc(data1,container1,0);
let reData2=appendFunc(data2,container2,0);
let reData3=appendFunc(data1,container3,0);
let reData4=appendFunc(data2,container4,0);
let reData5=appendFunc(data1,container5,0);
let reData6=appendFunc(data2,container6,0);
let j=0;
function prev1(){
    document.querySelector(".show-product-div>div:first-child").style.color="deeppink";
    if(j==0){j=reData1.length-4}
    j--
    appendFunc(reData1,container1,j)
}
function next1(){
    document.querySelector(".show-product-div>div:last-child").style.color="deeppink";
    j++
    if(j>reData1.length-4){j=0}
    appendFunc(reData1,container1,j)
}

function prev2(){
    if(j==0){ j=reData2.length-4}
    j--
    appendFunc(reData2,container2,j)
}
function next2(){
    j++
    if(j>reData2.length-4){j=0}
    appendFunc(reData2,container2,j)
}

function prev3(){
    if(j==0){j=reData3.length-4}
    j--
    appendFunc(reData3,container3,j)
}
function next3(){
    j++
    if(j>reData3.length-4){j=0}
    appendFunc(reData3,container3,j)
}

function prev4(){
     if(j==0){j=reData4.length-4 }
    j--
    appendFunc(reData4,container4,j)
}
function next4(){
    j++
    if(j>reData4.length-4){j=0}
    appendFunc(reData4,container4,j)
}

function prev5(){
    if(j==0){j=reData5.length-4}
    j--
    appendFunc(reData5,container5,j)
}
function next5(){
    j++
    if(j>reData5.length-4){j=0}
    appendFunc(reData5,container5,j)
}

function prev6(){
    if(j==0){j=reData6.length-4}
    j--
    appendFunc(reData6,container6,j)
}
function next6(){
    j++
    if(j>reData6.length-4){j=0}
    appendFunc(reData6,container6,j)
}
window.prev1=prev1;
window.next1=next1;
window.prev2=prev2
window.next2=next2;
window.prev3=prev3;
window.next3=next3;
window.prev4=prev4;
window.next4=next4;
window.prev5=prev5;
window.next5=next5;
window.prev6=prev6;
window.next6=next6;

let email=document.getElementById("inputtag");
function subscribe(){
    if(email.value!=""){
        alert("Subscription Successful!")
    }
    else{
        alert("Enter Your Email!")
    }
    email.value=null
}
window.subscribe=subscribe


