import api from '../services/Api';
// Model for the Film Rematch
export const film = {
  state: {},
  reducers: {},
  effects: (dispatch) => {
    return {
      async getFilmDetail(filmId) {
        try {
          const response = await api.getFilmDetail(filmId);
          return response.data;
        } catch (error) {
          console.info(error);
          return error;
        }
      }
    };
  }
};
