// Suzdavame promenlivi
let myX, myY,updates;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 0;
    myY = 600-80;
    vragX = 800
    vragY = 280
    lives=3
    ostavashtiskociotkaktostupih=4
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    vragX= vragX-3
    updates = updates-1

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
    if(ostavashtiskociotkaktostupih==4||ostavashtiskociotkaktostupih==3||ostavashtiskociotkaktostupih==2||ostavashtiskociotkaktostupih==1) {
        if(updates>1) {
            myY=myY-2   //izkachvane
        }
    }    
    if(updates<1) {
        myY=myY+2 //slizaane
    }    
    if(myY>600-80) {
        myY=600-80
        ostavashtiskociotkaktostupih=4
    }
    if(myY<0) {
        myY=0
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
    if(key==32) {
        if(myY==600-80||ostavashtiskociotkaktostupih==3||ostavashtiskociotkaktostupih==2||ostavashtiskociotkaktostupih==1) {
            updates=100
            ostavashtiskociotkaktostupih=ostavashtiskociotkaktostupih-1
        }
    }
    if(key==69) {
        console.log(ostavashtiskociotkaktostupih)
    }

}

