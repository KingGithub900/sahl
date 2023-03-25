
var os = navigator.userAgent.toLocaleLowerCase();
if(os.includes("")||os.includes("ms-do")||os.includes("haiku")||os.includes("menuet")||os.includes("mac")||os.includes("dos")||os.includes("chrome")||os.includes("chrome os")||os.includes("linux")){ 
    document.getElementById("dro").style.display = "flex"; 
    document.getElementById("phone").style.display = "none";
}
if(os.includes("android")||os.includes("ipad")||os.includes("iphone")||os.includes("nokia")||os.includes("samsung")||os.includes("symbian os")||os.includes("blackberry")||os.includes("windows mobile")||os.includes("en-us")){ 
    document.getElementById("phone").style.display = "flex";
    document.getElementById("dro").style.display = "none"; 
}
var bo = document.getElementById("body");
var ar1 = document.getElementById("art1");
var ar2 = document.getElementById("art2");
var pho = document.getElementById("phone");
var dro = document.getElementById("dro");
var td_img_1 = document.getElementById("td_img1");
var td_img_2 = document.getElementById("td_img2");
var td_h5_1 = document.getElementById("td1_h5");
var td_h5_2 = document.getElementById("td2_h5");
var h1_s = document.getElementById("h1");
var sahl = document.getElementById("back");
var h2_s = document.getElementById("h2");
if(screen.width >= 320 && screen.width <= 1400 && screen.orientation.type == "landscape-primary"){
  document.getElementById("back").style.width = "4rem";
  ar1.style.width = "4" + "rem";
  ar1.style.height = "4" + "rem";
  ar2.style.width = "4" + "rem";
  ar2.style.height = "4" + "rem";
  pho.style.width = "4" + "rem";
  pho.style.height = "4" + "rem";
  dro.style.width = "4" + "rem";
  dro.style.height = "4" + "rem";
  td_img_1.style.width = "45" + "px";
  td_img_1.style.height = "45" + "px";
  td_img_2.style.width = "45" + "px";
  td_img_2.style.height = "45" + "px";
  td_h5_1.style.fontSize = "10" + "px";
  td_h5_2.style.fontSize = "10" + "px";
  h1_s.style.fontSize = "25" + "px";
  h2_s.style.fontSize = "20" + "px";
  sahl.style.width = "8" + "rem";
  sahl.style.height = "10" + "rem";
}
if(screen.width >= 320 && screen.width <= 1400 && screen.height >= 240 && screen.orientation.type == "landscape-primary"){
    sahl.style.width = "4" + "rem";
    sahl.style.height = "4" + "rem";
    ar1.style.marginTop = "1" + "%";
    ar2.style.marginTop = "1" + "%";
    pho.style.marginTop = "1" + "%";
    dro.style.marginTop = "1" + "%";
}
