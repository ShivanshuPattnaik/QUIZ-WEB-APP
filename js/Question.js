class Question {

    constructor() {

        // MAIN PARTS
        this.heading = createElement("h1");
        this.nameInput = createInput("ENTER YOUR NAME");

        // QUESTIONS
        this.questionHeading = createElement("h2");
        this.question = createElement("p");
        this.optionA = createElement("h2");
        this.optionB = createElement("h2");
        this.optionC = createElement("h2");
        this.optionD = createElement("h2");
        this.answerInput = createInput("WRITE THE ANSWER HERE");
        this.submitAnswer = createButton("SUBMIT");
        // this.questionHeading2 = createElement("h2");
        // this.question2 = createElement("p");
        // this.answerInput2 = createInput("ANSWER");
        // this.submit2 = createButton("SUBMIT");

    }

    hide() {

        this.submitAnswer.hide();
        this.answerInput.hide();
        this.optionD.hide();
        this.optionA.hide();
        this.optionB.hide();
        this.optionC.hide();
        this.question.hide();
        this.questionHeading.hide();
        this.nameInput.hide();

    }

    display() {

        this.heading.html("WELCOME TO QUIZ APP");
        this.heading.position(580, 50);

        this.nameInput.position(600, 450);

        this.question.html('Who Said This "Talk Is Cheap, Show Me The Code" ? ');
        this.question.position(450, 200);

        this.optionA.html("A. Linus Torvalds");
        this.optionB.html("B. Linus Hamill");
        this.optionC.html("C. Linus Lucas");
        this.optionD.html("D. Linus Reynolds");

        this.optionA.position(450, 260);
        this.optionB.position(450, 290);
        this.optionC.position(450, 320);
        this.optionD.position(450, 350);

        this.answerInput.position(600, 490);

        this.submitAnswer.position(720, 550);
        this.submitAnswer.mousePressed(()=>{
            
            this.nameInput.hide();

            this.submitAnswer.hide();

            this.answerInput.hide();

            player.name = this.nameInput.value();
            playerCount += 1;
            player.index = playerCount;
           
            player.update();
            player.updateCount(playerCount);
            player.answer = this.answerInput.value();;
            player.update();

        });

        // this.questionHeading.html("QUESTION");
        // this.questionHeading.position(700, 150);

    }

}