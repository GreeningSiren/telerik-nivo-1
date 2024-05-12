// Suzdavame promenlivi
let myX, myY,topkaX,topkaY,naDqsnoLiSeDvizhi,sKolkoSeDvizhiNaDolu;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 0;
    myY = 300;
    topkaX = 300
    topkaY = 200
    naDqsnoLiSeDvizhi = true;
    sKolkoSeDvizhiNaDolu = 3
    tochki = 0
    vtoraHilkaX=790
    vtoraHilkaY=600
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myY = myY + (mouseY - myY) / 10;
    if (naDqsnoLiSeDvizhi) {
        topkaX = topkaX + 3
    }
    if (naDqsnoLiSeDvizhi == false) {
        topkaX = topkaX - 3
    }
    if (topkaX > 800-30) {
        naDqsnoLiSeDvizhi = false
    }
    if (topkaX < 0) {
        naDqsnoLiSeDvizhi = true
    }
    if (sKolkoSeDvizhiNaDolu == 3) {
        topkaY = topkaY - 3
    }
    if (sKolkoSeDvizhiNaDolu == -3) {
        topkaY = topkaY + 3
    }
    if (topkaY < 0) {
        sKolkoSeDvizhiNaDolu = -3
    }
    if (topkaY > 600-30) {
        sKolkoSeDvizhiNaDolu = 3
    }
    if (topkaX < 0) {
        if (topkaY>myY) {
            if (topkaY<myY + 80) {
                tochki = tochki + 1
                console.log(tochki+ " tochki")
            }
        }
    }

    if (topkaX > 790) {
        if (topkaY>vtoraHilkaY) {
            if (topkaY<vtoraHilkaX + 80) {
                console.log("loshiq hvana")
            }
        }
    }
    vtoraHilkaY = topkaY
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    drawImage(box, myX, myY, 10, 80);
    drawImage(ballOrTarget,topkaX,topkaY,30,30);
    drawImage(box,vtoraHilkaX,vtoraHilkaY,10,80)
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}