const url="http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  async function getdata(){
    try{
        let res=await fetch(url);
        let data=await res.json()
    //console.log(data)
    //append(data)

    function sortfunc(){
        let sortvalue=document.getElementById("sortselect").value;
        console.log(sortvalue)
        if(sortvalue=="lth"){
           data=data.sort(function(a,b){
                 return a.price-b.price
            })
        }
        else if(sortvalue=="htl"){
            data=data.sort(function(a,b){
                return b.price-a.price
            })
        } 
        else if(sortvalue=="popular"){
            data=data.sort(function(a,b){
                return b.rating-a.rating
            })
        }
        else if(sortvalue=="new"){
            data=data.sort(function(a,b){
                return a.rating-b.rating
            })
        }
        append(data)
    }
    append(data)
    }catch(err){
        console.log(err)
    }
    window.sortfunc=sortfunc
}
getdata()  

function append(data){
    let container=document.getElementById("Bigcontainer");
    container.innerHTML=null
    data.forEach((ele)=>{
        //console.log(ele.price)
        let div=document.createElement("div");
        div.setAttribute("class","eachdiv")
        div.id="card";
        div.addEventListener("click",function(){
            redi(ele);
        })
        let img=document.createElement("img")
        img.src=ele.image_link;

        


        let offerdiv=document.createElement("div");
        offerdiv.setAttribute("class","offerdiv");
        let offericon=document.createElement("img");
        offericon.src="https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png";
        let offerword=document.createElement("h5");
        offerword.innerText="OFFER";
        offerdiv.append(offericon,offerword);

        let brandname=document.createElement("h4")
        brandname.setAttribute("id","brandname")
        brandname.innerText=ele.brand;
        let name=document.createElement("h6")
        name.setAttribute("id","productname")
        name.innerText=ele.name;
        let price=document.createElement("h5")
        price.setAttribute("id","priceId")
        price.innerText="Rs."+Math.trunc(ele.price*100);

        let cartdiv=document.createElement("div");
            cartdiv.setAttribute("class","cartdiv");

            let bagimgdiv=document.createElement("div");
            let cartimg=document.createElement("img")
            cartimg.src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png";
            cartimg.addEventListener("click",function(){
                addtocartFunc(ele);
            });
            let addtobag=document.createElement("h5");
            addtobag.setAttribute("id","addtobagid")
            addtobag.innerText="SHOP NOW";

            let favimgdiv=document.createElement("div");
            let favimg=document.createElement("img");
            favimg.src="https://cdn-icons-png.flaticon.com/128/535/535285.png";
            favimg.addEventListener("click",function(){
                addtofavFunc(ele);
            });
            let addtofav=document.createElement("h5");
            addtofav.setAttribute("id","addtofavid")
            addtofav.innerText="FAVOURITE";

            bagimgdiv.append(cartimg,addtobag);
            favimgdiv.append(favimg,addtofav)
            cartdiv.append(bagimgdiv,favimgdiv)
            div.append(cartdiv)

        div.append(img,offerdiv,brandname,name,price)
        container.append(div)

    })
};
// add to cart page
var addToCartArr=JSON.parse(localStorage.getItem("product")) || [];//aei key ta dekhte hbe
function addtocartFunc(ele){
    let objelement={
        image_url:ele.image_link,
        brandname:ele.brand,
        name:ele.name,
        price:Math.trunc(ele.price*100),

    }
    console.log(objelement.price)
    addToCartArr.push(objelement);
    localStorage.setItem("product",JSON.stringify(addToCartArr));
    alert("Product added successfully!")
}
//add to favourite page
var addToFavArr=JSON.parse(localStorage.getItem("favourite")) || [];//aei key ta dekhte hbe
function addtofavFunc(ele){
    let objele={
        image_url:ele.image_link,
        brandname:ele.brand,
        name:ele.name,
        price:Math.trunc(ele.price*100),

    }
    console.log(objele.price)
    addToFavArr.push(objele);
    localStorage.setItem("favourite",JSON.stringify(addToFavArr));
    alert("Product added to favorite")
}
//email subscription alert
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

//back to top 
function backtotop(){
    console.log("clicked btn")
   window.location.href="makeup_products.html"
}

function redi(el){
    localStorage.setItem("specific",JSON.stringify(el));
    window.location.href="./specific.html"
}

