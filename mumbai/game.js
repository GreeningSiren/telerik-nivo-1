// Suzdavame promenlivi
let myX, myY,lives;
let koliX=[], koliY=[],brKoli,posokaKoli=[],ik,ij;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    brKoli=0
    sledvashtaKola=0
    lives=5
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    for(ik=0;ik<brKoli;ik=ik+1){
        if(posokaKoli[ik]==0){
            koliY[ik]=koliY[ik]-1
        }else{
            koliX[ik]=koliX[ik]+1
        }
        
        
        if(koliY[ik]<-50) {
            koliY[ik]=600 
        }
        if(koliX[ik]>800+50) {
            koliX[ik]=0
        }
        if(areColliding(koliX[ik],koliY[ik],50,50)) {
            lives=lives-1
        }
        for(idk=0;idk<ik;idk=idk+1) {
            if(areColliding(koliX[ik],koliY[ik],50,50,koliX[idk],koliY[idk],50,50)){
                koliX[ik]=randomInteger(-1234234234234234234323423456)
                koliX[idk]=randomInteger(-1234234234234234234323423456)
                console.log("fraz", ik , idk)
                lives=lives-1
                console.log(lives + " %clives left", 'color:red')
            }
        }  
    }
    if(lives<=0) {
        location.reload()
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backForest, 0, 0, 800, 600);
    for(ik=0;ik<brKoli;ik=ik+1){
        if(posokaKoli[ik]==0){
            drawImage(carBlack,koliX[ik],koliY[ik],50,50)
            // console.log("azsdffcg")
        }else{
            drawImage(carRed,koliX[ik],koliY[ik],50,50)
            // console.log("tfgyuhiguvbhin")
        }
    } 
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
    if(sledvashtaKola==0) {
        koliX[brKoli]=mouseX
        koliY[brKoli]=550
        posokaKoli[brKoli]=0
        brKoli=brKoli+1
        sledvashtaKola=1
    }else{
        koliX[brKoli]=0
        koliY[brKoli]=mouseY
        posokaKoli[brKoli]=1
        brKoli=brKoli+1
        sledvashtaKola=0

    }
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}