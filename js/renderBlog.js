import { post } from "./post";
const blogPosts = document.querySelector(".blog-posts");


function renderBlog() {
    for(let i = 0; i < post.length; i++)[
        blogPosts.innerHTML += `<div>${}</div>`
    ]
        
}