// Suzdavame promenlivi
let myX, myY,dx,dy,x,y;
let stenaX=[],stenaY=[];
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 2;
    myY = 10;
    //stena kords
    stenaX[0]=2;  stenaY[0]=5
    stenaX[1]=6;  stenaY[1]=6
    stenaX[2]=5;  stenaY[2]=2
    stenaX[3]=11; stenaY[3]=3
    stenaX[4]=10; stenaY[4]=8
    flagX=0;      flagY=7
    dx=0;          dy=0
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myX=myX + dx 
    myY=myY + dy
    if(imaLiStenaV(myX,myY)){
        myX=myX-dx
        myY=myY-dy
        dx=0
        dy=0
    }
    if(areColliding(myX*50, myY*50, 49, 49,50*flagX,50*flagY,49,49)) {
        console.log("SpongeBob SpongeBob, Patrick Patrick, Sandy Sandy, MrCrabs MrCrabs, Squidward Squidward, Plankton Plankton")
        location.reload()
    }
    if(myX*50<0 || myX*50>800 || myY*50<0 || myY*50>600) {
        location.reload()
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX*50, myY*50, 50, 50);
    drawImage(boxItemDisabled,100,550,50,50)
    for(is=0;is<10;is=is+1) { 
        drawImage(boxItem,50*stenaX[is],50*stenaY[is],50,50)
    }
    drawImage(flagYellow1,50*flagX,50*flagY,50,50)
}
function imaLiStenaV(x,y) {
    for(is=0;is<10;is=is+1) { 
        if(stenaX[is]==x &&  stenaY[is]==y) {
            console.log("iam")
            return true
        }
    }
    return false
}   
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    if(key==87 || key==38) {
        dx=0
        dy=-1
    }
    if(key==68 || key==39) {
        dx=1
        dy=0
    }
    if(key==83 || key==40) {
        dx=0
        dy=1
    }
    if(key==65 || key==37) {
        dx=-1
        dy=0
    }
}








































































































////////////////////////////////////////////////////////////  nqma kod za tebe  ////////////////////////////////////////////////////////////