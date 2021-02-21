class Quiz {

    constructor() {



    }

    getState() {

        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {

            gameState = data.val();

        });

    }

    update(state) {

        database.ref("/").update({

            gameState : state

        });

    }

    async start() {

        if(gameState === 0) {

            player = new Player();

            var playerCountRef = await database.ref("playerCount").once("value");

            if(playerCountRef.exists()) {

                playerCount = playerCountRef.val();

                player.getCount();

            }

            question = new Question();
            question.display();

        }

    }

    play() {

        question.hide();

        Player.getPlayerInfo();

        if(allPlayers !== undefined) {

            var displayposition = 200;

            for(var plr in allPlayers) {
    
                var correctAnswer = "A";
    
                if(correctAnswer === allPlayers[plr].answer) {
    
                    fill("green");
    
                }
                else {
    
                    fill("red");
    
                }
    
                displayposition += 50;
                textSize(20);
                stroke("black");
                strokeWeight(2);
                textFont("Roboto Mono");
                text(allPlayers[plr].name + " : " + allPlayers[plr].answer, 520, displayposition);
                
                textSize(25);
                fill("white");
                text("NOTE : PLAYERS WHO ANSWERED CORRECTLY ARE HIGHLIGHTED IN GREEN COLOR", 100, 200);

                textSize(50);
                fill("white");
                text("RESULTS", 500, 550);
    
            }

        }

    }

}