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

let cardDetails = [
    {
        card_Number : 4556839922320001,
        month_of_exp : 7,
        year_Of_expiry : 2026,
        cvv : 515,
        Card_holder_Name : "prabhat",
    },

    {
        card_Number : 4556839954662125,
        month_of_exp : 6,    
        year_Of_expiry : 2030,   
        cvv : 340,
        Card_holder_Name : "yogesh",
    }
]


let place_order = document.getElementById('btn').addEventListener('click', placeOrder);


//var statment = false;

function placeOrder(){

    let cardNumber = document.getElementById('card-number').value;
    let cardHolderName = document.getElementById('holder-name').value;
    let cVV = document.getElementById('cvvNumber').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    var count=0;
    cardDetails.forEach(function(ele){
    
    if(Number(month)==ele.month_of_exp && Number(cardNumber)==ele.card_Number && cardHolderName==ele.Card_holder_Name && Number(cVV)==ele.cvv && Number(year)==ele.year_Of_expiry)
    {
        alert("Your Order is successfully done")
        document.getElementById('card-number').value = "";
        document.getElementById('holder-name').value = "";
        document.getElementById('cvvNumber').value = "";
        document.getElementById('month').value = "";
        document.getElementById('year').value = "";

        window.location.href = "../Home/index.html";
    }
    else
    {
     count++;
        if(count==cardDetails.length)
        {
            alert('Invalid Details')
        }
    }
});

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



