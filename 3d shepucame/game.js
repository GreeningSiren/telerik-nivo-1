// Suzdavame promenlivi
let myX, myY,vragX,vragY,vragZ,patronX,patronY,patronZ,points;
let kartinka,x3d,y3d,z3d,rx,ry,syanka
function init() {
    myX = 300;
    myY = 300;
    vragX=100
    vragY=-150
    vragZ=10
    dz=0.05
    points=0
}
function update() {
    myX = myX + (mouseX - myX) / 10;
    myY = myY + (mouseY - myY) / 10;
    vragZ=vragZ-dz
    patronZ=patronZ+0.05
    if(vragZ<1){
        dz=-0.05
    }
    if(vragZ>10){
        dz=0.05 
    }
    if(areColliding(vragX,vragY,100,100,patronX,patronY,25,25) && patronZ-0.4<vragZ && vragZ<0.4+patronZ) {
        console.log("nabime go")
        vragZ=10
        points=points+1
    }
}
function narisuvai3d(kartinka,x3d,y3d,z3d,rx,ry,syanka) {
    drawImage(kartinka,400+x3d/z3d,300+y3d/z3d,100/z3d,100/z3d);
    context.strokeRect(400-400/z3d,300-300/z3d,800/z3d,600/z3d)
    if(syanka) {
        // drawImage(kartinka,400+x3d/z3d,300-300/z3d,100/z3d,100/z3d)//up
        drawImage(kartinka,400+x3d/z3d,300+300/z3d,100/z3d,100/z3d)//down
        drawImage(kartinka,400+400/z3d,300+y3d/z3d,10/z3d,100/z3d);//lefo
        drawImage(kartinka,400+(-400/z3d),300+y3d/z3d,10/z3d,100/z3d);//desno
    }    
}
function draw() {
    // drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 60, 80);
    context.strokeRect(0,0,800,600)
    narisuvai3d(cat,vragX,vragY,vragZ,100,100,true)
    narisuvai3d(crosshairOutline,patronX,patronY,patronZ,25,25,false)
}
function mouseup() {
    // console.log("Mouse clicked at", mouseX, mouseY);
    patronX=mouseX-400
    patronY=mouseY-300
    patronZ=1
}
function keyup(key) {
    console.log("Pressed", key);
    if(key==80){
        console.log(points)
    }
}
