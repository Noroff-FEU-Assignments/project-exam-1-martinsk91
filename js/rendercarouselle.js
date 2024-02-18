import { post } from "./post.js";


const carouselle = document.querySelector(".carouselle");
const test = document.querySelector(".test");


function renderPosts(){
    for(let i = 0; i < post.length; i++){
        carouselle.innerHTML +=`<a href="specific.html?id=${post[i].id}/"><div><span><img src="${post[i].acf.image}" alt="image of ${post[i].acf.title}"><h2>${post[i].acf.title}</h2></span></div></a>`
        
        
    }
   
}



renderPosts();