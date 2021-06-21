import api from '../services/Api';
// Model for the People Rematch
export const people = {
  state: {
    peoples: []
  },
  reducers: {
    SET_PEOPLE: (state, peoples) => {
      return {
        ...state,
        peoples
      };
    }
  },
  effects: (dispatch) => {
    return {
      async getPeoples() {
        try {
          const response = await api.getPeople();
          dispatch.people.SET_PEOPLE(response.data?.results);
          return response.data?.results;
        } catch (error) {
          console.info(error);
          return error;
        }
      },
      async searchPeoples(searchText) {
        try {
          const response = await api.searchPeople(searchText);
          dispatch.people.SET_PEOPLE(response.data?.results);
          return response.data?.results;
        } catch (error) {
          console.info(error);
          return error;
        }
      },
      async getPeopleDetail(peopleId) {
        try {
          const response = await api.getPeopleDetail(peopleId);
          return response.data;
        } catch (error) {
          console.info(error);
          return error;
        }
      }
    };
  }
};
