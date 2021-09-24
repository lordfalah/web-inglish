
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

