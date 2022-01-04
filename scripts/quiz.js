// Array of objects with questions & answers
const quizData = [{
        question: "What does HTML stand for?",
        a: "A: Hypertext Markup Language",
        b: "B: Hypertext Markdown Language",
        c: "C: Hypertextual Markup Language",
        d: "D: Hyperloop Tractor Machine Laser",
        correct: "a",

    },

    {
        question: "What does CSS stand for?",
        a: "A: Centralized Style Sheets",
        b: "B: Cascading Style Sheets",
        c: "C: Cascading Simple Sheets",
        d: "D: Cats, SUVs & Sailboats",
        correct: "b",
    },
    {
        question: "Which language runs in a web browser?",
        a: "A: C",
        b: "B: MATLAB",
        c: "C: NickelodeonScript",
        d: "D: Javascript",
        correct: "d",

    },
    {
        question: "What year was JavaScript launched?",
        a: "A: 1994",
        b: "B: 1995",
        c: "C: 1996",
        d: "D: 1755",
        correct: "b",
    }, {
        question: "How long did it take to develop JavaScript?",
        a: "A: 10 Days",
        b: "B: 10 Weeks",
        c: "C: 10 Months",
        d: "D: 10 Years",
        correct: "a",
    }, {
        question: "Where is the correct place to insert a JavaScript?",
        a: "A: The <JavaScript> section",
        b: "B: The <minecraft> section",
        c: "C: Both the <head> & <body> section are viable",
        d: "D: None of the above",
        correct: "c",
    }, {
        question: "How do you write \"Hello World\" in an alert box?",
        a: "A: alert(Hello World);",
        b: "B: alert(\"Hello World\");",
        c: "C: alertbox(\"Hello World\");",
        d: "D: message(\"Hello Kitty\");",
        correct: "b",
    }, {
        question: "How do you write a single line comment in JavaScript?",
        a: "A: 'Like this",
        b: "B: <!-- No it's like this!-->",
        c: "C: // I personally think like this",
        d: "D: @@ We all know the real answer is like this @@",
        correct: "c",
    }, {
        question: "How do you find the number with the highest value of x and y?",
        a: "A: top(x, y);",
        b: "B: middle(x, y);",
        c: "C: Math.ceil(x, y);",
        d: "D: Math.max(x, y);",
        correct: "d",
    }, {
        question: "Which event occurs when the user clicks on an HTML element?",
        a: "A: onclick",
        b: "B: onmouseclick",
        c: "C: onmouseover",
        d: "D: onchange",
        correct: "a",
    },


];

// Gets the HTML-elements for quiz, answers & submit button.
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

// Keeps track of current question and user score.
let currentQuiz = 0
let score = 0


// Loads quiz by getting the HTML files.
function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
loadQuiz()


// Deselects all answers after loading the quiz.
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

// Answer that gets selected.
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

/* Submitbutton adds points IF user answers right and loads the next question.
 IF there is no more questions left then we will print out the results and a restart button. */
submitBtn.addEventListener('click', function() {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }


        currentQuiz++

        // IF there are more questions left keep going, ELSE show user score and restart button
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
       <h2>You answered ${score}/${quizData.length} questions correctly</h2>
       <h3>Gr8 job m8 I r8 your effort 8/8</h3>
       <button onclick="location.reload()">Restart</button>
       `
        }
    }
})