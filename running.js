import {fullCollom, repeatAll} from './logic.js';



const getNav = document.querySelector("nav");
const backgroundNav = document.querySelector(".parent-first");

$(window).scroll(function(){
    let wScroll = $(this).scrollTop();

    if(wScroll >= getNav.offsetTop + 2){
        // console.log("akhir");
        // backgroundNav.classList.remove("color-random");

        // getNav.classList.add("bg-primary");

    
    }else{
        // console.log("awal");
        // getNav.classList.remove("bg-primary");
    }
})


// responsive

const imageFull = document.querySelectorAll(".gambar-full");
const textFull = document.querySelectorAll(".text-full");



if(window.matchMedia("(max-width: 1199.98px)").matches){
    // console.log("hayulk");

    fullCollom(imageFull);
    fullCollom(textFull);
};

// effect backrgound color all circle ground
const circleGround = document.querySelectorAll(".circle-ground1");
repeatAll(circleGround);



// scroll effect 

const photoRegister1 = document.querySelector(".right-img-create1 .card-photo-left");
const photoRegister2 = document.querySelector(".right-img-create1 .card-photo-left2");


function scrollWindow(){
    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();
        
        console.log(scrolling)

        if(scrolling >= photoRegister1.offsetTop + 3400){
            console.log("nyampe");
            photoRegister1.classList.add("horizontalLeft")
        }

        if(scrolling >= photoRegister2.offsetTop + 3500){
            photoRegister2.classList.add("horizontalRight");
        }
        
    })
}

scrollWindow();