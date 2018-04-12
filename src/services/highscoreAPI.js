import BASE_URL from '../urls.js';

class HighScoreAPI {
  static getTopTen() {
    return fetch(`http://localhost:3000/highscores`).then(res => res.json());
  }

  static updateTopTen(currentScore, initials) {
    return fetch(`http://localhost:3000/highscores`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ score: currentScore, initials: initials })
    }).then(res => res.json());
  }
}

export default HighScoreAPI;
