const questions = [
    {
        question: "How does quality education empower individuals?",
        answers: [
            { text: "By strengthening dedication to learning", correct: true },
            { text: "By giving unlimited homework", correct: false },
            { text: "By forcing students to memorize", correct: false },
            { text: "By ignoring student needs", correct: false }
        ]
    },
    {
        question: "What does SDG Quality Education aim to provide?",
        answers: [
            { text: "Irrelevant facts", correct: false },
            { text: "Informational knowledge about education rights", correct: true },
            { text: "Free internet", correct: false },
            { text: "More exams", correct: false }
        ]
    },
    {
        question: "Which of the following is promoted by active learning?",
        answers: [
            { text: "Boredom and memorization", correct: false },
            { text: "Collaboration and creativity", correct: true },
            { text: "Strict silence in class", correct: false },
            { text: "Daily pop quizzes", correct: false }
        ]
    },
    {
        question: "How does active learning support lifelong success?",
        answers: [
            { text: "It limits student interests", correct: false },
            { text: "It promotes critical thinking and student engagement", correct: true },
            { text: "It discourages participation", correct: false },
            { text: "It removes learning flexibility", correct: false }
        ]
    },
    {
        question: "What is the goal of SDG 4 (Quality Education)?",
        answers: [
            { text: "To encourage dropout rates", correct: false },
            { text: "To provide inclusive, equitable education", correct: true },
            { text: "To reduce access to learning", correct: false },
            { text: "To limit global citizenship", correct: false }
        ]
    }
];

let shuffledQuestions, currentQuestionIndex, score;

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

document.addEventListener('DOMContentLoaded', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
    } else {
        showScore();
    }
});

function startQuiz() {
    shuffledQuestions = shuffleArray([...questions]);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = 'Next';
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    const shuffledAnswers = shuffleArray([...question.answers]);
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) button.dataset.correct = true;
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct === 'true';
    if (correct) score++;

    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
        button.disabled = true;
    });

    nextButton.style.display = 'block';
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showScore() {
    resetState();
    questionContainer.innerText = ` Your Score: ${score} out of ${questions.length}`;
    nextButton.innerText = "Restart";
    nextButton.style.display = 'block';
    nextButton.onclick = startQuiz;
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

