import BASE_URL from '../urls.js';

class HighScoreAPI {
  static getTopTen() {
    return fetch(BASE_URL.highscores).then(res => res.json());
  }

  static updateTopTen(currentScore, initials) {
    return fetch(BASE_URL.highscores, {
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
