import api from '../services/Api';
// Model for the Starship Rematch
export const starship = {
  state: {},
  reducers: {},
  effects: (dispatch) => {
    return {
      async getStarshipDetail(starshipId) {
        try {
          const response = await api.getStarshipDetail(starshipId);
          return response.data;
        } catch (error) {
          console.info(error);
          return error;
        }
      }
    };
  }
};
