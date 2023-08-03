const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Md0C9GC6nTfkWsUREUY5/scores/';

const getScores = async () => {
  const res = await fetch(api);
  const data = await res.json();
  return data.result;
};

const addScores = async (name, score) => {
  const res = await fetch(api, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ user: name, score }),
  });
  const data = await res.json();
  return data.result;
};

export { getScores, addScores };