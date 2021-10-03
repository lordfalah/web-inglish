
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


// source code effect backrgound color all circle ground

let count = 1;
export function repeatAll(all){
    setInterval(() =>{
        let ganda = count++;

        if(ganda % 2 == 0){
            all.forEach(allCircle => {
                allCircle.classList.add("color-set");
            });
        
        }else{
            // console.log("Modulus 1");
            all.forEach(allCircle => {
                allCircle.classList.remove("color-set");
            });
        };
    }, 1000);
};


