const sections = document.querySelectorAll('.section');
let currentSection = 0;

function nextSection() {
  sections[currentSection].classList.remove('active');
  currentSection++;
  sections[currentSection].classList.add('active');
}

// Quiz
const quizQuestions = document.querySelectorAll('.quiz .question');
quizQuestions.forEach((question) => {
  const buttons = question.querySelectorAll('button');
  const correct = question.getAttribute('data-correct');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.textContent.startsWith(correct)) {
        btn.classList.add('correct');
      } else {
        btn.classList.add('wrong');
      }
      buttons.forEach(b => b.disabled = true);

      if ([...quizQuestions].every(q =>
        [...q.querySelectorAll('button')].every(b => b.disabled)
      )) {
        setTimeout(() => nextSection(), 1000);
      }
    });
  });
});

function checkGuess() {
    const input = document.getElementById('guessInput').value.toLowerCase();
    const result = document.getElementById('guessResult');
    if (input.includes("zidane") || input.includes("zinedine")) {
      result.textContent = "Bien joué, Agent Gabin !";
      setTimeout(() => nextSection(), 1500);
    } else {
      result.textContent = "Essaie encore...";
    }
  }
