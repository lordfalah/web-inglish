import {fullCollom} from './logic.js';



const getNav = document.querySelector("nav");
const backgroundNav = document.querySelector(".parent-first");

$(window).scroll(function(){
    let wScroll = $(this).scrollTop();

    if(wScroll >= getNav.offsetTop + 2){
        console.log("akhir");
        // backgroundNav.classList.remove("color-random");

        // getNav.classList.add("bg-primary");

    
    }else{
        console.log("awal");
        // getNav.classList.remove("bg-primary");
    }
})


// responsive

const imageFull = document.querySelectorAll(".gambar-full");
const textFull = document.querySelectorAll(".text-full");



if(window.matchMedia("(max-width: 1199.98px)").matches){
    console.log("hayulk");

    fullCollom(imageFull);
    fullCollom(textFull);
};

