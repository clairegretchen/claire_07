elementImg = document.getElementById("idImage");
listImage = ["image.webp", "creme-paint-laptop-wallpaper.webp"];
i = 0;
function gantiGbr(){
    elementImg.src = listImage[i];
    i = (i + 1) % listImage.length;
}
setInterval(gantiGbr,1000)