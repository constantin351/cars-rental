const BASE_URL = 'https://6504c9bec8869921ae25708d.mockapi.io/advert';

const getFilteredByMileageFrom = mileageFrom => {
  return fetch(
    `${BASE_URL}?mileage=${mileageFrom}`,
    {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(filteredCars => {
      return filteredCars;
    })
    .catch(error => console.log(error));
};

export default getFilteredByMileageFrom;
