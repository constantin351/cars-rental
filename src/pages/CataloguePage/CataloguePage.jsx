import { useEffect, useState } from 'react';
import getAllCars from 'api/getAllCars';
import CarsList from 'components/CarsList/CarsList';
import Loader from 'components/Loader/Loader';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import FilterCarsForm from 'components/FilterCarsForm/FilterCarsForm';
import getCarsFullCollection from 'api/getCarsFullCollection';
import filterFavoriteCars from 'helpers/filterFavoriteCars';

const CataloguePage = ({ cars, setAllCars }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(null);
  const [totalHits, setTotalHits] = useState(0);
  const [carsCollectionLength, setCarsCollectionLength] = useState(0);
  const [hideLoadMoreBtn, setHideLoadMoreBtn] = useState(false);

  useEffect(() => {
    if (!pageNumber) {
      getCarsFullCollectionLength();
      setPageNumber(1);

      async function getCarsFullCollectionLength() {
        const result = await getCarsFullCollection();
        setCarsCollectionLength(result);
      }
    } else {
      fetchAllCars();
    }

    async function fetchAllCars() {
      setIsLoading(true);
      const response = await getAllCars(pageNumber);

      if (response.status === 200) {
        setIsLoading(false);

        const ls = localStorage.getItem('favorite-cars');

        if (ls && ls.length) {
          const parsedLSCar = JSON.parse(ls);

          setAllCars(prevState => {
            if (prevState.length) {
              const prevStateCars = prevState?.map(item => {
                const foundCar = parsedLSCar.find(car => car.id === item.id);
                return foundCar || item;
              });

              const newCars = filterFavoriteCars(response.data, prevStateCars);

              return [...prevStateCars, ...newCars];
            } else {
              const newCars = response.data.map(car => {
                const foundCar = parsedLSCar.find(item => item.id === car.id);
                return foundCar || car;
              });
              return newCars;
            }
          });
        } else {
          setAllCars(prevState => {
            const newCars = filterFavoriteCars(response.data, prevState);
            return [...prevState, ...newCars];
          });
        }

        setTotalHits(prevState => prevState + response.data.length);
      } else {
        setError(response.message);
        console.log('error', error);
      }
    }
  }, [error, pageNumber, setAllCars]);

  const onLoadMore = () => {
    setPageNumber(prevState => prevState + 1);
  };

  const handleFilterFormSubmit = arr => {
    setAllCars(arr);
    setHideLoadMoreBtn(true);
  };

  return (
    <main>
      {isLoading && <Loader />}

      <FilterCarsForm
        onFilterFormSubmit={handleFilterFormSubmit}
        setHideLoadMoreBtn={setHideLoadMoreBtn}
      />

      {cars && cars.length > 0 && <CarsList cars={cars} setCars={setAllCars} />}

      {totalHits !== carsCollectionLength && !hideLoadMoreBtn && (
        <LoadMoreBtn onLoadMoreBtnClick={onLoadMore} />
      )}
    </main>
  );
};

export default CataloguePage;