// Suzdavame promenlivi
let myX, myY,izstrelqnLiSym,dx,dy,points;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    nachalo()
    izstrelqnLiSym=false;
    setposvragpl()
    points=0
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    if(izstrelqnLiSym){
        move();
    }
    if(myX>=800 || myY>600) {  // geisko debugvane ig
        nachalo()
        dx=0;
        dy=0;
        izstrelqnLiSym=false
        points=0
        console.log("POINTS LOST!")
    }
    if(areColliding(myX, myY, 60, 80,vragX,vragY,60,80)){
        nachalo()
        dx=0;
        dy=0; 
        setposvragpl()
        izstrelqnLiSym=false
        points=points+1
        console.log("+1 points", "Total:", points)
    }
    if(points==10) {
        console.log("U WIN!")
        location.reload()
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(angriback, 0, 0, 800, 600);
    drawImage(box, myX, myY, 60, 80);
    drawImage(flagBlue1,vragX,vragY,60,80);
    if(!izstrelqnLiSym) {
        izstrelqnLiSym=true
        setD()
        for(stypka=0;stypka<600;stypka=stypka+1) {
            move()
            drawImage(greenpaddle,myX,myY,7,7)
        }
        nachalo()
        izstrelqnLiSym=false
    }
    drawImage(paddle,plX,ply,50,10)
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
//    console.log("Mouse clicked at", mouseX, mouseY);
    if(izstrelqnLiSym==false){
        izstrelqnLiSym=true;
        setD();
    }
   console.log(dx, dy);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    if(key==69){
        sideeye()
    }
}
function setD() {
    dx=mouseX-50
    dy=mouseY-500
}
function move() {
    myX=myX+dx*0.1;
    myY=myY+dy*0.1;
    dy=dy+0.1
    if(areColliding(myX, myY, 60, 80,plX,ply,50,10)) {
        dy=-dy
    }
}
function nachalo() {
    myX = 20;
    myY = 600-80;
}
function sideeye(){
    for(spam=1;spam<201;spam=spam+1){
        console.log("BOMBASTIC side eye!")
        console.log("Crimminal, Offencive SIDE EYE")
    }
}
function setposvragpl() {
    vragX=480+randomInteger(300);
    vragY = randomInteger(600-120);
    plX= randomInteger(vragX);
    ply= randomInteger(600-120);
}