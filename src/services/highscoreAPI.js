import BASE_URL from '../urls.js';

class HighScoreAPI {
  static getTopTen(themeId) {
    return fetch(`http://localhost:3000/highscores`).then(res => res.json());
  }
}

export default HighScoreAPI;
