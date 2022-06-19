let sld1=document.querySelector("#slide1");

let sldData1=[
    "https://logan.nnnow.com/content/dam/nnnow-project/18-may-2022/SC_TopBanner_NewAtSephoraDesktop.jpg",
 "https://logan.nnnow.com/content/dam/nnnow-project/16-may-2022/1125x500-D.jpg",
 "https://logan.nnnow.com/content/dam/nnnow-project/13-june-2022/ABH_Offerpage_Primrosepalettedesktop(1).jpg",
 "https://logan.nnnow.com/content/dam/nnnow-project/01-june-2022/se/DearDahlia_TopBanner_Flat25_off-eyeandlipsDESKTOP.jpg",
 "https://logan.nnnow.com/content/dam/nnnow-project/01-june-2022/se/MUFE_Topbanner_Ultrasettingpowderlaunch_Desktop.jpg",
 "https://logan.nnnow.com/content/dam/nnnow-project/19-may-2022/se/Sephora_Topbanner_ScentsationalSummerdesktop.jpg",
 "https://logan.nnnow.com/content/dam/nnnow-project/10-june-2022/se-/CalvinKlein_Topbanner.jpg",
]

let id;
let i=0;


let showslide=()=>{
    let sldImg1=document.createElement("img");
    sldImg1.src=sldData1[i];
    sld1.append(sldImg1);
    i++;

    

    id=setInterval(function(){
        sld1.innerHTML=null;
     if(i===sldData1.length){
        i=0;
     }
     let sld1img=document.createElement("img");
     sld1img.src=sldData1[i];
     i++;

     sld1.append(sld1img);

    },3000)
}


showslide();

let txtarr=["STEALS & DEALS","BEAUTY MINIS UNDER ₹999","EVERYDAY ESSENTIAL","TRENDING NOW","EDITORS`s PICK","TOP FRAGRANCES"];

let txtopt=document.querySelector("#opt1")

txtarr.forEach((el)=>{

    let div1=document.createElement('div');
    let txt=document.createElement("p");
    txt.innerText=el;
    div1.append(txt);
    txtopt.append(div1)
})

let img1arr=[
    "https://logan.nnnow.com/content/dam/nnnow-project/24-may-2022/se/Lips.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/24-may-2022/se/Skincare.jpeg",
    "https://logan.nnnow.com/content/dam/nnnow-project/24-may-2022/se/Complexion.jpeg",
    "https://logan.nnnow.com/content/dam/nnnow-project/24-may-2022/se/Bestsellers.jpg",
]
let img1txt=[
    "LIPS","SKINCARE","COMPLEXION","BESTSELLERS",
]

let img1=document.querySelector("#img1")
let index=0;
img1arr.forEach((el)=>{
    div2=document.createElement("div");
    let Pimg=document.createElement("img")
    Pimg.src=el;
    let Ptext=document.createElement("h3");
    Ptext.innerText=img1txt[index];
    index++;
    div2.append(Pimg,Ptext)
    img1.append(div2);
})




let url=`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`

let slide2=async()=>{
    try {
        let res=await fetch(url);
        let data=await res.json();


        localStorage.setItem("slide2",JSON.stringify(data));

    }
     catch (error) {
        console.log(error)
    }
}


slide2();


let  slide2Data=JSON.parse(localStorage.getItem("slide2"));

console.log((slide2Data))

let m1=document.querySelector("#m1")


    let index2=0;
    let box=document.createElement('div');
    box.setAttribute("id","box");



   
    let btn=document.createElement("button");
    btn.innerText="next";
    btn.addEventListener("click",function(){

        showslide2();
    })

    let S2img1=document.createElement("img")
    S2img1.src=slide2Data[index2].image_link
    S2img1.addEventListener("click",function(){
        showdetails(slide2Data[index2]);
    })

    let price1=document.createElement("p");
    price1.innerText=slide2Data[index2].price;

    let Pname1=document.createElement("p");
    Pname1.innerText=slide2Data[index2].brand;
    
    box.append(S2img1,Pname1,price1);
    m1.append(box,btn);
    index2++;



function showslide2(){
    box.innerHTML=null;

    if(index2==slide2Data.length){
        index2=0;
    }
    
    let S2img2=document.createElement("img")
    S2img2.src=slide2Data[index2].image_link
    S2img2.addEventListener("click",function(){
        showdetails(slide2Data[index2]);
    })

    let price2=document.createElement("p");
    price2.innerText=slide2Data[index2].price;

    let Pname2=document.createElement("p");
    Pname2.innerText=slide2Data[index2].brand;
    
    box.append(S2img2,price2,Pname2);
    m1.append(box,btn);
    index2++;
 
}
    


    

let m2=document.querySelector("#m2");

let iframe=document.createElement("iframe");
   iframe.src="https://www.youtube.com/embed/1PyW9IpQ0vc"
   iframe.allow="Fullscreen";

   m2.append(iframe);

let img2arr=[
    "https://logan.nnnow.com/content/dam/nnnow-project/19-may-2022/se/Sephora_ContentP-story_LinerLovin_.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/19-may-2022/se/Sephora_ContentP-story_Wingin_It.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/19-may-2022/se/Sephora_ContentP-story_Full_n_Fluffy.jpg"
]

let img2=document.querySelector("#img2");

img2arr.forEach((el)=>{
    let img2d=document.createElement("div");
    let Img2=document.createElement("img");
    Img2.src=el;

    img2d.append(Img2);
    img2.append(img2d);
})

let main2btn=document.querySelector("#main2btn")
let main2=document.querySelector("#main2");
let btn2=document.createElement("button");
btn2.innerText="Next";
btn2.addEventListener("click",function(){
    slide3();
})


