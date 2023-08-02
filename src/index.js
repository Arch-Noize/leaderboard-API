import { getScores, addScores } from './modules/game-api.js';
import './index.css';

const scores = document.querySelector('.recent-scores');
const addBtn = document.querySelector('.add');
const refresh = document.querySelector('.refresh');
const form = document.querySelector("#new-score");

refresh.addEventListener('click', async () => {
  scores.innerHTML = '';
  const leaderboard = await getScores();
  leaderboard.forEach((item) => {
    scores.innerHTML += `<li class="score">${item.user}: ${item.score}</li>`
  });
})

addBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const newScore = document.querySelector('#score').value;
  const username = document.querySelector('#name').value;
  if (!newScore || !username) {
    e.preventDefault();
  } else {
    await addScores (username, newScore);
    form.reset();
  }
});
