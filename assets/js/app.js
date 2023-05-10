const dropBtn = document.querySelector(".menu-btn");
const dropMenu = document.getElementById("drop-menu");
const closeBtn = document.querySelector(".close-btn");

dropBtn.addEventListener("click", toggleMenu);

closeBtn.addEventListener("click", toggleMenu)

function toggleMenu(){
    dropMenu.classList.toggle("drop-menu-open");
}

const gallery = document.querySelectorAll(".gallery-card");

gallery.forEach((photo) => {
  
    photo.addEventListener("click", () => {
      removeHighlight();
      photo.classList.add("highlight");
    });
  });

const removeHighlight = () => {
    gallery.forEach((photo) => {
  
        if(photo.classList.contains('highlight')) photo.classList.remove("highlight");
  
    });
};  

setInterval(()=>{
    let id = Array.from(gallery).findIndex((el => el.classList.contains("highlight")));

    id>-1 && id<gallery.length-1 ? id += 1 : id = 0;

    removeHighlight();
    gallery[id].click();
}, 5000)