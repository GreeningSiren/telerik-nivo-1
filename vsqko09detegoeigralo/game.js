// Suzdavame promenlivi
let tzelX, tzelY, tochki;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    tzelX=360
    tzelY=-100
    tochki = 0
    dzhivotove = 3
    gotemojiX = 1000
    gotemojiY = 1000
    skorost = 1
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    tzelY = tzelY + skorost
    skorost = skorost + 0.001
    if (tzelY > 600) {
        tzelX = randomInteger (700);
        tzelY = randomInteger (400);
        console.log("propusk")
        tochki = 0
        dzhivotove = dzhivotove - 1
        skorost = skorost - 0.5
        if (tzelX > 725) {
            tzelX = randomInteger(700)
        }
    }
    if (mouseX > tzelX) {
        if (mouseX < tzelX + 100) {
            if (mouseY > tzelY) {
                if (mouseY < tzelY+50) {
                    tzelY = randomInteger(400)
                    tzelX = randomInteger (700)
                    tochki = tochki + 1
                    console.log(tochki + " tochki")
                    skorost = skorost + 0.005
                    if (tzelX > 725) {
                        tzelX = randomInteger(700)
                    }
                }
            }
        }
    }
    if (tochki == 100) {
        gotemojiX = mouseX
        gotemojiY = mouseY
        console.log("fartnite");
        dzhivotove = 10
    }
    else {
        gotemojiX = 1000
    }
    if (dzhivotove == 0) {
        console.log("frfrfrffrfrfrfrfrfrffrfrfrfrffrfrfrfrfrffrfrfrfrfrfrfrffrfrfrfrfrf")
        location.reload();
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backMarket, 0, 0, 800, 600);
    drawImage(box,tzelX,tzelY,100,50);    700
    drawImage(kufte,mouseX-25,mouseY-25,50,50)
    drawImage(gotemoji,gotemojiX,gotemojiY,100,100)
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}
