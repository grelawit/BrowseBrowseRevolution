/*jslint devel: true, indent: 4, browser: true */

function Balken(anzahl) {
    "use strict";
    var i = 0, self = this;
    this.bild = document.createElement("DIV");
    this.bild.style.position = 'fixed';
    this.bild.style.top = 10 + "px";
    this.bild.style.whiteSpace = "nowrap";
    this.randLinks = 400;
    this.bild.style.left = this.randLinks + "px";
    this.bild.style.display = "hidden";
    $(this.bild).fadeIn(5000);
    this.anzahl = anzahl;
    this.dead = false;
    this.moves = 0;
    this.laenge = this.anzahl * 15;
    this.blockHoehe = 15;
    this.bild.style.width = this.laenge;
    for (i = 0; i < this.anzahl; i += 1) {
        this.block = document.createElement("IMG");
        if(i==this.anzahl - 1) {this.block.src = "media/RedBall.png";}
        else{this.block.src = "media/GreenBall.png";}
        this.block.style.width = this.blockHoehe + "px";
        this.block.style.height = this.blockHoehe + "px";
        this.bild.appendChild(this.block);

    }
    document.body.appendChild(this.bild);
    this.intervalID = setInterval(function () {self.move(); }, 20); //Vormals activeGame.bpm

    this.stay = function (){
        console.log(this.anzahl + " stays!");
        clearInterval(this.intervalID);
        $(this.bild).fadeOut(200);
    };

    this.move = function () {
        this.moves++;
        this.bild.style.top = parseInt(this.bild.style.top.replace('px', ''), 10) + 1 + "px";
        if(this.moves % 4 === 0){this.check();}
        //this.check();
    };

    this.check = function () {
        //console.log("Checking!");
        this.obererPunkt = parseInt(this.bild.style.top.replace('px', ''), 10);
        this.untererPunkt = this.obererPunkt + this.blockHoehe;
        //sehen ob Element im gelben Bereich
        if (this.obererPunkt >= activeGame.hitarea.randOben && this.untererPunkt <= activeGame.hitarea.randUnten) {
            this.arrayPos = activeGame.alleBalken.indexOf(this);
            //sehen ob es "gefangen" wird
            if (window.outerWidth < this.randLinks + this.laenge + 20 && window.outerWidth > this.randLinks + this.laenge - 20) {
                //console.log(this.arrayPos + " erfolgreich zerstört");
                if(this.dead === false){
                this.suicide1();//sucide
                }
            }
        }
        if (this.obererPunkt >= activeGame.hitarea.randUnten && this.obererPunkt <= activeGame.hitarea.randUnten+5) {
            //$(this.bild).fadeOut(3000);
            //this.delete();
            if(this.dead === false){
                this.suicide1();//sucide
                activeGame.fail();
            }

            //console.log(activeGame.alleBalken.length);

        }
    };

    this.suicide1 = function() {
        var self=this;
        this.dead = true;
        $(this.bild).fadeOut(200, function(){self.suicide2();});

    };

    this.suicide2 = function() {
        //console.log(this.dead);
        //var self = this;
        this.place = activeGame.alleBalken.indexOf(this);
        this.bild.parentNode.removeChild(this.bild);
        //document.getElementById('body').removeChild(this.bild);
        activeGame.alleBalken.splice(this.place, 1);
        this.dead = true;
    };
}
