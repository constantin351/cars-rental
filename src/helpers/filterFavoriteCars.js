const filterFavoriteCars = (arr, prevStateCars) => {
    return arr.map(car => {
        const foundCar = prevStateCars.find(
          item => item.id === car.id
        );
        if (foundCar) return undefined;
        return car;
      })
      .filter(car => car);
};

export default filterFavoriteCars;