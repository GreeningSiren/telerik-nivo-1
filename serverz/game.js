// Suzdavame promenlivi
let myX, myY, rockX, rockY, tocki, dzhivotove, piratX, piratY;
function init() {
        // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 0;
    myY = 520;
    rockX = 0 
    rockY = -45
    piratX = 400
    piratY = -700
    tocki = 0
    dzhivotove = 3
}
function update() {
    rockY = rockY + 1
    piratY = piratY + 1
    if (rockY > 600) {
        rockY = -700
    }
    if (piratY > 600) {
        piratY = -700
    }
    if (myY == rockY) {
        if (myX == rockX) {
            tocki = tocki + 1
            console.log("omnonononom");
            console.log (tocki + " tochki");
        }
        else {
            console.log ("ouch");
            tocki = 0
            dzhivotove = dzhivotove - 1
        }
    }
    if (myY == piratY) {
        if (myX == piratX) {
            tocki = tocki + 1
            console.log("omnonnonononnom");
            console.log (tocki + " tochki");
        }
        else {
            console.log ("ouch");
            tocki = 0
            dzhivotove = dzhivotove - 1
        }
    }
    if (dzhivotove == 0) {
        console.log("dzhivotove == 0")
        location.reload();
    }
    if (tocki == 5) {
        dzhivotove = 6 
        console.log("dzhivotove has been set to value '6'");
    }

}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 400, 80);
    drawImage(kufte,rockX,rockY,400,80)
    drawImage(kufte,piratX,piratY,400,80)
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
 if (myX == 0) {
    myX = 400
 }
 else {
    myX=0
 }
}
