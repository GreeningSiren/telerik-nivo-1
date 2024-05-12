// Suzdavame promenlivi
let myX, myY,platformX=[],platformY=[];
let plVragX=[],plVragY=[],ip=[];
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 0;
    // platformX=300;
    // platformY=600;
    lives=5;
    for(ip=0;ip<3;ip=ip+1) {
        platformX[ip]=randomInteger(700)
        platformY[ip]=randomInteger(600)
        plVragX[ip] = randomInteger(700)
        plVragY[ip] = randomInteger(600)
    }
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myX = myX + (mouseX - myX) / 10;
    myY=myY+1
    
    for(ip=0;ip<3;ip=ip+1) {
        platformY[ip]=platformY[ip]-1
        plVragY[ip]=plVragY[ip]-1
        if(areColliding(myX, myY, 60, 80,platformX[ip],platformY[ip],150,1)) {
            myY=myY-2
        }
        if(platformY[ip]<=-30) {
            platformY[ip]=680
            platformX[ip]=randomInteger(700)
        }
        if(areColliding(myX, myY, 60, 80,plVragX[ip],plVragY[ip],150,30)) {
            lives=lives-1
            console.log(lives + " lives")
            plVragX[ip]=randomInteger(700)
            plVragY[ip]= 600
        }
        if(plVragY[ip]<=-30) {
            plVragY[ip]=680
            plVragX[ip]=randomInteger(700)
        }
    }
    // if(platformY<=-110) {
    //     platformY=680
    //     platformX=randomInteger(700)
    // }
    if(myY<=-80 || myY>=600) {
        myY=220
        lives=lives-1
        console.log(lives + " lives")
    }
    if(lives<=0) {
        location.reload()
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    drawImage(explosion2, myX, myY, 60, 80);
    for(ip=0;ip<3;ip=ip+1) {
        drawImage(box,platformX[ip],platformY[ip],150,30)
        drawImage(badbox,plVragX[ip],plVragY[ip],150,30)    
    }
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    // if(key==219) {
    //     console.log("Turi ip ip ip Ip ip ip ip tsha ik Ip tura ip ik Eugh eugh isha ik turisha Turi ip ip ip Ip ip ip ip tsha ik Ip tura ip ik Eugh eugh isha ik turisha Turi ip ip ip Ip ip ip ip tsha ik Ip tura ip ik Eugh eugh isha ik turisha Turi ip ip ip Ip ip ip ip tsha ik Ip tura ip ik Eugh eugh isha ik turisha Turi ip ip ip Ip ip ip ip tsha ik Ip tura ip ik Eugh eugh isha ik turisha Turi ip ip ip Ip ip ip ip tsha ik Ip tura ip ik Eugh eugh isha ik turisha Turi ip ip ip Ip ip ip ip tsha ik Ip tura ip ik Eugh eugh isha ik turisha Turi ip ip ip Ip ip ip ip tsha ik Ip tura ip ik Eugh eugh isha ik turisha Turi ip ip ip Ip ip ip ip tsha ik Ip tura ip ik Eugh eugh isha ik turisha Turi ip ip ip Ip ip ip ip tsha ik Ip tura ip ik Eugh eugh isha ik turisha Turi ip ip ip Ip ip ip ip tsha ik Ip tura ip ik Eugh eugh isha ik turisha Turi ip ip ip Ip ip ip ip tsha ik Ip tura ip ik Eugh eugh isha ik turisha Turi ip ip ip Ip ip ip ip tsha ik Ip tura ip ik Eugh eugh isha ik turisha")
    // }
}

