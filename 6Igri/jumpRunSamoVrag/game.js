// Suzdavame promenlivi
let myX, myY;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    vragX = 800
    vragY = 280
    lives=3
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    vragX= vragX-3
    if(vragX<-100) {
        vragX=800
        vragY = randomInteger(550)
    }
    if(areColliding(myX, myY, 60, 80,vragX,vragY,100,50)) {
        console.log("proval :(")
        lives=lives-1
        vragX=800
        vragY = randomInteger(550)
    }
    if(lives==0) {
        location.reload()
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
    drawImage(cat,vragX,vragY,100,50)
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

