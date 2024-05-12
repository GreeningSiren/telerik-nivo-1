// Suzdavame promenlivi
let myX, myY,predishenklavish;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    ochakvanklavish=65
    greshki = 0
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myX = myX + (mouseX - myX) / 10;
    myY = myY + (mouseY - myY) / 10;
    if (greshki > 4) {
        console.log("oh god")
        location.reload()
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
//    console.log("Pressed", key);
    if (key==ochakvanklavish) {
        console.log("correct")
        ochakvanklavish=ochakvanklavish+1
    }else {
        console.log("incorrect")
        ochakvanklavish=65
        greshki = greshki + 1
        console.log(greshki + " mistakes")
    }
    if (ochakvanklavish==91) {
        alert("we did it we did it, ah yes we did it УСПЯСМЕ *dora outro* aH yEs wE dId iT")
    }
    if(key==116) {
        location.reload()
    }
}