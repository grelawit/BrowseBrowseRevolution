<!DOCTYPE html>
<html>

    <head>
        <script src="scripts/_objects/BAR.js"></script>
        <script src="scripts/_objects/GAME.js"></script>
        <script src="scripts/_objects/HITAREA.js"></script>
        <script src="scripts/_objects/COUNTER.js"></script>
        <script src="scripts/jquery-1.11.3.min.js"></script>
        <link rel="stylesheet" type="text/css" href="styles/mainStyle.css">
    </head>

    <body id="body">

        <h1 id="songHidden"><?php echo $_GET['Song']; ?></h1>


        <!-- <button onClick="activeGame=new Game()" id="gamebutton" class="button">Neues Spiel</button>
        <button onClick="activeGame.giveBar()" class="button">Neuer Balken</button> -->

        <script>
            setTimeout(function(){ activeGame=new Game(document.getElementById('songHidden').innerHTML); }, 3000);
        </script>

    </body>
</html>
