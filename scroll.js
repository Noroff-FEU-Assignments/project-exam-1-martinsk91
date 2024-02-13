const gallery = document.querySelector(".carouselle");
const right = document.querySelector("#right");
const left = document.querySelector("#left");


right.addEventListener('click', ()=>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft +=320;
})


left.addEventListener('click', ()=>{
    gallery.style.scrollBehavior = "smooth";
    gallery.scrollLeft -=320;
})