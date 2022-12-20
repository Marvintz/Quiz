
const dataQuiz = [
    {
        question: "Lequel de ces outils n'est pas un navigateur ?",
        a: "Firefox",
        b: "Google ",
        c: "Chrome",
        d: "Safari",
        correct: "b",
    },



   {

    question: "Qui sont le fondateur de microsoft ?",
    a: "Mark zuckerburg, Andrew McCollum, Eduardo Savirin",
    b: "Evan Spiegel, Reggie Brown, Bobby Murphy",
    c: "Jack Dorsey, Evan Williams, Biz Stone, Noah Glass",
    d: "Bill gates, paul Allen",
    correct: "d",
},



{
       question: " c'est quoi Internet ",
       a: "un des 7 nains du dessin animé Blanche Neige",
       b: "un réseau téléphonique permettant de relier les personnes",
       c: 'un réseau mondial permettant de connecter tous les ordinateurs entre eux',
       d: 'facebook ',
       correct: 'c',
   },


   {
    question:  "C'est quoi le Web ?",
    a: "un système permettant de consulter, avec un navigateur, des pages accessibles sur des sites",
    b: "un dispositif de sécurité",
    c: "une carte du monde",
    d: "un dessert californien",
    correct: "a",
},




{
    question: "A quoi sert un navigateur Internet ?",
    a: "à recharger la batterie de son ordinateur",
    b: "à partager des infos ",
    c: "à consulter et afficher le contenu des sites Web",
    d: "à guider un navire vers son port de destination ",
    correct: "b",
},

   


{
    question: " Quel est le rôle d'un moteur de recherche ?",
    a: "permettre de poser une question et d'obtenir les résultats les plus pertinents proposés par les sites Web",
    b: "envoyer un courrier électronique au service de recherche de la police",
    c: "propulser une voiture électrique",
    d: "un moteur qui produit de l'electricicité",
    correct: "a",
},



];

///console.log(dataQuiz)

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = dataQuiz[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === dataQuiz[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < dataQuiz.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${dataQuiz.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
