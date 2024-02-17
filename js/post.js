// export const = endpoint ="?acf_format=standard"
  
export const url = "https://project-exam.martinskaarer.no/wp-json/wp/v2/posts";
const endpoint = "?acf_format=standard&per_page=50"


export async function fetchPost(link){
    const response = await fetch(link); 
    const result = await response.json();
    return result

  

}

const postUrl = url + endpoint;
 export const post = await fetchPost(postUrl);