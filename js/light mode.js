let night = document.querySelector("#dark"),
     light = document.querySelector("#light"),
     icons = document.querySelector(".iconsa");

//------------------------ Light Mode

light.onclick = function(){
    light.style.display = "none";
    night.style.display = "inline";
    document.querySelector("header").style.backgroundColor = "#aaab";
    document.querySelector("nav").style.backgroundColor = " #aaab";
    icons.classList.toggle("light");
    // document.querySelectorAll("h1").style.color = "#EDDE0C";
    // document.querySelectorAll("h2").style.color = "#EDDE0C";
    // document.querySelectorAll("h3").style.color = "#EDDE0C";
    // document.querySelectorAll("h4").style.color = "#EDDE0C";
    // document.querySelectorAll("h5").style.color = "#EDDE0C";
    // document.querySelectorAll("h6").style.color = "#EDDE0C";
    // document.querySelectorAll("p").style.color = "#EDDE0C";
    // document.querySelectorAll("hr").style.borderColor = "#EDDE0C";
    // document.querySelectorAll("hr").style.backgroundColor = "#EDDE0C";
    // document.querySelector("body").style.backgroundColor = "#aaa";
    // console.log("Helllo")
}

//------------------------ Dark Mode

night.onclick = function(){
    light.style.display = "inline";
    night.style.display = "none";
    document.querySelector("header").style.backgroundColor = "#000b";
    document.querySelector("nav").style.backgroundColor = "#000b";
    icons.classList.toggle("light");
    // document.querySelectorAll("h1").style.color = "black";
    // document.querySelectorAll("h2").style.color = "black";
    // document.querySelectorAll("h3").style.color = "black";
    // document.querySelectorAll("h4").style.color = "black";
    // document.querySelectorAll("h5").style.color = "black";
    // document.querySelectorAll("h6").style.color = "black";
    // document.querySelectorAll("p").style.color = "black";
    // document.querySelectorAll("hr").style.borderColor = "black";
    // document.querySelectorAll("hr").style.backgroundColor = "black";
    // document.querySelector("body").style.backgroundColor = "#202020";
}