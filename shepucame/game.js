// Suzdavame promenlivi
let myX, myY,tochki, dzhivotove,prediKolkoUpdataNatiskahL,natiskaLiNaDqsno,natiskaLiNaLqvo,natiskaLiNaL,temperaturaLazer,gigaLife;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 600-80;
    gigaX = 500
    gigaY = 0
    pistoletX = 32912448932894723894723987423987428397429837
    pistoletY = -1000000000000
    tochki = 0
    dzhivotove = 5
    skorost = 3
    skorostnabullet= 7
    lazerX=-1000
    lazerY=-1000
    temperaturaLazer=0
    gigaLife=2
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    prediKolkoUpdataNatiskahL=prediKolkoUpdataNatiskahL+1
    gigaY = gigaY + skorost
    pistoletY = pistoletY - skorostnabullet
    skorost = skorost + 0.0001
    skorostnabullet = skorostnabullet + 0.0001
    if(temperaturaLazer<1.1) {
        temperaturaLazer=1.1
    }
    if(temperaturaLazer>100) {
        temperaturaLazer=100
    }
    if (gigaY > 700) {
        gigaY = 0 
        gigaX = randomInteger(750)
    }
    if (areColliding(myX, myY, 60, 80,gigaX,gigaY,60,80)) {
        dzhivotove = dzhivotove - 1
        console.log(dzhivotove + " lives")
        gigaY = gigaY - 25
        gigaX = randomInteger(750)
        gigaY = -100
        tochki = 0
        pistoletY = -10000000000000
        pistoletX = 32912448932894723894723987423987428397429837
    }
    if (pistoletY < -100) {
        pistoletY = -10000000000000
        pistoletX = 32912448932894723894723987423987428397429837
    }
    if (areColliding(pistoletX,pistoletY,15,20,gigaX,gigaY,60,80)) {
        pistoletY = -10000000000000
        pistoletX = 32912448932894723894723987423987428397429837
        if(gigaLife==2) {
            gigaLife=1
        }else{
            tochki = tochki + 1
            console.log(tochki + " points")
            gigaX = randomInteger(750)
            gigaY = -100
            gigaLife=2
        }

    }
    if (dzhivotove == 0) {
        location.reload()
    }
    if(myX>800-60){
        myX=800-60
    }
    if(myX<0) {
        myX=0
    }
    if(isKeyPressed[76]) {
        if (areColliding(myX,0,60,myY,gigaX,gigaY,60,80)) {
            if(temperaturaLazer<100) {
                if(gigaLife==2 || gigaLife==1) {
                    tochki = tochki + 1
                    console.log(tochki + " points")
                    gigaX = randomInteger(750)
                    gigaY = -100
                    gigaLife=2
                }
            } 
        }
        temperaturaLazer=temperaturaLazer+0.1
    }
    if(isKeyPressed[76]==false) {
        temperaturaLazer=temperaturaLazer-0.1
    }
    if(isKeyPressed[39]||isKeyPressed[68]) {
        myX=myX+5
    }
    if(isKeyPressed[37]||isKeyPressed[65]) {
        myX=myX-5
    }
    if(temperaturaLazer>100) {
        console.log("pregre")
    }
} 
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backIndustry, 0, 0, 800, 600);
    drawImage(heroStand, myX, myY, 60, 80);
    drawImage(bird,gigaX,gigaY,60,80);
    drawImage(bullet,pistoletX,pistoletY,15,20);
    if(temperaturaLazer<100) {
        if(isKeyPressed[76]) {
            drawImage(laserRed[0],myX,0,60,myY)
        }
    }
    if(gigaLife==1) {
        drawImage(halflife,gigaX,gigaY-25,60,20)
    }
    if(gigaLife==2) {
        drawImage(fulllife,gigaX,gigaY-25,60,20)
    }
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
//    console.log("Mouse clicked at", mouseX, mouseY);
//    console.log("golem si pich")
    pistoletX = myX + 20
    pistoletY = myY - 10
}
function keydown(key) {
    if(key==69) {
        console.log(temperaturaLazer)
    }
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavis.
//    console.log(key)
    if(key==32) {
        pistoletX = myX + 20
        pistoletY = myY - 10
    }
}

