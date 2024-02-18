import { post } from "./post.js";





export function sortAlphabetic(value1, value2){
    post.sort((a, b) => {
        const titleA = a.acf.title.toUpperCase();
        const titleB = b.acf.title.toUpperCase();
        if (titleA < titleB){
            return value1;
        }
    
        if (titleA > titleB){
            return value2;
        }
    
        return 0;
    })
 
     
}

export function sortByDate(value1, value2){
post.sort(function(a,b){
    const date1 = new Date(a.date);
    const date2 = new Date(b.date);
    if(date1 < date2){
        return value1;
    }

        if(date1 > date2){
            return value2;
        }

        return 0; 
  });




}


