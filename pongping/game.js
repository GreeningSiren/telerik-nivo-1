// Suzdavame promenlivi
let myX, myY,topkaX,topkaY,tochki,lives;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 0;
    myY = 300;
    topkaX = 800
    topkaY = 0
    tochki = 0
    lives = 3
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myY = myY + (mouseY - myY) / 10;
    topkaX = topkaX - 1
    topkaY = topkaY + 0.5
    if (topkaY > 600) {
        topkaX=randomInteger(800)
        topkaY=0
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
    drawImage(femaleAction, myX, myY, 60, 130);
    drawImage(ballOrTarget,topkaX,topkaY,80,80)
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

