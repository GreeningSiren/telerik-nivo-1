// Suzdavame promenlivi
let myX, myY,klikEdno;
let kakvoSeKrieNaKletka=[2,3,0,3,1,1,2,0]
let nuzhnolienovopole,ic,brsreshtisegcvqt
function init() {
    myX = 300;
    myY = 300;
    klikEdno=-1
    klikDve=-1
    nuzhnolienovopole=true
    for( ;nuzhnolienovopole; ){
        for(ik=0;ik<8;ik=ik+1){
            kakvoSeKrieNaKletka[ik]=randomInteger(4)
        }
        nuzhnolienovopole=false
        for(ic=0;ic<4;ic=ic+1){
            for(ik=0;ik<9;ik=ik+1){
                if(kakvoSeKrieNaKletka[ik]==ic){
                    brsreshtisegcvqt=brsreshtisegcvqt+1
                }
            }
            if(brsreshtisegcvqt!=2){
                nuzhnolienovopole=true
            }
        }
    }
  /*   console.log(bropiti) */

}
function update() {
    myX = myX + (mouseX - myX) / 10;
    myY = myY + (mouseY - myY) / 10;
}
function draw() {
    drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
    for(ik=0;ik<8;ik=ik+1) {
        if(kakvoSeKrieNaKletka[ik]!=1000) {
            if(ik==klikEdno || ik==klikDve) {
                nomerOtkritaKartina=kakvoSeKrieNaKletka[ik]
                drawImage(gem[nomerOtkritaKartina],100*ik,200,100,100)
            }else{
                drawImage(box,100*ik,200,100,100)
            }
        } 
    }
}
function mouseup() {
    // console.log("Mouse clicked at", mouseX, mouseY);
    if(klikEdno==-1) {
        klikEdno=Math.floor(mouseX/100)
    }else{
        if(klikDve==-1) {
                klikDve=Math.floor(mouseX/100)
        }else{
            for(ik=0;ik<8;ik=ik+1) {
                if(kakvoSeKrieNaKletka[klikEdno]==kakvoSeKrieNaKletka[klikDve]) {
                    kakvoSeKrieNaKletka[klikEdno]=1000
                    kakvoSeKrieNaKletka[klikDve]=1000
                    klikEdno=-1
                    klikDve=-1
                    console.log("ti si gotin")
                }else{
                    console.log("provel")
                    klikEdno=-1
                    klikDve=-1
                }
            }
        }    
    }
}
    function keyup(key) {
        console.log("Pressed", key);
    }




// Math.floor(mouseX/100)


    ////#############///////////backup\\\\\\\\\\\#############\\\\
// // Suzdavame promenlivi
// let myX, myY,klikEdno;
// let kakvoSeKrieNaKletka=[2,3,0,3,1,1,2,0]
// function init() {
//     myX = 300;
//     myY = 300;
//     klikEdno=-1
//     klikDve=-1

// }
// function update() {
//     myX = myX + (mouseX - myX) / 10;
//     myY = myY + (mouseY - myY) / 10;
// }
// function draw() {
//     drawImage(backField, 0, 0, 800, 600);
//     drawImage(femaleAction, myX, myY, 60, 80);
//     for(ik=0;ik<8;ik=ik+1) {
//         if(ik==klikEdno) {
//             nomerOtkritaKartina=kakvoSeKrieNaKletka[ik]
//             drawImage(gem[nomerOtkritaKartina],100*ik,200,100,100)
//         }else{
//             drawImage(box,100*ik,200,100,100)
//         }
//         if(ik==klikDve) {
//             nomerOtkritaKartina=kakvoSeKrieNaKletka[ik]
//             drawImage(gem[nomerOtkritaKartina],100*ik,200,100,100)
//         }else{
//             drawImage(box,100*ik,200,100,100)
//         }
        
        
//     }
// }
// function mouseup() {
//     // console.log("Mouse clicked at", mouseX, mouseY);
//     if(klikEdno==-1) {
//         klikEdno=Math.floor(mouseX/100)
//     }else{
//         if(klikDve==-1) {
//             klikDve=Math.floor(mouseX/100)
//         }    
//     }
// }
//     function keyup(key) {
//         console.log("Pressed", key);
//     }




// // Math.floor(mouseX/100)
