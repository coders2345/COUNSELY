const quizForm = document.getElementById("quiz-form");
const submitButton = quizForm.querySelector("button[type=submit]");

submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // prevent the form from submitting
  const answers = {
    q1: quizForm.querySelector('input[name="q1"]:checked').value,
    q2: quizForm.querySelector('input[name="q2"]:checked').value,
  };
  const correctAnswers = {
    q1: "a",
    q2: "c",
  };
  let score = 0;
  let result = "";
  for (const question in answers) {
    if (answers[question] === correctAnswers[question]) {
      score++;
      result += `<div>Question ${question}: Correct</div>`;
    } else {
      result += `<div>Question ${question}: Incorrect</div>`;
    }
  }
  result += `<div>Score: ${score} out of ${Object.keys(correctAnswers).length}</div>`;
  const resultElement = document.createElement("div");
  resultElement.innerHTML = result;
  quizForm.appendChild(resultElement);
});
