



export async function createId(){
    const queryString = document.location.search;

    const params = new URLSearchParams(queryString);
    
    const id = params.get("id");
    return id;

     
}


import { fetchPost } from "./post.js";
import { url } from "./post.js";
const id = await createId();
const specificUrl = url + "/" + id;

export const specificPost = await fetchPost(specificUrl); 