// Suzdavame promenlivi
let myX, myY;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myX = myX + (mouseX - myX) / 10;
    myY = myY + (mouseY - myY) / 10;
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
///    drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
    drawImage(box,38,100,50,155);
    drawImage(box,88 ,156,60,50);
    drawImage(box,148,100,50,155);
    // Н
    drawImage(box,276,100,50,155);
    drawImage(box,326,205,50,50);
    drawImage(box,372,160,50,50);
    drawImage(box,420,100,50,60);
    drawImage(box,470,100,50,155);
    // И
    drawImage(box,560,100,50,310);
    drawImage(box,610,205,50,50);
    drawImage(box,660,160,50,50);
    drawImage(box,710,100,50,60);
    drawImage(box,610,250,50,50);
    drawImage(box,660,300,50,50);
    drawImage(box,710,350,50,60);
 // К
     drawImage(box,38,350,50,155);
     drawImage(box,84,311,100,77.5); 
     drawImage(box,180,350,50,155);
     drawImage(box,84,500,100,77.5); 
// о
    drawImage(box,280,311,50,260);
    drawImage(box,330,311,100,77.5);
    drawImage(box,425,311,50,260);
// л    тва е Л не е П
    drawImage(box,525,400,50,260);
    drawImage(box,575,400,100,77.5);
    drawImage(box,660,400,50,260);
    drawImage(box,573,510,90,50);
// а
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

