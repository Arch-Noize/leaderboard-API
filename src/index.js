import { getScores, addScores } from './modules/game-api.js';
import './index.css';

const scores = document.querySelector('.recent-scores');
const addBtn = document.querySelector('.add');
const refresh = document.querySelector('.refresh');
const form = document.querySelector('#new-score');
let i = 0;

const animation = () => {
  const points = document.querySelectorAll(".score");
  points.forEach((item) => {
    setTimeout(() => {
      item.style.animationDelay = `${i * 0.1}s`;
    }, i * 10);
    i++;
  })
}

const displayScores = async () => {
  const leaderboard = await getScores();
  leaderboard.forEach((item) => {
    scores.innerHTML += `<li class="score">${item.user}: ${item.score}</li>`;
  });
  animation();
};

refresh.addEventListener('click', () => {
  scores.innerHTML = '';
  displayScores();
});

addBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const newScore = document.querySelector('#score').value;
  const username = document.querySelector('#name').value;
  const message = document.querySelector("#message");
  if (!newScore || !username) {
    e.preventDefault();
    message.classList.add("fade");
    setTimeout(() => {
      message.classList.remove("fade");
    }, 4000);
  } else {
    await addScores(username, newScore);
    form.reset();
  }
});

window.addEventListener('DOMContentLoaded', displayScores);