/*jslint devel: true, indent: 4, browser: true*/

function Hitarea() {
    "use strict";
    this.bild = document.createElement("DIV");
    this.bild.style.backgroundColor = 'yellow';
    this.bild.style.opacity = '0.3';
    this.bild.style.position = 'fixed';
    this.randOben = 332;
    this.bild.style.top = this.randOben + "px";
    this.hoehe = 100;
    this.bild.style.height = this.hoehe + "px";
    this.randUnten = this.randOben + this.hoehe;
    this.bild.style.left = "0px";
    this.bild.style.width = "100%";
    //this.bild.src = "media/YellBlock.png";
    document.body.appendChild(this.bild);
}
