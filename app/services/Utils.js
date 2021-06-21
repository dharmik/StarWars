import apisauce from 'apisauce';

export const apiConfig = (baseURL) =>
  apisauce.create({
    baseURL,
    timeout: 30000,
    headers: { 'Cache-Control': 'no-cache' }
  });

export const getToken = (api) =>
  api.addAsyncRequestTransform((request) => async () => {
    // const userToken = await AsyncStorage.getItem(AppConstants.token);
    // request.headers = { 'x-access-token': userToken };
  });

export async function getError(response) {
  // if (response.problem === 'CLIENT_ERROR') return response.data.error;
  if (response?.problem === 'NETWORK_ERROR') {
    return 'Please check your internet connection';
  }
  if (['CONNECTION_ERROR', 'SERVER_ERROR'].includes(response?.problem)) {
    return 'Server is not available';
  }
  return 'Something went wrong';
}
