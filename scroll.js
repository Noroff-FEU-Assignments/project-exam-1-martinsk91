const carouselle = document.querySelector(".carouselle");
const right = document.querySelector("#right");
const left = document.querySelector("#left");


right.addEventListener('click', ()=>{
    carouselle.style.scrollBehavior = "smooth";
    carouselle.scrollLeft +=320;
})


left.addEventListener('click', ()=>{
    carouselle.style.scrollBehavior = "smooth";
    carouselle.scrollLeft -=320;
})