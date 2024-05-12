// Suzdavame promenlivi
let myX, myY,MinavalliSumPrez=[],x,y,dx,dy,started=false,brMinati,posoka,points,dulzhina;
let brIzminatiUpdati,kogaMinahPrez=[]
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 375;
    myY = 25;
    brMinati=0
    posoka=-1
    dx=0
    dy=0
    points=0
    brIzminatiUpdati=0
    dulzhina=0
    tzelX=randomInteger(800-50)   
    tzelY=randomInteger(600-50)
    started=false

    for(x=0;x<800;x=x+1) {
        MinavalliSumPrez[x]=[]
        kogaMinahPrez[x]=[]
        for(y=0;y<600;y=y+1) {
            MinavalliSumPrez[x][y]=false
            kogaMinahPrez[x][y]=-1000
        }
    }
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    if(started){
        brIzminatiUpdati=brIzminatiUpdati+1
    }
    myX = myX + dx;
    myY = myY + dy;

    if(started) {
        for(x=0;x<800;x=x+1) {
            for(y=0;y<600;y=y+1) {
                if(kogaMinahPrez[x][y]!=-1000 && kogaMinahPrez[x][y]>brIzminatiUpdati-dulzhina) {
                    if(myX==x && myY==y){
                        myX = 375;
                        myY = 25;
                        dx=0
                        dy=0
                        console.log("%ctapak,proval",'color: red')
                        started=false
                        posoka=-1
                        dulzhina=0
                        points=0
                        for(x=0;x<800;x=x+1) {
                            for(y=0;y<600;y=y+1) {
                                kogaMinahPrez[x][y]=-1000
                            }
                        }
                    }
                }
            }
        }
    }
    if(myX<0 || myX>800 || myY<0 || myY>600) {
        myX = 375;
        myY = 25;
        for(x=0;x<800;x=x+1) {
            for(y=0;y<600;y=y+1) {
                kogaMinahPrez[x][y]=-1000
            }
        }
        dx=0
        dy=0
        console.log("%ctapak,proval",'color: red')
        started=false
        posoka=-1
        dulzhina=0
        points=0
    }
    MinavalliSumPrez[myX][myY]=true

    if(areColliding(myX, myY, 50, 50,tzelX,tzelY,50,50)) {
        points=points+1
        tzelX=randomInteger(800-50)
        tzelY=randomInteger(600-50)
        dulzhina=dulzhina+50
    }
    for(x=0;x<800;x=x+1) {
        for(y=0;y<600;y=y+1) {
            if(kogaMinahPrez[x][y]!=-1000 && kogaMinahPrez[x][y]>brIzminatiUpdati-dulzhina) {
                if(areColliding(tzelX,tzelY,50,50,x,y,50,50)) {
                    tzelX=randomInteger(800-50)
                    tzelY=randomInteger(600-50)
                }
            }
        }
    }
    kogaMinahPrez[myX][myY]=brIzminatiUpdati
    if(points==20) {
        console.log("golemo si npc, pozdravleniq... sq refreshni i dai pak")
        alert("golemo si npc, pozdravleniq... sq refreshni i dai pak")
        points=21
        // location.reload()
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(greenpaddle, 0, 0, 800, 600);
    for(x=0;x<800;x=x+1) {
        for(y=0;y<600;y=y+1) {
            if(kogaMinahPrez[x][y]!=-1000 && kogaMinahPrez[x][y]>brIzminatiUpdati-dulzhina) {
                drawImage(lightgreenpaddle,x,y,50,50)
            }
        }
    }
    drawImage(robot, myX, myY, 50, 50);
    drawImage(repair,tzelX,tzelY,50,50)
    if(started==false){
        drawImage(snakemainmenu,0,75,800,500)
    }
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
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








