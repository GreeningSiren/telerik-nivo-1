// Suzdavame promenlivi
let myX, myY,vragX=[],vragY=[],patronX=[],patronY=[],brpatron,strelqmlisega,obshtopatroni,indexNovPatron;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 0;
    myY = 600-80;
    brpatron=0
    for(iv=0;iv<5;iv=iv+1) {
        vragX[iv]=randomInteger(600-60)
        vragY[iv]=randomInteger(200)
    }
    lives=5
    points=0
    strelqmlisega=false
    indexNovPatron=0
    obshtopatroni=0
    
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    // myX = myX + (mouseX - myX) / 10;
    for(iv=0;iv<5;iv=iv+1) {
        vragY[iv]=vragY[iv]+3
        if(vragY[iv]>600) {
            vragY[iv]=-80
            vragX[iv]=randomInteger(600-60)
        }
        if(areColliding(myX, myY, 60, 80,vragX[iv],vragY[iv],60,80)) {
            lives = lives-1
            console.log("damaeg")
            vragY[iv]=-80
            vragX[iv]=randomInteger(600-60)
        }
        for(ip=0;ip<brpatron;ip=ip+1) {
            if(areColliding(patronX[ip],patronY[ip],30,30,vragX[iv],vragY[iv],60,80)){
                points=points+1
                vragY[iv]=-80
                vragX[iv]=randomInteger(600-60)
            }
        }    
    }
    for(ip=0;ip<brpatron;ip=ip+1) {
        patronY[ip]=patronY[ip]-3.5
    }
    if(strelqmlisega) {
        indexNovPatron=brpatron
        for(ip=0;ip<brpatron;ip=ip+1) {
            if(patronY[ip]<0) {
                indexNovPatron=ip
            }
        }
        patronX[indexNovPatron]=myX
        patronY[indexNovPatron]=myY
        if(indexNovPatron==brpatron) {
            brpatron=brpatron+1
        }
        obshtopatroni=obshtopatroni+1
    }
    if(lives==0) {
        location.reload()
    }


    //kontrole
    if(isKeyPressed[65] || isKeyPressed[37]) {
        myX=myX-10
    }
    if(isKeyPressed[68] || isKeyPressed[39]) {
        myX=myX+10
    }
}    
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backStars, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
    for(iv=0;iv<5;iv=iv+1) {
        drawImage(cloud,vragX[iv],vragY[iv],60,80)
    }
    for(ip=0;ip<brpatron;ip=ip+1) {
        drawImage(missile[3],patronX[ip],patronY[ip],30,30)    
    }
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);

    console.log("hi")
    strelqmlisega=false

}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    if(key==69) {
        console.log(lives+"%c lives",'color:red')
    }
    if(key==82) {
        brpatron = 0
        console.log("%creset%c cache😉",'color:red','color:yellow')
    }
    if(key==32 || key==38 || key==87){
        strelqmlisega=false
    }
    if(key==84) {
        console.clear()
    }
}
function mousedown() {
    strelqmlisega=true
}
function keydown(key) {
    if(key==32 || key==38 || key==87){
        strelqmlisega=true
    }
}


// koltronli