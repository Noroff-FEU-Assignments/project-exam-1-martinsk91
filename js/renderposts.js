import { post } from "./post.js";
const renderButton = document.querySelector(".render");
const postContainer = document.querySelector(".post-container")


export function renderPosts() {
    for( let i =0; i < 10; i++){
        postContainer.innerHTML += `<a href="specific.html?id=${post[i].id}/"><article class="post-card"><img src="${post[i].acf.image}" alt="image of ${post[i].acf.title}"><h2>${post[i].acf.title}</h2>     </article></a>`
}



  
    
}


function renderMore(){
    renderButton.style.display = 'none'
    postContainer.innerHTML="";
    for(let i = 0; i < post.length; i++){
        postContainer.innerHTML += `<a href="specific.html?id=${post[i].id}/"><article class="post-card"><img src="${post[i].acf.image}" alt="image of ${post[i].acf.title}">    <h2>${post[i].acf.title}</h2></article> </a>`
    }
  
}




renderPosts();

renderButton.addEventListener('click', renderMore)
