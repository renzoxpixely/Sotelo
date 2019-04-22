function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};



function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Resultado</h1>  <a href='index.html'>Volver a intentar</a>";
    gameOverHTML += "<h2 id='score'> Su Puntaje es: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;


};



// create questions

var questions = [
    new Question("Hola", ["Hola", "Hola princesa","Hola amor"],"Hola"),
    new Question("Hola, ¿parece que ejecute una mala jugada que me recomiendas?", ["Te hacen falta clases particulares pero yo cobro por ello", "No decir nada","Si mala suerte"], "Te hacen falta clases particulares pero yo cobro por ello"),
    new Question("¡Ja, ja! ¿Clases privadas tú a mí? ¡Venga ya! En todo caso, soy yo la que tendría que dártelas a ti. ", ["Practica mas", "Esta claro que el billar se te da fatal", "Espero contrates un maestro"], "Esta claro que el billar se te da fatal"),
    new Question("¿Y, a ver, cuánto cuestan esas clases? ", ["2 dolares la hora", "Te escandalarías al oír lo que cobro con carne", "Gratis te enseño"], "Te escandalarías al oír lo que cobro"),
    new Question("Imbécil. Te vas a enterar.¿Qué te apuesta a que te gano? ", ["Una cena el jueves en la noche quién pierde paga", "Perdon", "Nos vemos"], "Una cena el jueves en la noche quién pierde pag"),
    ];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();


