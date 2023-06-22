//navbar in large screen
let list=document.querySelectorAll(".list li");

//navbar in mobile screen 
let menu=document.querySelector(".navbar .list");
let menuButton=document.querySelector(".mobile-list .menu");
menuButton.onclick=()=>{
    menu.classList.toggle("translate");
}
let closeMenu=document.getElementById("close");
closeMenu.onclick=()=>{
    menu.classList.toggle("translate");
}

window.onscroll = () => {
  menu.classList.remove("translate");
}

//
 let serviseButton=document.querySelector(".servise .fa-caret-down");
 let serviseList=document.querySelector(".servise .servise-list");
 
 serviseButton.onclick=()=>{
    serviseList.classList.toggle("active-list");
 }

 //
 let searchButton=document.querySelector(".fa-magnifying-glass");
 let searchList=document.querySelector(".search-form");
 
 searchButton.onclick=()=>{
    searchList.classList.toggle("active-list");
 }

//
let navbar=document.querySelector(".navbar");
window.onscroll=()=>{
  if(window.scrollY>300){

    navbar.classList.add("active");
  }else{
    navbar.classList.remove("active");
  }
}

//


//add year to footer 
let date = new Date();
let year = document.querySelector(".year");
year.innerHTML = `${ date.getFullYear() }`;

//
//


//Projects  Section 
var alltablinks=document.querySelectorAll('.tablinks');
alltablinks.forEach((tablink)=>{
    tablink.addEventListener('click',()=>{
        alltablinks.forEach((e)=> e.classList.remove('active'));
        tablink.classList.add('active');
    })
})
//
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});
//
var swiper = new Swiper(".swiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//
var swiper = new Swiper(".swiper3", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
