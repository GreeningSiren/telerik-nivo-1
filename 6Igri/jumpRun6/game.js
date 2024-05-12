// Suzdavame promenlivi
let myX, myY,dy,ostavashtoGorivu,vragXNaVsichikite,vragYNaSegishiniq,lives,iSurce;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 0;
    myY = 600;
    vragX = 800
    vragY = 550
    lives=5
    dy=1
    ostavashtoGorivu=400
    vragXNaVsichikite=800
    iSurce=5
    kadyr=0
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    vragXNaVsichikite= vragXNaVsichikite-3
    dy=dy+0.1
    myY=myY+dy
    if(vragXNaVsichikite<-100) {
        vragXNaVsichikite=800
    }
    for (vragYNaSegishiniq=50;vragYNaSegishiniq<=550;vragYNaSegishiniq=vragYNaSegishiniq+100) {
    if(areColliding(myX, myY, 30, 40,vragXNaVsichikite,vragYNaSegishiniq,50,25)) {
            console.log("proval :(")
            lives=lives-1
            vragXNaVsichikite=800
        }
    }
    if(lives==0) {
        location.reload()
    }
    if(isKeyPressed[32] && ostavashtoGorivu>0) {
        dy=dy-0.2
        ostavashtoGorivu=ostavashtoGorivu-0.2
    }else {
        ostavashtoGorivu=ostavashtoGorivu+0.1
    }
    if(ostavashtoGorivu>=400) {
        ostavashtoGorivu=400
    }
    if(ostavashtoGorivu<=0) {
        ostavashtoGorivu=0
    } 
    if(myY>600-40) {
        dy=0
        myY=600-40.1
        ostavashtoGorivu=ostavashtoGorivu+0.5

    }
    // if(vragXNaVsichikite<0) {
    //     if(20<myX%100 && my&100 < 70 ) {
    //         console.log("fras s %")
    //     }
    // }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backgrond, 0, 0, 800, 600);
    kadyr=kadyr+1  /* kadarchi */
    if(kadyr>=8) {
        kadyr=0
    }
    drawImage(femaleAction, myX, myY, 30, 40);
    for(vragYNaSegishiniq=50;vragYNaSegishiniq<=550;vragYNaSegishiniq=vragYNaSegishiniq+100) {
        drawImage(cat,vragXNaVsichikite,vragYNaSegishiniq,50,25)
    }
    drawImage(box,9,9,400+2,10+2)
    drawImage(paddle,10,10,ostavashtoGorivu,10)
    // drawImage(heart,450,0,lives,30)
    for(iSurce=0;iSurce<lives;iSurce=iSurce+1) { 
        drawImage(heart,420+iSurce*38,5,30,30)
    }
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    if(key==69) {
        console.log(dy + " dy")
        console.log(myY + " myY")
    }
    if(key==81) {
        dy=1
    }
}
 function keydown(key) {
}
