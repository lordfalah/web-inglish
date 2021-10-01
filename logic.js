
export function fullCollom(full){
    full.forEach(allImg =>{
        let getString = allImg.className.split(" ")[0];
        
        if(getString === "gambar-full"){
            allImg.classList.remove("col-md-8");
            console.log("col 8");
        
        }else if(getString === "text-full"){
            allImg.classList.remove("col-md-4");
            console.log("col 4");
        };
    });
};




