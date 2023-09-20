import CarsList from 'components/CarsList/CarsList';
import css from './FavoritesPage.module.css';

const FavoritesPage = ({ setAllCars }) => {
  const loadFavoriteCarsFromLS = () => {
    try {
      const serializedCarsArr = localStorage.getItem('favorite-cars');
      return serializedCarsArr && serializedCarsArr.length
        ? JSON.parse(serializedCarsArr)
        : [];
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  };

  const favoriteCarsFromLS = loadFavoriteCarsFromLS();

  return (
    <>
      {favoriteCarsFromLS.length ? (
        <CarsList cars={favoriteCarsFromLS} setCars={setAllCars} />
      ) : (
        <div className={css.wrapper}>
          <p className={css.text}>
            There are <span className={css.noCarsTxt}>no cars</span> in your
            favorites yet
          </p>
        </div>
      )}
    </>
  );
};

export default FavoritesPage;