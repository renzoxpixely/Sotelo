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
    element.innerHTML = "Pregunta " + currentQuestionNumber + " de " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Resultado</h1>  <a href='index.html'>Volver a intentar</a>";
    gameOverHTML += "<h2 id='score'> Su Puntaje es: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;


};



// create questions

var questions = [
    new Question("Hola", ["¿Nerviosa?", "¿Te gusta el hospital?","¿De que estás enferma?"],"¿Nerviosa?"),
    new Question("Un poco, sí -esbozó una pequeña sonrisa educada.", ["No pareces. En realidad pareces una mujer muy segura.", "No decir nada","Tienes razón"], "No pareces. En realidad pareces una mujer muy segura."),
    new Question("¿Por qué? -abrió los ojos de par en par ante mi lance.", ["Porque las mujeres son mas valientes que los hombres", "Espero que el medico se apresure", "El servicio es pesimo"], "Porque las mujeres son mas valientes que los hombres"),
    new Question("Bueno, no sé… -se sonrojó. Más por sorpresa ante mi conversación que por incomodidad.", ["Espero que te vaya bien en el medico", "Porque queria hacerte sonreir y lo he conseguido.", "Me tengo que ir"], "Porque queria hacerte sonreir y lo he conseguido."),
    new Question("¿Por qué?-preguntó curiosa.", ["Que tienes los dientes perfectos.¿no crees que deberias estar disfrutando el dia?", "Suerte con el medico.", "Nos vemos"], "Que tienes los dientes perfectos.¿no crees que deberias estar disfrutando el dia?"),
    ];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





