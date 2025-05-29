document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.page');
  const nextBtns = document.querySelectorAll('.next-btn');

  let currentPage = 0;

  const audio = document.getElementById('background-music');
  const playBtn = document.getElementById('play-audio');

  // Intentar reproducir música al cargar
  audio.play().catch(() => {
    playBtn.style.display = 'inline-block';
  });

  playBtn.addEventListener('click', () => {
    audio.play();
    playBtn.style.display = 'none';
  });

  function showPage(index) {
    pages.forEach((p, i) => {
      p.classList.toggle('active', i === index);
    });
    currentPage = index;
  }

  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Se elimina la línea que bloqueaba avanzar en la página 2
      if (currentPage < pages.length - 1) {
        showPage(currentPage + 1);
      }
    });
  });

  // Validación del quiz (página 2)
  const quizForm = document.getElementById('quiz-form');
  const submitQuiz = document.getElementById('submit-quiz');
  const quizResult = document.getElementById('quiz-result');
  const nextBtnPage2 = pages[1].querySelector('.next-btn');

  submitQuiz.addEventListener('click', () => {
    const answers = {
      q1: 'C',
      q2: 'B',
      q3: 'D'
    };

    let score = 0;
    const formData = new FormData(quizForm);

    for (const [key, value] of formData.entries()) {
      if (answers[key] === value) {
        score++;
      }
    }

    if (score === 3) {
      quizResult.textContent = "Bravo ! Tu as répondu correctement à toutes les questions.";
      nextBtnPage2.style.display = 'inline-block';
    } else {
      quizResult.textContent = `Tu as obtenu ${score}/3. Essaie encore.`;
      nextBtnPage2.style.display = 'none';
    }
  });

  // Validación desafío 2 (adivina imagen)
  const guessInput = document.getElementById('guess-input');
  const submitGuess = document.getElementById('submit-guess');
  const guessResult = document.getElementById('guess-result');
  const nextBtnPage3 = pages[2].querySelector('.next-btn');

  submitGuess.addEventListener('click', () => {
    const guess = guessInput.value.trim().toLowerCase();

    if (guess.includes("zidane")) {
      guessResult.textContent = "Exact ! C'est bien Zinedine Zidane en maillot de France.";
      nextBtnPage3.style.display = 'inline-block';
    } else {
      guessResult.textContent = "Non, ce n'est pas ça. Essaie encore.";
      nextBtnPage3.style.display = 'none';
    }
  });

  // Navegación página 3 a página 4
  nextBtnPage3.addEventListener('click', () => {
    showPage(3);
  });

  // Navegación página 4 (sin next, fin)
});
