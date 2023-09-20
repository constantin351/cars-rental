import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6504c9bec8869921ae25708d.mockapi.io/',
});

const getCarsFullCollection = async () => {
  try {
    const response = await instance.get('/advert');
    return response.data.length;
  } catch (error) {
    return [];
  }
};

export default getCarsFullCollection;
