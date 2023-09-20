const BASE_URL = 'https://6504c9bec8869921ae25708d.mockapi.io/advert';

const getFilteredByModelCars = model => {
  return fetch(
    `${BASE_URL}?make=${model}`,
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

export default getFilteredByModelCars;
