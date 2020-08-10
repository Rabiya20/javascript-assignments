const quiz = [
    {
        q: 'HTML does what?',
        options: ['styling', 'functioning', 'basic structure', 'nothing'],
        answer: 2
    },
    {
        q: 'Which is non-volatile memory?',
        options: ['cache', 'hard disk', 'VRAM', 'DRAM'],
        answer: 1
    },
    {
        q: 'Color range is?',
        options: ['0-255', '1-125', '1-7', 'unlimited'],
        answer: 0
    },
    {
        q: 'Images are read as?',
        options: ['ranges', 'boxes', 'pixels', 'points'],
        answer: 2
    },
    {
        q: 'How to assign variable "num" in JS',
        options: ['variable num = 3', 'num = 3', 'int num = 3', 'var num = 3'],
        answer: 3
    },
    {
        q: '(4 + 4 - 2 * 3) is equal to?',
        options: ['2', '30', '6', '0'],
        answer: 0
    },
    {
        q: 'RGB stands for?',
        options: ['red-Green-Blue', 'root-Ground-Boreder', 'range-Gradient-Borders', 'none of them'],
        answer: 0
    }
]



const quesNum = document.querySelector(".question-number");
const quesText = document.querySelector(".question-text");
const quesOpt = document.querySelector(".question-option");
const ansInd = document.querySelector(".answer-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");



let quesCounter = 0;
let currQues;
let availQues = [];
let availOpt = [];
let corrAns = 0;
let attempt = 0;

function setAvailQues() {
    const totalQues = quiz.length;
    for (let i = 0; i < totalQues; i++) {
        availQues.push(quiz[i])
    }
}

function getNextQues() {
    quesNum.innerHTML = "Question " + (quesCounter + 1) + " of " + quiz.length;
    const quesIndex = availQues[Math.floor(Math.random() * availQues.length)];

    currQues = quesIndex;
    quesText.innerHTML = currQues.q;

    const index1 = availQues.indexOf(quesIndex);
    availQues.splice(index1, 1);

    const optionLen = currQues.options.length;
    for (let i = 0; i < optionLen; i++) {
        availOpt.push(i);
    }

    quesOpt.innerHTML = '';
    let animationDelay = 0.2;

    for (let i = 0; i < optionLen; i++) {
        const optionIndex = availOpt[Math.floor(Math.random() * availOpt.length)];
        const index2 = availOpt.indexOf(optionIndex);

        availOpt.splice(index2, 1);

        const option = document.createElement("div");
        option.innerHTML = currQues.options[optionIndex];
        option.id = optionIndex;

        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;

        option.className = "option";
        quesOpt.appendChild(option);

        option.setAttribute("onclick", "getResult(this)");
    }
    quesCounter++;
}


function getResult(opte) {
    const id = parseInt(opte.id);
    if (id === currQues.answer) {
        opte.classList.add("correct");
        updateAnsInd("correct");
        corrAns++;
    }
    else {
        opte.classList.add("wrong");
        updateAnsInd("wrong");

        const optionLen = quesOpt.children.length;
        for (let i = 0; i < optionLen; i++) {
            if (parseInt(quesOpt.children[i].id) === currQues.answer) {
                quesOpt.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
    unclickOpt();
}

function unclickOpt() {
    const optionLen = quesOpt.children.length;
    for (let i = 0; i < optionLen; i++) {
        quesOpt.children[i].classList.add("already-answered");
    }
}


function answerIndicator() {
    ansInd.innerHTML = '';
    const totalQues = quiz.length;
    for (let i = 0; i < totalQues; i++) {
        const indicator = document.createElement("div");
        ansInd.appendChild(indicator)
    }
}

function updateAnsInd(mark) {
    ansInd.children[quesCounter - 1].classList.add(mark);
}



function next() {
    if (quesCounter === quiz.length) {
        quizOver();

    }
    else {
        getNextQues();
    }
}


function quizResult() {
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = corrAns;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - corrAns;
    const perc = (corrAns / quiz.length) * 100;
    resultBox.querySelector(".percentage").innerHTML = perc.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = corrAns + " / " + quiz.length;

}

function quizOver() {
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    quizResult();
}


function resetQuiz() {
    quesCounter = 0;
    corrAns = 0;
    attempt = 0;
}


function tryAgain() {
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();
}

function gotoHome() {
    resultBox.classList.add("hide");
    homeBox.classList.remove("hide");
    resetQuiz();
}


function startQuiz() {
    homeBox.classList.add("hide");
    quizBox.classList.remove("hide");

    setAvailQues();
    getNextQues();
    answerIndicator();
}



window.onload = function(){
    homeBox.querySelector(".total-ques").innerHTML = quiz.length;
}