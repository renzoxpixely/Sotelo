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
    new Question("Hola", ["Hola", "Linda fisioterapeuta","Angel del cielo"],"Hola"),
    new Question("Bueno, vamos a comenzar. Por lo que veo en la ficha tienes una luxación en el hombro", ["No es nada", "Fue una embestida de toro me embistió","Claro me duele"], "Fue una embestida de toro me embistió"),
    new Question("Me mira fijamente, quedando paralizada sin saber qué responder. ", ["Broma", "Estaba bromeando fue un accidenete de moto", "Que buen actor soy te la creiste"], "Estaba bromeando fue un accidenete de moto"),
    new Question("Me lo suponía.Pasarón varios días de tratamiento.", ["Me gustaría darle un reconocimento por su buen servicio", "Esperaba que piense asi", "Bella e inteligente"], "Me gustaría darle un reconocimento por su buen servicio"),
    new Question("¿Un reconocimiento?", ["Desde luego organizaré una cena", "Espero a la proxima cita", "Hasta luego"], "Desde luego organizaré una cena"),
    ];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();




