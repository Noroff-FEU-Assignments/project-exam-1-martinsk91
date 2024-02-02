

export const url = "https://project-exam.martinskaarer.no/wp-json/wp/v2/posts";


export async function fetchPost(link){
    const response = await fetch(link); 
    const result = await response.json();
    return result

   

}


 export const post = await fetchPost(url);