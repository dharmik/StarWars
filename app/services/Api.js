import config from '../config';
import { apiConfig } from './Utils';

const api = apiConfig(config.BASE_URL);

// Peoples Api calls
const getPeople = async () => await api.get('people');

const searchPeople = async (text) => await api.get(`people/?search=${text}`);

const getPeopleDetail = async (id) => await api.get(`people/${id}`);

// Films Api calls
const getFilmDetail = async (id) => await api.get(`films/${id}`);

// Species Api calls
const getSpeciesDetail = async (id) => await api.get(`species/${id}`);

// Starship Api calls
const getStarshipDetail = async (id) => await api.get(`starships/${id}`);

export default {
  getPeople,
  searchPeople,
  getPeopleDetail,
  getFilmDetail,
  getSpeciesDetail,
  getStarshipDetail
};
