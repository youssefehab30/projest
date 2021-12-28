let search =document.querySelector(".search");
let icons = document.querySelectorAll(".icons i");
let iconElement = document.querySelector(".icons")
function searchactive(){
    search.classList.toggle("active");
    icons[5].classList.toggle("active");
    icons[6].classList.toggle("active");
    iconElement.classList.toggle("space");
    
}
