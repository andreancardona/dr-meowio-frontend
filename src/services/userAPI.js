import BASE_URL from '../urls.js';

class UserAPI {
  static getTopTen() {
    return fetch('http://localhost:3000/users/').then(res => res.json());
  }
}

export default UserAPI;
