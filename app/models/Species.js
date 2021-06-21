import api from '../services/Api';
// Model for the Species Rematch
export const species = {
  state: {},
  reducers: {},
  effects: (dispatch) => {
    return {
      async getSpeciesDetail(speciesId) {
        try {
          const response = await api.getSpeciesDetail(speciesId);
          return response.data;
        } catch (error) {
          console.info(error);
          return error;
        }
      }
    };
  }
};
