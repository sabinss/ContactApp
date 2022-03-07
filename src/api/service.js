import api from './api';

class ApiService {
  async post(path, body, headers) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.post(path, body, {headers});
        resolve(response?.data);
      } catch (err) {
        reject(err);
      }
    });
  }
  async get(path, headers) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.get(path, {headers});
        resolve(response?.data);
      } catch (err) {
        reject(err);
      }
    });
  }
  async put(path, body) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.put(path, body);
        resolve(response?.data);
      } catch (err) {
        reject(err);
      }
    });
  }
  async delete(path) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await api.delete(path);
        resolve(true);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default new ApiService();
