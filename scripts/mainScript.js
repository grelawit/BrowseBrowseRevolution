//var alleBalken = []; Obsolet weil Game jetzt Objekt.
//var moveIsOn=false; Obsolet weil Game jetzt Objekt.
//var vorbei=false; Obsolet weil Game jetzt Objekt.

/*
this.changeName = function (name) {
        this.lastName = name;
    };
*/






			//var i;

function move()
		{
		"use strict";
		if(moveIsOn===true){return;}
		if(alleBalken.length>0)
			{
			for(var i=0;i<alleBalken.length;i++)
				{
				var y=parseInt(alleBalken[i].style.top.replace('px',''))+1;
				alleBalken[i].style.top=y+"px";
				if(parseInt(alleBalken[i].style.top.replace('px',''))===window.innerHeight)
					{
						vorbei=true;
						console.log("Boooooooooooooooooom!");
						alleBalken.splice(i,1);
						}
					//if(parseInt(alleBalken[i].style.top.replace('px',''))>=parseInt(document.getElementById("goal").style.top.replace('px','')))	{console.log("drueber!");}
					}
				}
				console.log(document.getElementById("goal").style.top);
			setTimeout(function(){move();},50);
			}

function start(){
//game=new Game();
}
