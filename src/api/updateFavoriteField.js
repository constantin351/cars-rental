import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6504c9bec8869921ae25708d.mockapi.io/',
});

const updateFavoriteField = async (carId, isFavorite, data) => {
  try {
    const response = await instance.put(
      `/advert/${carId}`,
      JSON.stringify({
        isFavorite,
        data,
      }),
      { headers: { 'Content-Type': 'application/json' } }
    );

    console.log('response', response);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default updateFavoriteField;