// Suzdavame promenlivi 
let myX, myY; 
function init() { 
    // Kodut tuk se izpulnqva vednuj v nachaloto 
    myX = 300; 
    myY = 300; 
    topkaX=300 
    topkaY=-50 
    topkaZ=1 
    dz=0.01 
    dx=2
    dy=2 
} 
function update() { 
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda 
    myX = myX + (mouseX - myX) / 10; 
    myY = myY + (mouseY - myY) / 10; 
    topkaZ=topkaZ+dz 
    topkaX=topkaX+dx 
    topkaY=topkaY+dy
    if(topkaZ>10) { 
        dz = -0.01 
    } 
    if(topkaZ<=1) { 
        dz= 0.01 
        if(areColliding(myX, myY, 60, 80,400+topkaX/topkaZ,300+topkaY/topkaZ,200/topkaZ,200/topkaZ)) { 
            console.log("nz") 
        }; 
    }; 
    if(topkaX+200>400) { 
        dx=-2; 
    }; 
    if(topkaX<-400) { 
        dx=2; 
    };
    if(topkaY+200>300) {
        dy=-2
    }
    if(topkaY<-300){
        dy=2
    } 
    //     if(topkaY>500) { 
    //         dy=-dy 
    //     } 
    // if(topkaY<10) { 
    //     dy=-dy 
    // } 
    // console.log(dx,dy)  
} 
function draw() { 
    // Tuk naprogramirai kakvo da se risuva     
    // drawImage(backField, 0, 0, 800, 600); 
    drawImage(femaleAction, myX, myY, 60, 80);    
    context.strokeRect(400+(-400/topkaZ),300+(-300/topkaZ),800/topkaZ,600/topkaZ);
    for(iRZ=1;iRZ<=10;iRZ=iRZ+1){
        context.strokeRect(400+(-400/iRZ),300+(-300/iRZ),800/iRZ,600/iRZ)
    }
    drawImage(ballOrTree,400+topkaX/topkaZ,300+topkaY/topkaZ,200/topkaZ,200/topkaZ);
    drawImage(ballOrTree,400+400/topkaZ,300+topkaY/topkaZ,10/topkaZ,100/topkaZ);
    drawImage(ballOrTree,400+(-400/topkaZ),300+topkaY/topkaZ,10/topkaZ,100/topkaZ);
} 
function mouseup() { 
    // Pri klik s lqv buton - pokaji koordinatite na mishkata 
    console.log("Mouse clicked at", mouseX, mouseY); 
} 
function keyup(key) { 
    // Pechatai koda na natisnatiq klavish 
    console.log("Pressed", key); 
} 
 
 