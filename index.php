<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>BRowseBrowseRevolution</title>
        <link href="welcomescreen.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="startPlay">
            <noscript>Sorry, aber dein Browser scheint Javascript zu blocken. Entblocken um zu spielen.</noscript>
            <p id="mobileText">
                Dies ist ein Spiel für "echte" Computer. Geh mit den andern Mobiles spielen!
            </p>
        </div>
        <a id="instructionOpen" href="#instruction" style="display:none;">Play</a>
        <script>
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            document.getElementById('mobileText').style.display="inherit";
        } else {
            document.getElementById('instructionOpen').style.display="inherit";
        }
        </script>
        <div id="instruction" class="intro">
            <div class="songs" id="anleitung">

                <h2>Anleitung</h2>
                <!-- <img src="media/BrowserBrowserDance_1.gif" alt="Eine Anleitung zum Spiel" id="Anleitungsbild"> -->
                <img src="media/Online_BrowserBrowserDance.gif" alt="Eine Anleitung zum Spiel" id="Anleitungsbild">
                <br>
                <a class="looklikebttn" href="#chooseSong">Verstanden!</a>
            </div>

        </div>

        <div id="gameEnd" class="intro">
            <div class="songs Overs" id="gameOverDiv">

                <h2>GAME OVER</h2>
                <h3>Sorry, aber du solltest nochmal an deinen Tanzkünsten feilen.</h3>
                <br>
                <a class="looklikebttn" href="#chooseSong">Nochmal versuchen</a>
            </div>

        </div>

        <div id="gameSuccess" class="intro">
            <div class="songs Overs" id="gameSuccessDiv">

                <h2>WOW!</h2>
                <h3>Wäre das Internet 'ne Disco und dein Browser ein Club, hättest du jetzt mächtig Eindruck geschindet!</h3>
                <br>
                <a class="looklikebttn" href="#chooseSong">Gleich nochmal!</a>
            </div>

        </div>

        <div id="chooseSong" class="intro">
            <div class="headbar">
                <h2>Choose your song!</h2>
            </div>
            <!-- <span id="songspan"> -->
            <div class="songs" id="firstSong">
                <img src="media/Devoiis.jpg" alt="Artist 'Devoiis'" class="artistPic">
                <!-- Bild einfügen -->
                <h5>Disco Sound</h5>
                <h5>by</h5>
                <h5>DJ Devoiis</h5>
                <form action="browsergame.php" method="get">
                    <button type="submit" class="btn" name="Song" value="Devoiis"> Play this! </button>
                    <!-- <input name="Songggg" type="hidden" value="Devoiis"> -->
                    <!-- <input type="submit" value="Devoiis" name="Devoiis" id="submit1" /> -->
                </form>
            </div>

            <div class="songs" id="secondSong">
                <img src="media/WELTsein.jpg" alt="Artist 'WELTsein'" class="artistPic">
                <!-- Bild einfügen -->
                <h5>Mayas' Music</h5>
                <h5>by</h5>
                <h5>WELTsein</h5>
                <form action="browsergame.php" method="get">
                    <button type="submit" class="btn" name="Song" value="WELTsein"> Play this! </button>
                    <!-- <input type="submit" value="WELTsein"
                    name="Song" id="submit2" /> -->
                </form>
            </div>
            <!-- </span> -->

        </div>

    </body>
</html>
