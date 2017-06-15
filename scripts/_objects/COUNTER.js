/*jslint devel: true, indent: 4, browser: true*/

function Counter() {
    "use strict";
    // this.points = 0;
    // this.clock = document.createElement("p");
    // this.clock.innerHTML = this.points;
    // this.clock.style.position = 'fixed';
    // this.clock.style.top = "20px";
    // this.clock.style.left = "200px";
    // this.clock.style.color = "white";
    // this.clock.style.fontSize = "4em";
    // document.body.appendChild(this.clock);
    this.clock = document.createElement("DIV");
    this.clock.id = 'herzen';
    document.body.appendChild(this.clock);
    for (var i = 0; i < 5; i++) {
        this.herz = document.createElement("IMG");
        this.herz.src = "media/herz.png";
        this.herz.style.width = "40px";
        this.herz.style.height = "40px";
        this.clock.appendChild(this.herz);
    }

    this.fail = function(){
        if(activeGame.lives>-1){
            this.clock.removeChild(this.clock.lastChild);
        }
    };
}
