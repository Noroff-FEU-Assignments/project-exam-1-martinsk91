import {specificPost} from "./postId.js"
const main = document.querySelector("main");

function renderspecific() {
    main.innerHTML += `<div>${specificPost.content.rendered}/div>`
    console.log(specificPost);
}

renderspecific();