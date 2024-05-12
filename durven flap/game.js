// Suzdavame promenlivi
let myX, myY, catX, catY, cat2x, cat2y, cat3x, cat3y, skorostcatX, ostavashtiskoci, brPrerajdania;
function init() {
    myX = 100;
    myY = 100;
    catX = 800;
    catY= 300
    cat2x = 1000;
    cat2y = 100
    cat3x = 1300
    cat3y = 400
    skorostcatX = 1
    ostavashtiskoci = 3
    brPrerajdania = 0
}
function update() {
    myX = myX
    myY = myY + 1.5
   catX = catX - skorostcatX
   skorostcatX = skorostcatX + 0.001
   cat2x = cat2x - 2
   cat3x = cat3x - 5
   cat3y = cat3y - 1
   if (catX < -200) {
    catX = 800;
    brPrerajdania = brPrerajdania + 1
    console.log (brPrerajdania + " prerazhdania");
}
if (cat2x < -200) {
    cat2x = 1000;
}
if (cat3x < -200) {
    cat3x = 1300;
    cat3y = 400
}
   if (myY+80 > 600) {
    myY = 600-80
    ostavashtiskoci = 3
//    myY = 300
   }
   if (myY < -60) {
    myY = 520
   }
}
function draw() {
    drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
    drawImage(cat,catX,catY,150,50);
    drawImage(cat,cat2x,cat2y,150,50);
    drawImage(cat,cat3x,cat3y,150,50);
    drawImage(boxItem,cat2x + 50,cat2y - 78,50,100)
    drawImage(bird,cat2x + 50,cat2y - 78,50,100)
}
function mouseup() {
//    console.log("Mouse clicked at", mouseX, mouseY);
    
}
function keydown(key) {
    if (ostavashtiskoci > 0) {
        myY = myY - 210
        ostavashtiskoci = ostavashtiskoci - 1
        console.log ("ti polzva skok *lozho za teb*")
    }
}
