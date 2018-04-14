import BASE_URL from '../urls.js';

class ThemeAPI {
  static getCurrent(themeId) {
    return fetch(BASE_URL.themes + `${themeId}`).then(res => res.json());
  }
}

export default ThemeAPI;
