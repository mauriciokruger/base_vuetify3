import axios from "axios";
import { getToken } from "./token";
// VALIDAÇÃO DE PRODUÇÃO E DESENVOLVIMENTO

const URLdev = '192.168.10.245'
const URL = window.location.hostname === 'mutinno.d3t.com.br' ? 'https://mutinno.d3t.com.br/api/' : window.location.hostname === URLdev ? 'https://api-mutinno.d3t.com.br/api/' : 'https://api-mutinno.d3t.com.br/api/';
const URLAplication = window.location.hostname === 'mutinno.d3t.com.br' ? 'https://mutinno.d3t.com.br/' : window.location.hostname === URLdev ? 'http://localhost:3000/' : 'https://mutinno.d3t.com.br/';

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    // alert("401")
    // relocate(false, '#access-error')
  }
  if (error.response.status === 409) {
    // alert("409")
    // relocate(true)
  }
  return Promise.reject(error)
});

class Api {
  static get(path) {
    return axios.get(`${URL}${path}`, this._getRequestOptions());
  }

  static post(path, body) {
    return axios.post(`${URL}${path}`, body, {
      headers: this._getHeaders()
    });
  }

  static put(path, body) {
    return axios.put(`${URL}${path}`, body, this._getRequestOptions());
  }

  static delete(path) {
    return axios.delete(`${URL}${path}`, this._getRequestOptions());
  }

  static _getRequestOptions(options = {}) {
    let requestOption = {};
    requestOption.headers = this._getHeaders(options.headers);
    return requestOption;
  }
  static _getHeaders() {
    let headers = {
    };
    if (localStorage.getItem('token')) {
      headers.Authorization = 'Bearer ' + getToken();
    }
    if (localStorage.getItem('user-token')) {
      headers.UserToken = localStorage.getItem('user-token');
    }
    let userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : false
    if (userData !== false) {
      headers.empresalogada = userData.empresa.uuid_emp_id;
    }
    return headers;
  }
  static headers() {
    return this._getHeaders();
  }
  static getApUrl() {
    return URL;
  }
  static getAplicationUrl() {
    return URLAplication;
  }
  static getTokenAut() {
    return 'Bearer ' + getToken();
  }
}

export default Api;
export const API_URL = URL;
