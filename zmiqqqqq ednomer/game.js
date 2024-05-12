// Suzdavame promenlivi
let myX, myY;
let minatoX=[],minatoY=[],brMinati,im,tzelX,tzelY,points,dulzhina;
let started=false
let posoka   // 0-gore 1-levo 2-desno 3-dolu
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 375;
    myY = 25;
    dx=0
    dy=0
    brMinati=0
    posoka=-1
    tzelX=randomInteger(800-50)
    tzelY=randomInteger(600-50)
    points=0
    dulzhina=0
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    // myX = myX + (mouseX - myX) / 10;
    // myY = myY + (mouseY - myY) / 10;
    myX=myX+dx
    myY=myY+dy
    
    if(myX<0 || myX>800 || myY<0 || myY>600) {
        myX = 375;
        myY = 25;
        brMinati=0
        dx=0
        dy=0
        console.log("%ctapak,proval",'color: red')
        started=false
        posoka=-1
    }
    if(started==false){
        brMinati=0
    }
    
    for(im=brMinati-100;im<brMinati;im=im+1){
        if(myX==minatoX[im] && myY==minatoY[im]){
            myX = 375;
            myY = 25;
            brMinati=0
            dx=0
            dy=0
            console.log("%ctapak,proval",'color: red')
            started=false
            posoka=-1
        }    
    }
    minatoX[brMinati]=myX
    minatoY[brMinati]=myY
    brMinati=brMinati+1

    if(areColliding(myX, myY, 50, 50,tzelX,tzelY,50,50)) {
        points=points+1
        tzelX=randomInteger(800-50)
        tzelY=randomInteger(600-50)
        dulzhina=dulzhina+1
    }

}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(greenpaddle, 0, 0, 800, 600);
    for(im=brMinati-100;im<brMinati;im=im+1){
        drawImage(lightgreenpaddle,minatoX[Math.floor(im)],minatoY[Math.floor(im)],50,50)
    }
    drawImage(robot, myX, myY, 50, 50);
    if(started==false){
        drawImage(snakemainmenu,0,75,800,500)
    }
    drawImage(cherry,tzelX,tzelY,50,50)
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    // console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    // console.log("Pressed", key); 
    if(key==38 || key==87) {   //gire
        if(posoka!=3){
            dx=0
            dy=-1
            started=true
            posoka=0
        }
    }
    if(key==37 || key==65){  //levo
        if(posoka!=2){    
            dx=-1
            dy=0
            started=true
            posoka=1
        }
    }
    if(key==39 || key==68) {  //desno
        if(posoka!=1){    
            dx=1
            dy=0
            started=true
            posoka=2
        }
    }
    if(key==40 || key==83) { // dolo
        if(posoka!=0){    
            dx=0
            dy=1
            started=true
            posoka=3
        }
    }
        if(key==69){
            // dx=0
            // dy=0
            brMinati=0
        }

}

