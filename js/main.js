let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle('active'); 
}

let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle('active'); 
}

// var swiper = new Swiper(".gallery-slider",{
//     grabCursor:true,
//     loop:true,
//     centeredSlides:true,
//     spaceBetween:20,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         nextEl: ".swiper-button-next",
//     },
//     breakpoints: {
//         0:{
//             slidesPerView:1,
//         },
//         700:{
//             slidesPerView:2,
//         }
//     }
// }
// )