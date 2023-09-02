
const pollTitleEl = document.getElementById('poll__title');
const pollAnswersEl = document.getElementById('poll__answers');

fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then(response => response.json())
  .then(data => {
    
    pollTitleEl.innerText = data.data.title;
    pollAnswersEl.innerHTML = data.data.answers.map(answer => `
      <button class="poll__answer">${answer}</button>
    `).join('');

    const answerBtns = pollAnswersEl.querySelectorAll('.poll__answer');
    answerBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });
    });
  })
  .catch(error => console.error(error));