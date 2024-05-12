// Suzdavame promenlivi
let myX, myY,vragX,vragY,predishenKlavish;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 120;
    myY = 520;
    vragX = -10
    vragY = 520
    predishenKlavish = 75

}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    vragX = vragX + 0.75
    if (myX > 750 && myY==520) {
        console.log("uspe")
        myX = 0
        myY = 200
    }
    if (areColliding(vragX,vragY,60,80, myX, myY, 60, 80)) {
        location.reload()
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backSunset, 0, 0, 800, 600);
    if (predishenKlavish==74) {
        drawImage(femaleAction, myX, myY, 60, 80);
    }else {
        drawImage(femaleWalk1,myX,myY,60,80)
    }
    drawImage(heroWalk,vragX,vragY,60,80)
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
///    console.log("Pressed", key);
    if (key==74 && predishenKlavish==75) {
        myX = myX+10
        predishenKlavish=key
    }
    if (key==75 && predishenKlavish==74) {
        myX=myX+10
        predishenKlavish=key
    }
}

