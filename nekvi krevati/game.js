// Suzdavame promenlivi
let myX, myY, boxX,boxLiDaRisuvamSega,sBoxLiDaPochvaReda,raztoqnie,kadyr;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto
    myX = 300;
    myY = 300;
    centerX=400
    centerY=300
    raztoqnie=1
    kadyr=0
    dy=-10
}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekund
    raztoqnie=raztoqnie+0.5
    kadyr=kadyr+1
    centerY=centerY+dy
    dy=dy+0.2
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    if(kadyr>47) {
        kadyr=0
    }
    sBoxLiDaPochvaReda=true
    drawImage(backField, 0, 0, 800, 600);
    for (y=-10;y<10;y=y+1) {
        sBoxLiDaPochvaReda=(!sBoxLiDaPochvaReda)
        boxLiDaRisuvamSega=sBoxLiDaPochvaReda
        for(x=-10;x<10;x=x+1) {
            if(boxLiDaRisuvamSega) {
                drawImage(gem[kadyr],centerX+x*raztoqnie,centerY+y*raztoqnie,50,50)
                boxLiDaRisuvamSega=false
            }else{
                drawImage(gem[kadyr],centerX+x*raztoqnie,centerY+y*raztoqnie,50,50)
                boxLiDaRisuvamSega=true
            }
        }
    }
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}
