/*jslint devel: true, indent: 4, browser: true*/

function Game(song) {
    "use strict";
    self = this;
    this.alleBalken = [];
    this.moveIsOn = false;
    this.vorbei = false;
    this.hitarea = new Hitarea();
    this.counter = new Counter();
    this.lives = 5;
    this.bpm = 11; //-->diese ist in komischer Abhängigkeit...
    this.music = new Audio('media/'+song+'.mp3');
    this.music.onend = function () { this.success(); };
    this.music.play();
    this.intervalID = setInterval(function () {self.giveBar(); }, 800);
    //this.Hintergrund = "media/Background.png";  //Noch anhängen

    this.giveBar = function () {
        this.alleBalken[this.alleBalken.length] = new Balken(Math.round(Math.random() * 20) + 4);
    };

    this.stop = function () {
        clearInterval(this.intervalID);
        this.music.pause();
        //activeGame.alleBalken = [];
    };

    this.fail = function () {
        this.lives--;
        this.counter.fail();
        if (this.lives === 0) {
            activeGame.gameOver();
        }
    };

    this.gameOver = function () {
        this.stop();
        for(var i=0;i<this.alleBalken.length;i++) {
            this.alleBalken[i].stay();
            //this.alleBalken[i].bild.fadeOut();
        }
        //console.log(this+"  GAME OVER");
        window.location = "welcomescreen.php#gameEnd";
    };

    this.success = function () {
        this.stop();
        for(var i=0;i<this.alleBalken.length;i++) {
            this.alleBalken[i].stay();
            //this.alleBalken[i].bild.fadeOut();
        }
        //console.log(this+"  GAME OVER");
        window.location = "welcomescreen.php#gameSuccess";
    };
}
