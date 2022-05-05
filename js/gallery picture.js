let allDiv = document.querySelector(".openPicture"),
      PictureBox = document.querySelector("#GalleryImage"),
      closeButton = document.querySelector("#CloseButton");

closeButton.onclick = function(){
    allDiv.style.display = "none";
}

function OpenPic1(){
    allDiv.style.display = "flex";
    PictureBox.target.classList.toggle("openPic1");
}