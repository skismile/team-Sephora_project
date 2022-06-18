let sldData=JSON.parse(localStorage.getItem("slide1"))||[];
let form=document.querySelector("#form");

function addData(event){
    event.preventDefault();

    let slData=form.sld_inp.value;

    sldData.push(slData);
    
    localStorage.setItem("slide1",JSON.stringify(sldData));
    
    console.log(sldData)
    window.location.reload();
}

