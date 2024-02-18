const image = document.querySelector(".post-image");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");




image.addEventListener('click', () => {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    
})



overlay.addEventListener('click', ()=> {
     modal.style.display = 'none';
     overlay.style.display = 'none';
})
