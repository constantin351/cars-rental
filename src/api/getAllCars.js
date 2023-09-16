import axios from "axios";

const instance = axios.create({
    baseURL: 'https://6504c9bec8869921ae25708d.mockapi.io/',
  });


  const getAllCars = async (pageNumber = 1) => {
    try {
      const response = await instance.get(`/advert?page=${pageNumber}&limit=8`);
      console.log('response', response)
      return response;
    } catch (error) {
      // console.log(error);
      return [];
    }
  };

export default getAllCars;