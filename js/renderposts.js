import { post } from "./post.js";
const postContainer = document.querySelector(".post-container")


// console.log(post);
console.log(post[0]);
console.log(post[0].excerpt.rendered);
for( let i =0; i < post.length; i++){
    postContainer.innerHTML += `<a href="specific.html?id=${post[i].id}/"><div class="post-card"><img src="/images/cookbook.jpg" alt=""><h2>${post[i].title.rendered}</h2>     </div></a>`

  
    // console.log(post[i]);
}

