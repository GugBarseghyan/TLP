//------------------ Change header and navigation style after scroll
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("changedheader", window.scrollY > 0);
});
let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    nav.classList.toggle("changednav", window.scrollY > 0);
});

//------------------------- Setting menu functions
let button = document.querySelector(" #settingbox "),
    languagetext = document.querySelector("#lang"),
    languageDiv = document.querySelector("#languages"),
    langPoint = 0;

languagetext.onclick = function(){
    if(langPoint === 0){
        languageDiv.style.display = "block";
        langPoint = 1;
    }else{
        languageDiv.style.display = "none";
        langPoint = 0;
    }
}


//--------------------- Responsive Menu
let barButton = document.querySelector("#barButton"),
    closeButton = document.querySelector("#closeButton"),
    menu = document.querySelector("#navBar");

barButton.onclick = function(){
    barButton.style.display = "none";
    closeButton.style.display = "inline";
    menu.style.display = "block";
    console.log("hello")
}
closeButton.onclick = function(){
    barButton.style.display = "inline";
    closeButton.style.display = "none";
    menu.style.display = "none";
}