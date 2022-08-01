let sldData=[
    "https://logan.nnnow.com/content/dam/nnnow-project/18-may-2022/SC_TopBanner_NewAtSephoraDesktop.jpg",
 "https://logan.nnnow.com/content/dam/nnnow-project/16-may-2022/1125x500-D.jpg",
 "https://logan.nnnow.com/content/dam/nnnow-project/13-june-2022/ABH_Offerpage_Primrosepalettedesktop(1).jpg",
 "https://logan.nnnow.com/content/dam/nnnow-project/01-june-2022/se/DearDahlia_TopBanner_Flat25_off-eyeandlipsDESKTOP.jpg",
 "https://logan.nnnow.com/content/dam/nnnow-project/01-june-2022/se/MUFE_Topbanner_Ultrasettingpowderlaunch_Desktop.jpg",
 "https://logan.nnnow.com/content/dam/nnnow-project/19-may-2022/se/Sephora_Topbanner_ScentsationalSummerdesktop.jpg",
 "https://logan.nnnow.com/content/dam/nnnow-project/10-june-2022/se-/CalvinKlein_Topbanner.jpg",
];
let form=document.querySelector("#form");

function addData(event){
    event.preventDefault();

    let slData=form.sld_inp.value;

    sldData.push(slData);
    
    localStorage.setItem("slide1",JSON.stringify(sldData));
    
    console.log(sldData)
    window.location.reload();
}

