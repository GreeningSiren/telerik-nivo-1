// Suzdavame promenlivi
let myX, myY,plX=[],plY=[],plTip=[],ip=[],lives;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 0;
    for(ip=0;ip<10;ip=ip+1) {
        plX[ip]=randomInteger(800)
        plY[ip]=randomInteger(600)
        plTip[ip]=randomInteger(4)
    }
    lives=100
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    // myX = myX + (mouseX - myX) / 10;
    myY=myY+1
    if(myY>600) {
        myY=300
        lives=lives-2
    }   

    for(ip=0;ip<10;ip=ip+1) {   
        plY[ip]=plY[ip]-1
        if(areColliding(myX,myY,60,80,plX[ip],plY[ip],100,20)) {
            if(plTip[ip]==0) {
                myY=plY[ip]-80
            }
            if(plTip[ip]==1) {
                console.log("no")
                lives=lives-5
                plY[ip]=-100    
            }
            if(plTip[ip]==2) {
                myY=myY-100
            }
            if(plTip[ip]==3) {
                myY=myY-25     
                plY[ip]=-100
            }
        }
        if(plY[ip]<0) {
            plY[ip]=600
            plX[ip]=randomInteger(700)
            plTip[ip]=randomInteger(4)
        }

    }
    if(lives<=0) {
        location.reload()
    }
    if(isKeyPressed[65]) {
        myX=myX-5
    }   
    if(isKeyPressed[68]) {   
        myX=myX+5
    }
    if(isKeyPressed[76]) {  // 70-f  abcdefghijkl   
        myY=240
        myY=myY-1
    }

} 
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backTrees, 0, 0, 800, 600);
    drawImage(explosion1, myX, myY, 60, 80);
    for(ip=0;ip<10;ip=ip+1) {
        if(plTip[ip]==0){
            drawImage(box, plX[ip], plY[ip], 100, 20)
        }
        if(plTip[ip]==1) {
            drawImage(barrelRed, plX[ip], plY[ip], 100, 20)
        }
        if(plTip[ip]==2) {
            drawImage(barrelGreen, plX[ip], plY[ip], 100, 20)
        }
        if(plTip[ip]==3) {
            drawImage(barrelGrey, plX[ip], plY[ip], 100, 20)
        }
    }
    drawImage(box,9,9,100+2,10+2)
    drawImage(paddle,10,10,lives,10)
    drawImage(heart,120,10,10,10)
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish

    // console.log("Pressed", key);
}
function keydown(key) {
        if(key==69) {
        console.log(lives)
    }
}