let ind1=0;
let ind2=1;
let ind3=2;
let ind4=3;



let b1=document.createElement("div");
let I1=document.createElement("img");
I1.src=slide2Data[ind1].image_link;
I1.addEventListener("click",function(){
    showdetails(slide2Data[ind1]);
})

let T1=document.createElement("p");
T1.innerText="SEPHORA COLLECTION"
let P1=document.createElement("p");
P1.innerText=slide2Data[ind1].price;


let b2=document.createElement("div");
let I2=document.createElement("img");
I2.src=slide2Data[ind2].image_link;
I2.addEventListener("click",function(){
    showdetails(slide2Data[ind2]);
})

let T2=document.createElement("p");
T2.innerText="SEPHORA COLLECTION"
let P2=document.createElement("p");
P2.innerText=slide2Data[ind2].price;


let b3=document.createElement("div");
let I3=document.createElement("img");
I3.src=slide2Data[ind3].image_link;
I3.addEventListener("click",function(){
    showdetails(slide2Data[ind3]);
})
let T3=document.createElement("p");
T3.innerText="SEPHORA COLLECTION"
let P3=document.createElement("p");
P3.innerText=slide2Data[ind3].price;

let b4=document.createElement("div");
let I4=document.createElement("img");
I4.src=slide2Data[ind4].image_link;
I4.addEventListener("click",function(){
    showdetails(slide2Data[ind4]);
})
let T4=document.createElement("p");
T4.innerText="SEPHORA COLLECTION"
let P4=document.createElement("p");
P4.innerText=slide2Data[ind4].price;

ind1++;
ind2++;
ind3++;
ind4++;


b1.append(I1,T1,P1);
b2.append(I2,T2,P2);
b3.append(I3,T3,P3);
b4.append(I4,T4,P4);
main2.append(b1,b2,b3,b4)
main2btn.append(btn2)


let slide3=()=>{
    b1.innerHTML=null;
    b2.innerHTML=null;
    b3.innerHTML=null;
    b4.innerHTML=null;

    if(ind1==slide2Data.length){
        ind1=0;
    }
    if(ind2==slide2Data.length){
        ind2=1;
    }
    if(ind3==slide2Data.length){
        ind3=2;
    }
    if(ind4==slide2Data.length){
        ind4=3;
    }

    b1=document.createElement("div");
    I1.src=slide2Data[ind1].image_link;
    P1.innerText=slide2Data[ind1].price;
    I1.addEventListener("click",function(){
        showdetails(slide2Data[ind1]);
    })
    
    b2=document.createElement("div");
    I2.src=slide2Data[ind2].image_link;
    P2.innerText=slide2Data[ind2].price;
    I2.addEventListener("click",function(){
        showdetails(slide2Data[ind2]);
    })
   
    b3=document.createElement("div");
    I3.src=slide2Data[ind3].image_link;
    P3.innerText=slide2Data[ind3].price;
    I3.addEventListener("click",function(){
        showdetails(slide2Data[ind3]);
    })

    b4=document.createElement("div");
    I4.src=slide2Data[ind4].image_link;
    P4.innerText=slide2Data[ind4].price;
    I4.addEventListener("click",function(){
        showdetails(slide2Data[ind4]);
    })


    b1.append(I1,T1,P1);
    b2.append(I2,T2,P2);
    b3.append(I3,T3,P3);
    b4.append(I4,T4,P4);
    main2.append(b1,b2,b3,b4)
    main2btn.append(btn2)

    ind1++;
    ind2++;
    ind3++;
    ind4++;
    

}

let trnd3arr=[
    "https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/scdsk.jpeg",
    "https://logan.nnnow.com/content/dam/nnnow-project/11-oct-2021-/12OCT21-TILE-MUFE(1).jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/bendsk.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/05-jan-2022/TF_Logo(1).jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/03-jan-2022/se/Lancome_Logo(1).jpeg",
    "https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/HDdesk.jpg"
]

let trnd3=document.querySelector("#trnd3");

trnd3arr.forEach((el)=>{
    let B1=document.createElement("div");

    let Image=document.createElement("img");
    Image.src=el;

    B1.append(Image);
    trnd3.append(B1);
})


let saphora=[
    "https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_BigByDefinitionMascara.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_OutrageousPlumpLipgloss.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/23-may-2022/OUAI_NOTB.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/01-june-2022/se/ABH_NOTB_Primrosepalettelaunch.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/07-may-2022/Calvin_NOTB.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/27-may-2022/PacoRabanne_NOTB_MillionElixirEauDeParfum.jpg",
]

let Image3=document.querySelector("#img3");

saphora.forEach((el)=>{
    let div3=document.createElement("div");
    let simg=document.createElement("img");
    simg.src=el;

    div3.append(simg);
    Image3.append(div3)
})

let saphora2=[
    "https://logan.nnnow.com/content/dam/nnnow-project/23-march-2022/se-blog/Sephora_MakingaLook_BlogCoverTileOption02.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG3.jpg",
    "https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG4.jpg"
]

let saphoratxt=[
    "MAKING A LOOK",
    "7 MASKS",
    "LONG LASTING MAKEUP?"
]

let img4=document.querySelector("#img4");

saphora2.forEach((el,i)=>{
    let div4=document.createElement("div");
    let simg2=document.createElement("img");
    simg2.src=el;

    let stxt=document.createElement("h2");
    stxt.innerText=saphoratxt[i]

    div4.append(simg2,stxt);
    img4.append(div4)
})




function showdetails(el){
  
    localStorage.setItem("MoreDetails",JSON.stringify(el));
    window.location.href="./details.html"
}