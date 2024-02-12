import { post } from "./post.js";

const postContainer = document.querySelector(".post-container");
const rightArrow = document.querySelector(".arrow-right");
const leftArrow = document.querySelector(".arrow-left");
let startValue = 0;
let endValue = 3;

function renderPosts() {
    postContainer.innerHTML = "";
    for (let i = startValue; i < endValue && i < post.length; i++) {
        postContainer.innerHTML += `<a href="specific.html?id=${post[i].id}/" class="centertag"><div class="post-card"><img src="${post[i].acf.image}"><h2>${post[i].acf.title}</h2>     </div></a>`;
    }
}

function carouselleForward() {
    if (endValue < post.length) {
        startValue = startValue + 3;
        endValue = endValue + 3;
        
       
        renderPosts();
   
    }
}

function carouselleBackward() {
    if (startValue >= 3) {
        startValue = startValue - 3;
        endValue = endValue - 3;
        renderPosts();
    }
}

renderPosts();

rightArrow.addEventListener('click', carouselleForward);
leftArrow.addEventListener('click', carouselleBackward);