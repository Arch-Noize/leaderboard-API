let score = JSON.parse(localStorage.getItem('scores')) || [];

const storeScore = () => {
  localStorage.setItem('scores', JSON.stringify(score));
};

export {score, storeScore};