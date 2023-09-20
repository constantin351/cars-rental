import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import css from './FilterCarsForm.module.css';
import getFilteredByModelCars from 'api/getFilteredByModelCars';
import getFilteredByPriceCars from 'api/getFilteredByPriceCars';
import brandsArray from '../../data/makes.json';
import { pricesArray } from 'helpers/pricesArrayCreate';

const FilterCarsForm = ({ onFilterFormSubmit, setHideLoadMoreBtn }) => {
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [filteredCarsArr, setFilteredCarsArr] = useState(null);

  useEffect(() => {
    if (model === '' || model === null) return;

    getFilteredByModelCars(model).then(res => setFilteredCarsArr(res));
  }, [model]);

  useEffect(() => {
    if (price === '' || price === null) return;

    getFilteredByPriceCars(price).then(res => setFilteredCarsArr(res));
  }, [price]);

  const handleChangeModel = evt => {
    setModel(evt.target.value);
  };

  const handleChangePrice = evt => {
    setPrice(evt.target.value);
  };

  const onSearchFormSubmit = evt => {
    evt.preventDefault();
    if (filteredCarsArr === null) {
      toast.warn('Please fill into any search field');
    } else if (filteredCarsArr?.length === 0) {
      toast.warn('Oops, no results for your request. Try out other request.');
    } else {
      onFilterFormSubmit(filteredCarsArr);
    }

    setHideLoadMoreBtn(true);
    reset();
  };

  const reset = () => {
    setModel('');
    setPrice('');
  };

  return (
    <>
      <section className={css.filterSection}>
        <form onSubmit={onSearchFormSubmit} className={css.form}>
          <div className={css.inputsWrapper}>
            <label htmlFor="carBrand" className={css.inputLabel}>
              Car brand
            </label>
            <input
              list="brandsList"
              name="carBrand"
              id="carBrand"
              placeholder="Enter the text"
              onChange={handleChangeModel}
              value={model}
              className={css.brandInput}
            />

            <datalist id="brandsList">
              {brandsArray.map(brand => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </datalist>
          </div>

          <div className={css.inputsWrapper}>
            <label htmlFor="carPrice" className={css.inputLabel}>
              Price/ 1 hour
            </label>
            <input
              list="pricesList"
              name="carPrice"
              id="carPrice"
              placeholder="To $"
              onChange={handleChangePrice}
              value={price}
              className={css.priceInput}
            />

            <datalist id="pricesList">
              {pricesArray.map(carPrice => (
                <option key={carPrice} value={carPrice}>
                  {carPrice}
                </option>
              ))}
            </datalist>
          </div>

          <button type="submit" className={css.formButton}>
            Search
          </button>
        </form>

      </section>
    </>
  );
};

export default FilterCarsForm;