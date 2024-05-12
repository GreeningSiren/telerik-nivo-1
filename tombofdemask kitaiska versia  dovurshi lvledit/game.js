// Suzdavame promenlivi
let myX, myY,dx,dy,x,y,lvl,il;
let kakvoImaV=[],flagX=[],flagY=[],startX=[],startY=[];
let stenaX=[],stenaY=[];
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 2;
    myY = 10;
    //stena kords
    // stenaX[0]=2;  stenaY[0]=5
    // stenaX[1]=6;  stenaY[1]=6
    // stenaX[2]=5;  stenaY[2]=2 
    // stenaX[3]=11; stenaY[3]=3
    // stenaX[4]=10; stenaY[4]=8
    dx=0;          dy=0
    lvl=0
    startX[lvl]=2
    startY[lvl]=10
    myX=startX[lvl]
    myY=startY[lvl] 
    
    for(x=0;x<16;x=x+1) {
        kakvoImaV[x]=[]
        for(y=0;y<12;y=y+1) {
            kakvoImaV[x][y]=[]
            for(il=0;il<10;il=il+1) {
                kakvoImaV[x][y][il]=0
            }
        }
    }
    kakvoImaV[2][5][0]=1
    kakvoImaV[6][6][0]=1
    kakvoImaV[5][2][0]=1
    kakvoImaV[11][3][0]=1
    kakvoImaV[10][8][0]=1
    flagX[0]=0
    flagY[0]=7
    //////////////////////
    startX[1]=0
    startY[1]=7
    kakvoImaV[3][7][1]=1
    kakvoImaV[2][2][1]=1
    kakvoImaV[6][3][1]=1
    kakvoImaV[5][9][1]=1
    kakvoImaV[10][8][1]=1
    kakvoImaV[9][2][1]=1
    kakvoImaV[14][3][1]=1
    kakvoImaV[13][9][1]=1
    flagX[1]=15
    flagY[1]=8
    //////////////////////
    startX[2]=15
    startY[2]=8
    kakvoImaV[15][0][2]=2
    kakvoImaV[15][11][2]=2
    kakvoImaV[12][8][2]=1
    kakvoImaV[13][11][2]=1
    kakvoImaV[13][5][2]=2
    kakvoImaV[8][10][2]=1
    kakvoImaV[9][11][2]=2

}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    myX=myX + dx 
    myY=myY + dy
    if(myX*50<0 || myX*50>799 || myY*50<0 || myY*50>600) {
        
        dx=0
        dy=0
        myX=startX[lvl]
        myY=startY[lvl]

    }
    if(areColliding(myX*50, myY*50, 49, 49,50*flagX[lvl],50*flagY[lvl],49,49)) {
        console.log("SpongeBob SpongeBob, Patrick Patrick, Sandy Sandy, MrCrabs MrCrabs, Squidward Squidward, Plankton Plankton")
        dx=0
        dy=0
        lvl=lvl+1
    }
    if(kakvoImaV[myX][myY][lvl]==1){
        console.log("dokos") 
        myX=myX-dx
        myY=myY-dy
        dx=0
        dy=0
    }
    if(kakvoImaV[myX][myY][lvl]==2){
        console.log("SMURT")
        myX=startX[lvl]
        myY=startY[lvl]
        dx=0
        dy=0
    }
}
function draw() {   
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backStars, 0, 0, 800, 600);
    drawImage(parrot, myX*50, myY*50, 50, 50);
    if(lvl==0){
        drawImage(boxItemDisabled,100,550,50,50)
    }    
    for(is=0;is<10;is=is+1) { 
        drawImage(boxItem,50*stenaX[is],50*stenaY[is],50,50)
    }
    for(x=0;x<16;x=x+1) {
        for(y=0;y<12;y=y+1) {
            if(kakvoImaV[x][y][lvl]==1){
                drawImage(boxsus,50*x,50*y,50,50)
            }
            if(kakvoImaV[x][y][lvl]==69) {
                console.log("the seceret block 😮😮")
            }
            if(kakvoImaV[x][y][lvl]==2){
                drawImage(lave,50*x,50*y,50,50)
            }
        }
    }   
        drawImage(flagGreen1,50*flagX[lvl],50*flagY[lvl],50,50)   
}

function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    // console.log("Mouse clicked at", mouseX, mouseY);

    
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    // console.log("Pressed", key);
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


    //debug
    if(key==69){
        lvl=3
        startX[2]=15
        startY[2]=8
    }
}

function imaLiStenaV(x,y) {
    for(is=0;is<10;is=is+1) { 
        if(stenaX[is]==x &&  stenaY[is]==y) {        ///////////       BAD!!!👎👎👎👎👎👎👎👎👎🏿👎🏿👎🏿👎🏿👎🏿👎🏿👎🏿👎🏿
            console.log("iam")
            return true
        }
    }
    return false
}   


















































































































































































































































































































////////////////////////////////////////////////////////////////  nqma kod za tebe  ////////////////////////////////////////////////////////////////