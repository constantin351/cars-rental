import CarItem from 'components/CarItem/CarItem';
import css from './CarsList.module.css';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CarsList = ({ cars, setCars, addCarToFavoriteLS }) => {
  const [, setFavoriteCarsArr] = useState([]);

  useEffect(() => {
    const ls = localStorage.getItem('favorite-cars');

    if (ls && ls.length) {
      const parsedLSCar = JSON.parse(localStorage.getItem('favorite-cars'));
      setFavoriteCarsArr(parsedLSCar);
    }
  }, []);

  const handleFavoriteToggle = id => {
    const carRecPrevious = cars.find(rec => {
      return rec.id === id;
    });

    const carRecUpdated = {
      ...carRecPrevious,
      isFavorite: !carRecPrevious.isFavorite,
    };

    const carsNewData = cars.map(rec => {
      return rec.id === id ? carRecUpdated : rec;
    });

    setCars(carsNewData);

    // LS
    if (carRecUpdated.isFavorite) {
      setFavoriteCarsArr(prevState => {
        const filteredPrevState = prevState.filter(
          item => item.id !== carRecUpdated.id
        );

        localStorage.setItem(
          'favorite-cars',
          JSON.stringify([...filteredPrevState, carRecUpdated])
        );

        return [...filteredPrevState, carRecUpdated];
      });

      toast.warn('Added to your favorites list');
    } else {
      setFavoriteCarsArr(prevState =>
        prevState.filter(favoriteCar => favoriteCar.id !== carRecUpdated.id)
      );

      const parsedLSCar = JSON.parse(localStorage.getItem('favorite-cars'));
      const filteredLSCar = parsedLSCar?.filter(
        item => item.id !== carRecUpdated.id
      );

      const favoriteCarsLS = filteredLSCar?.length
        ? JSON.stringify([...filteredLSCar])
        : [];

      localStorage.setItem('favorite-cars', favoriteCarsLS);
      toast.warn('Removed from your favorites list');
    }
  };

  return (
    <div className={css.wrapper}>
      <ul className={css.CarList}>
        {cars.map(car => (
          <div key={car.id}>
            <CarItem
              onFavoriteToggle={() => handleFavoriteToggle(car.id)}
              model={car.model}
              make={car.make}
              year={car.year}
              type={car.type}
              mileage={car.mileage}
              rentalCompany={car.rentalCompany}
              rentalConditions={car.rentalConditions}
              rentalPrice={car.rentalPrice}
              id={car.id}
              accessories={car.accessories}
              address={car.address}
              description={car.description}
              engineSize={car.engineSize}
              fuelConsumption={car.fuelConsumption}
              functionalities={car.functionalities}
              img={car?.img}
              isFavorite={car.isFavorite}
              addCarToFavoriteLS={addCarToFavoriteLS}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CarsList;
