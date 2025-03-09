document.addEventListener("DOMContentLoaded", function() {
            const questions = [
                {
                    question: "What is the goal of Quality Education (SDG 4)?",
                    answers: [
                        { text: "To ensure inclusive and equitable education for all", correct: true },
                        { text: "To provide free college education worldwide", correct: false },
                        { text: "To eliminate standardized testing", correct: false },
                        { text: "To make private schools free", correct: false }
                    ]
                },
                {
                    question: "Which factor contributes to quality education?",
                    answers: [
                        { text: "Well-trained teachers", correct: true },
                        { text: "Longer school hours", correct: false },
                        { text: "Strict discipline", correct: false },
                        { text: "Only using online learning", correct: false }
                    ]
                },
                {
                    question: "What is one challenge to achieving quality education worldwide?",
                    answers: [
                        { text: "Lack of funding for schools", correct: true },
                        { text: "Too many students interested in education", correct: false },
                        { text: "Having too many teachers", correct: false },
                        { text: "Too much technology in classrooms", correct: false }
                    ]
                },
                {
                    question: "Which organization promotes global education initiatives?",
                    answers: [
                        { text: "UNESCO", correct: true },
                        { text: "NASA", correct: false },
                        { text: "WHO", correct: false },
                        { text: "IMF", correct: false }
                    ]
                },
                {
                    question: "How can technology improve quality education?",
                    answers: [
                        { text: "By providing access to online learning resources", correct: true },
                        { text: "By replacing teachers completely", correct: false },
                        { text: "By making schools obsolete", correct: false },
                        { text: "By limiting student interactions", correct: false }
                    ]
                }
            ];

            const questionContainer = document.getElementById("question-container");
            const answerButtons = document.getElementById("answer-buttons");
            const nextButton = document.getElementById("next-btn");

            let currentQuestionIndex = 0;
            let score = 0;

            function startQuiz() {
                currentQuestionIndex = 0;
                score = 0;
                nextButton.innerText = "Next";
                showQuestion();
            }

            function showQuestion() {
                resetState();
                let currentQuestion = questions[currentQuestionIndex];
                questionContainer.innerText = currentQuestion.question;
                currentQuestion.answers.forEach(answer => {
                    const button = document.createElement("button");
                    button.innerText = answer.text;
                    button.classList.add("btn");
                    button.addEventListener("click", () => selectAnswer(button, answer.correct));
                    answerButtons.appendChild(button);
                });
            }

            function resetState() {
                nextButton.style.display = "none";
                answerButtons.innerHTML = "";
            }

            function selectAnswer(button, correct) {
                if (correct) {
                    button.style.backgroundColor = "green";
                    score++;
                } else {
                    button.style.backgroundColor = "red";
                }
                Array.from(answerButtons.children).forEach(btn => btn.disabled = true);
                nextButton.style.display = "block";
            }

            nextButton.addEventListener("click", () => {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    showQuestion();
                } else {
                    showScore();
                }
            });

            function showScore() {
                questionContainer.innerText = `You scored ${score} out of ${questions.length}!`;
                answerButtons.innerHTML = "";
                nextButton.innerText = "Restart Quiz";
                nextButton.style.display = "block";
                nextButton.addEventListener("click", startQuiz);
            }

            startQuiz();
        });