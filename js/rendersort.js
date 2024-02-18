import { post } from "./post.js";
import { sortAlphabetic } from "./sort.js";
import { sortByDate } from "./sort.js";
import { renderPosts } from "./renderposts.js";
const sortButtonA = document.querySelector(".sortA");
const sortButtonZ = document.querySelector(".sortZ");
const sortButtonOld = document.querySelector(".sortOld");
const sortButtonNew = document.querySelector(".sortNew");
const renderButton = document.querySelector(".render")
const postContainer =document.querySelector(".post-container");
const toggleButton = document.querySelector(".showbuttons");

toggleButton.addEventListener('click', ()=> {
 
    if(sortButtonA.classList.contains('hide')){
        sortButtonA.classList.remove('hide');
        sortButtonZ.classList.remove('hide');
        sortButtonOld.classList.remove('hide');
        sortButtonNew.classList.remove('hide');
        
    }
    else {
        sortButtonA.classList.add('hide');
        sortButtonZ.classList.add('hide');
        sortButtonOld.classList.add('hide');
        sortButtonNew.classList.add('hide');
    }
})





sortButtonA.addEventListener('click', ()=> {
    postContainer.innerHTML =``
    sortAlphabetic(-1, 1);
    renderPosts();
    renderButton.style.display = 'block'


})

sortButtonZ.addEventListener('click', ()=>{
    postContainer.innerHTML =``
    sortAlphabetic(1, -1);
    renderPosts();
    renderButton.style.display = 'block'
})


sortButtonOld.addEventListener('click', ()=>{
    postContainer.innerHTML =``
    sortByDate(-1, 1);
    renderPosts();
    renderButton.style.display = 'block'
})

sortButtonNew.addEventListener('click', ()=>{
    postContainer.innerHTML =``
    sortByDate(1, -1);
    renderPosts();
    renderButton.style.display = 'block'
})

