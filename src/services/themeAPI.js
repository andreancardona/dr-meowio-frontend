import BASE_URL from '../urls.js';

class ThemeAPI {
  static getCurrent(themeId) {
    return fetch(`http://localhost:3000/themes/${themeId}`).then(res => res.json());
  }
}

export default ThemeAPI;
