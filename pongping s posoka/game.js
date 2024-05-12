// Suzdavame promenlivi
let myX, myY,topkaX,topkaY,tochki,lives,posoka,brOtskachaniq;
// 0=dolo lqvo   1=gore lqvo 2=gore dqsno 3-dolu desno
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 0;
    myY = 300;
    topkaX = 714
    topkaY = 55
    tochki = 0
    lives = 3
    posoka = 0
    brOtskachaniq = 0
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myY = myY + (mouseY - myY) / 10;
    if (posoka==0) {
        topkaX = topkaX - 3
        topkaY = topkaY + 3
    }
    if (posoka == 1) {
        topkaX = topkaX - 3
        topkaY = topkaY - 3
    }
    if (posoka == 2) {
        topkaX = topkaX + 3
        topkaY = topkaY - 3
    }
    if (posoka==3) {
        topkaX = topkaX + 3
        topkaY = topkaY + 3
    }
    if (topkaY > 600-30) {
        console.log("posoka 1")
        if (posoka == 0) {
            posoka = 1
            brOtskachaniq = brOtskachaniq + 1
        }else{
            posoka=2
            brOtskachaniq = brOtskachaniq + 1
        } 
        console.log(brOtskachaniq)   
    }
    if (topkaX < 0) {
        if (posoka == 1) {
            posoka = 2
            brOtskachaniq = brOtskachaniq + 1
        }else {
            posoka = 3
            brOtskachaniq = brOtskachaniq + 1
        }
        console.log("posoka 2")
        console.log(brOtskachaniq)
    }
    if (topkaY < 0) {
        if (posoka==2) {
            posoka = 3
            brOtskachaniq = brOtskachaniq + 1
        }else {
            posoka = 0
            brOtskachaniq = brOtskachaniq + 1
        }
        console.log("posoka 3")
        console.log(brOtskachaniq)
    }
    if (topkaX > 800-30) {
        if (posoka == 3) {
            posoka = 0
            brOtskachaniq = brOtskachaniq + 1
        }else {
            posoka = 1
            brOtskachaniq = brOtskachaniq + 1
        }
        console.log("posoka 4")
        console.log(brOtskachaniq)
    }

    
    if (topkaX < -10) {
        if (myX > topkaX) {
            if (myY > topkaY) {
                if (myY < topkaY+80) {
                    if (myY+50 < topkaY+80) {
                        tochki = tochki + 1
                        console.log(tochki + " tochki")
                    }
                }
            }
        }
    }
    if (lives == 0) {
        location.reload()
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    drawImage(box, myX, myY, 60, 130);
    drawImage(ballOrTarget,topkaX,topkaY,30,30)
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

