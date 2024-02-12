import { post } from "./post.js";
const button = document.querySelector("button");
const postContainer = document.querySelector(".post-container")


function renderPosts() {
    for( let i =0; i < 10; i++){
        postContainer.innerHTML += `<a href="specific.html?id=${post[i].id}/" class="centertag"><div class="post-card"><img src="${post[i].acf.image}"><h2>${post[i].acf.title}</h2>     </div></a>`
}



  
    // console.log(post[i]);
}


function renderMore(){
    postContainer.innerHTML="";
    for(let i = 0; i < post.length; i++){
        postContainer.innerHTML += `<a href="specific.html?id=${post[i].id}/" class="centertag"><div class="post-card"><img src="${post[i].acf.image}"><h2>${post[i].acf.title}</h2>     </div></a>`
    }
}




renderPosts();

button.addEventListener('click', renderMore)
console.log(button);