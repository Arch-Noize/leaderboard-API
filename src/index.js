// import { score , storeScore } from './modules/storage';
import './index.css';

const leaderboard = [
  {
    user: 'Jame',
    score: '1450',
  },
  {
    user: 'Oreo',
    score: '1234',
  },
  {
    user: 'Z',
    score: '0000',
  },
  {
    user: 'CJ',
    score: '3190',
  },
  {
    user: 'San',
    score: '999',
  },
];

const scores = document.querySelector('.recent-scores');
const addBtn = document.querySelector('.add');

const displayScore = () => {
  leaderboard.forEach((item) => {
    scores.innerHTML += `
    <li class="score">
      ${item.user}: ${item.score}
    </li>
    `;
  });
};

window.addEventListener('DOMContentLoaded', displayScore);

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newScore = document.querySelector('#score').value;
  if (!newScore) {
    e.preventDefault();
  } else {
    console.log(newScore);
  }
});