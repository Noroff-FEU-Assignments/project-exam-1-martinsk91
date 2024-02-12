const rightButton = document.querySelector(".rightbutton");
const leftButton = document.querySelector(".leftbutton");
const scrollableContent = document.querySelector(".scrollableContent");

function scrollLeft() {
    scrollableContent.scrollLeft -= 250; // Move left by 250px
    console.log("Scrolling left by 250px");
}

function scrollRight() {
    scrollableContent.scrollLeft += 250 ; // Move right by 250px
    console.log("Scrolling right by 250px");
}

rightButton.addEventListener('click', scrollRight);
leftButton.addEventListener('click', scrollLeft);