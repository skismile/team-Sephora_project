let cc1 = document.getElementById('CREDIT_CARD').addEventListener('click', cardfunction);

let cc2 =  document.getElementById('CREDIT_CARD').value;
let count = 0;

let creditCardForm = document.getElementById('creditCardForm');

function cardfunction(){
    console.log(cc2)
    if(cc2==="on" && count===0)
    {
        creditCardForm.style.display = "block";
    }
    count++;
    if(count===2)
    {
        creditCardForm.style.display = "none";
        count=0;
    }
}

let tt = JSON.parse(localStorage.getItem("total"));
console.log(tt);
let subtotal = document.getElementById('subtotal');
let discount = document.getElementById('discount');
let gst = document.getElementById('gst');
let delivery = document.getElementById('DC');
let total = document.getElementById('total');



subtotal.innerText = 'Rs.' + " "+ tt.subprice;
discount.innerText = 'Rs.' + " "+ tt.discount;
gst.innerText = "18%";
delivery.innerText = 'Rs.' + " "+ "0";
total.innerText = 'Rs.' + " "+ tt.finalprice;


let tpa=document.querySelector("#TPamount")
tpa.innerText='Rs.' + " "+ tt.finalprice;

//***********************************************************************//





let place_order = document.getElementById('btn').addEventListener('click', placeOrder);


//var statment = false;

function placeOrder(){

    let cardNumber = document.getElementById('card-number').value;
    let cardHolderName = document.getElementById('holder-name').value;
    let cVV = document.getElementById('cvvNumber').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    
    if(Number(month)!=="" && Number(cardNumber)!=="" && cardHolderName!=="" && 
    Number(cVV)!=="" && Number(year)!=="")
    {
        alert("Your Order is successfully done and your order id is 420123 ");
        document.getElementById('card-number').value = "";
        document.getElementById('holder-name').value = "";
        document.getElementById('cvvNumber').value = "";
        document.getElementById('month').value = "";
        document.getElementById('year').value = "";

        window.location.href = "../index.html";
        
        window.localStorage.removeItem('product');
    }
    else
    {
        
            alert('please fill all Details')
        
    }


}


//********************************************************************//

let profile = document.getElementById('profile')
profile.onmouseover = function(){
    
    document.getElementById('userBox').style.display = 'block';
}
profile.onmousedown = function(){
    
    document.getElementById('userBox').style.display = 'none';
}

let username=document.querySelector("#UN");
let logdata=JSON.parse(localStorage.getItem("signupData"))

username.innerText=logdata.name;



