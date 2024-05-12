// Suzdavame promenlivi
let myX, myY,vragX=[],vragY=[],ip=[],cameraX,vragSkorost=[],backgrond=[],backX;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX =  0;
    myY = 300;
    skorost=0
    for(ip=0;ip<5;ip=ip+1) { 
        vragX[ip]=randomInteger(80)
        vragY[ip]=randomInteger(540)
        vragSkorost[ip]=randomInteger(5)
    }
    cameraX=0
    back1=0
    back2=-800 
    
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myX = myX + skorost
    myY = myY + (mouseY - myY) / 10;

    if(isKeyPressed[32]){
        if(skorost<250) {
            skorost=skorost+0.05
        }else{
            skorost=skorost-skorost/80
        }
        if(skorost>300){
            skorost=skorost-skorost/80
        }
    }else{
        if(skorost>0){
            skorost=skorost-skorost/80
        }
    }
    
    for(ip=0;ip<5;ip=ip+1) { 
        if(areColliding(myX, myY, 100, 60,vragX[ip],vragY[ip],100,60)) {
            skorost=skorost-5 //change
        }
        vragX[ip]=vragX[ip]+vragSkorost[ip]
        if(vragX>20000){
            vragSkorost[ip]=vragSkorost[ip]+50
        }
        vragSkorost[ip]=vragSkorost[ip]+0.045
        if(myX>250000 && vragX[ip]<250000) {
            console.log("wooooo")
            location.reload()
            vragSkorost=0
        }
        if(vragX[ip]>250000 && myX<250000) {
            console.log("no ;(")
            location.reload()
            vragSkorost=0
            skorost=0
        }
    }
    if(skorost<=0){
        skorost=skorost=0
    }
    if(myY>=600-60) {
        myY=600-60
    } 
    

    
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    cameraX=myX-70
    for(backX=0;backX<250000;backX=backX+800 ) {   
        drawImage(backCactus, backX-cameraX, 0, 800, 600);
    }
    drawImage(backCactus, back1-cameraX, 0, 800, 600);
    drawImage(backCactus, back2-cameraX, 0, 800, 600);
    if(myX>back1+800) {
        back1=back1+1600
    }
    if(myX>back2+800) {
        back2=back2+1600
    }
    for(nz=0;nz<250000;nz=nz+300) {
        drawImage(box,nz-cameraX,300,150,25)
    }
    drawImage(carGreen, myX-cameraX, myY, 100, 60);
    for(ip=0;ip<5;ip=ip+1) { 
        drawImage(carRed,vragX[ip]-cameraX,vragY[ip],100,60)
    } 
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    if(key==69){
        console.log(skorost)
    }
    if(key==82){
        console.log(myX)
    }
}
