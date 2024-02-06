import { post } from "./post.js";

const postContainer = document.querySelector(".post-container")


function renderPosts() {
    for( let i =0; i < 3; i++){
        postContainer.innerHTML += `<a href="specific.html?id=${post[i].id}/" class="centertag"><div class="post-card"><img src="${post[i].acf.image}"><h2>${post[i].acf.title}</h2>     </div></a>`
}



  
    // console.log(post[i]);
}

renderPosts();