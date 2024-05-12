// Suzdavame promenlivi
let myX, myY,kufteX,kufteY,tochki,dzhivotove,minavaniqNaLqvo,minavaniqNaSreda,minavaniqNaDqsno;
function init() {
    myX = 300;
    myY = 520;
    kufteX = 0
    kufteY = 0
    tochki = 0
    dzhivotove = 3
    minavaniqNaLqvo = 0
    minavaniqNaDqsno = 0
    minavaniqNaSreda = 0
}
function update() {
    if (mouseX > 250) {
        myX = 500
    }
    if (mouseX < 250) {
        myX = 0
    }
    if (250 < mouseX) {
        if (mouseX < 500) {
            myX = 250
        }
    }
    if (myY == kufteY) {
        if (myX == kufteX) {
            console.log("omnonm");
            tochki = tochki + 1
            console.log(tochki + " tochki")
        }
        else {
            dzhivotove = dzhivotove - 1
            console.log("baddie");
        }
    }
    if (dzhivotove == 0) {
        console.log("lozh");
        console.log("game over");
        location.reload("skrito e tuz");
    }
    if (tochki == 10) {
        dzhivotove = 5
        console.log("dzhivotove has been set to '5'")
    }
    kufteY = kufteY + 1
    if (kufteY > 600) {
        kufteY = -300
        if (kufteX == 0) {
            gotinX = randomInteger(1)
            if (gotinX == 0) {
                kufteX = 250
                minavaniqNaLqvo = minavaniqNaLqvo + 1
                console.log(minavaniqNaLqvo + " minavaniq na levo")
                return
            }
            if (gotinX == 1) {
                kufteX = 500
                minavaniqNaLqvo = minavaniqNaLqvo + 1
                console.log(minavaniqNaLqvo + " minavaniq na levo")
                return
            }
        }
        if (kufteX == 250) {
            gotinX = randomInteger(1)
            if (gotinX == 0) {
                kufteX = 0
                minavaniqNaSreda = minavaniqNaSreda + 1
                console.log(minavaniqNaSreda + " minavaniq na srida")
                return
            }
            if (gotinX == 1) {
                kufteX = 500
                minavaniqNaSreda = minavaniqNaSreda + 1
                console.log(minavaniqNaSreda + " minavaniq na srida")
                return
            }
        }
        if (kufteX == 500) {
            gotinX = randomInteger(1)
            if (gotinX == 0) {
                kufteX = 0
                minavaniqNaDqsno = minavaniqNaDqsno + 1
                console.log(minavaniqNaDqsno + " minavaniq na desnu")
                return
            }
            if (gotinX == 1) {
                kufteX = 250
                minavaniqNaDqsno = minavaniqNaDqsno + 1
                console.log(minavaniqNaDqsno + " minavaniq na desnu")
                return
            }
        }
    }
}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    drawImage(backField, 0, 0, 800, 600);
    drawImage(femaleAction, myX, myY, 300, 80);
    drawImage(kufte,kufteX,kufteY,250,62.5)
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}