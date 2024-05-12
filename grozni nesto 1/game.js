// Suzdavame promenlivi
let myX, myY;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    console.log("nachalo");
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myX = myX + (mouseX - myX) / 10   
    myY = myY + 2.5
//    console.log("100putivsekunda");
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, 10, myY, 60, 80);
    drawImage(bird,725,380,50,50);
    drawImage(carBlack,392,362,100,160);
    drawImage(bomb,390,260,100,100);
    drawImage(explosion1,390,315,100,100);
    drawImage(box,38,100,100,370);
    drawImage(box,134,248,120,100);
    drawImage(box,250,100,100,370);
    drawImage(starGold,373,315,25,25);
    drawImage(starGold,384 ,281,25,25);
    drawImage(starGold,427 ,254,25,25);
    drawImage(starGold,468,283,25,25);
    drawImage(starGold,484 ,320,25,25);
}
console.log("sichki sa nadraskani");
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
//function keyup(key) {
    // Pechatai koda na natisnatiq klavish
//    console.log("Pressed", key);
//}
// ne e nuzhno / bavno
function keydown(key) {
    console.log("Pressed", key);
}

function keyup(key) {
    console.log("jump");
    myY = myY - 100
}