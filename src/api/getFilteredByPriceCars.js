const BASE_URL = 'https://6504c9bec8869921ae25708d.mockapi.io/advert';

const getFilteredByPriceCars = (price) => {
    return fetch(
        `${BASE_URL}?rentalPrice=${price}`, {
        method: 'GET',
        headers: {'content-type':'application/json'},
        }).then(res => {
        if (res.ok) {
            return res.json();
        }
        }).then(filteredCars => {
            return filteredCars
        })
        .catch(error => console.log(error))
};

export default getFilteredByPriceCars;