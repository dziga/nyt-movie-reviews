import axios from 'axios';
import config from './config.json';

class Api {

  static async getCritics(filter) {
    return await axios.get(`${config.api}/critics/${filter}.json?api-key=${config.key}`).then(response => {
      return response.data.results;
    });
  }

  static async searchReviews(term) {
    return await axios.get(`${config.api}/reviews/search.json?api-key=${config.key}&query=${term}`).then(response => {
      return response.data.results;
    });
  }
}

export default Api;