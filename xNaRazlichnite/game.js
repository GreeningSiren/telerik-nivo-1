// Suzdavame promenlivi
let xNaDebelia, xNaVisokata, rezerXNaDebelia;
function init() {
    xNaDebelia=237;
    xNaVisokata=690;
}
function update() {

}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    drawImage(heroStand,xNaDebelia,300,108,62);
    drawImage(princess[7],xNaVisokata,300,60,100);
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
///    console.log("Pressed", key);
    rezerXNaDebelia = xNaDebelia
    xNaDebelia = xNaVisokata;
    xNaVisokata = rezerXNaDebelia;
    console.log("Changged");
}

