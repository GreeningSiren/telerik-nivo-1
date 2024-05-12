// Suzdavame promenlivi
let myX, myY,dy
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 100;
    myY = 600-80;
    vragX = 800
    vragY = 280
    lives=3
    dy=1
    kadyr=0
    ostavashtiskoci=3
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    vragX= vragX-3
    myY=myY+dy
    dy=dy+0.1
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
    if(myY+80>600) {
        dy=0
        ostavashtiskoci=3
        myY=600-80
    }
    if(ostavashtiskoci==0) {
        console.log("emi sq NEMOZHe... pochini si dolu")
        ostavashtiskoci=-1
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(flepibrud, 0, 0, 800, 600);
    kadyr=kadyr+1
    if(kadyr>=20) {
        kadyr=0
    }
    if(ostavashtiskoci>=1) {
        drawImage(princess[kadyr], myX, myY, 60, 80);
    }else{
        drawImage(springMan,myX,myY,60,80)
    }
    drawImage(cat,vragX,vragY,100,50)
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    if(ostavashtiskoci>=1) {
        if(key==32) {
            dy=-5
            ostavashtiskoci=ostavashtiskoci-1
        }
    }   
    if(key==69) {
        console.log(dy + " dy")
        console.log(ostavashtiskoci + " skoci")
    }
}

