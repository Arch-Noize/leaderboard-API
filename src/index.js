// import { score , storeScore } from './modules/storage';
import './index.css';

const addBtn = document.querySelector('.add');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newScore = document.querySelector('#score').value;
  if (!newScore) {
    e.preventDefault();
  } else {
    console.log(newScore);
  }
});