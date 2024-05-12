// Suzdavame promenlivi
let myX, myY,ostavashtiUpdatiIzdigane;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 600-80;
    vragX = 800
    vragY = 280
    lives=3
    ostavashtiSkociOtKaktoStupih=3
    kadyr=0
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    vragX= vragX-3
    ostavashtiUpdatiIzdigane=ostavashtiUpdatiIzdigane-1
    if(ostavashtiUpdatiIzdigane>0) {
        myY=myY-3
    }else{
        myY=myY+3
    }
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
    if(myY>600-80) {
        myY= 600-80
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    kadyr=kadyr+1
    if(kadyr>=20) {
        kadyr=0
    }
    drawImage(princess[kadyr], myX, myY, 60, 80);
    drawImage(cat,vragX,vragY,100,50)
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    if(myY==600-80){
        if(key==32){
            ostavashtiUpdatiIzdigane=100;
            ostavashtiSkociOtKaktoStupih=2
        }
    }
    if(ostavashtiSkociOtKaktoStupih==2||ostavashtiSkociOtKaktoStupih==1){
        if(key==32) {
            ostavashtiUpdatiIzdigane=100
            ostavashtiSkociOtKaktoStupih=ostavashtiSkociOtKaktoStupih-1
        }
    }
    if(key==69) {
        console.log(ostavashtiSkociOtKaktoStupih)
    }

}


    