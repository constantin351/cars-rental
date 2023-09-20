import { useState } from 'react';
import css from './CarItem.module.css';
import Modal from 'components/Modal/Modal';
import { HiOutlineHeart } from 'react-icons/hi';
import { HiHeart } from 'react-icons/hi';

const CarItem = ({
  onFavoriteToggle,
  model,
  make,
  id,
  img,
  year,
  address,
  rentalPrice,
  rentalCompany,
  type,
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
  isFavorite,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addressSplitted = address?.split(', ');
  const city = addressSplitted?.[1];
  const country = addressSplitted?.[2];
  const mainFunction = functionalities?.[0];

  return (
    <div className={css.CardWrapper}>
      <div className={css.CarImgWrap}>
        <img src={img} alt={make} className={css.CarImg} />
        <button
          onClick={onFavoriteToggle}
          type="button"
          className={css.favoriteIconBtn}
        >
          {isFavorite ? (
            <HiHeart className={css.blueFavoriteIconBtn} />
          ) : (
            <HiOutlineHeart className={css.transparentFavoriteIconBtn} />
          )}
        </button>
      </div>

      <div className={css.InfoWrapper}>
        <div className={css.MainInfo}>
          <div className={css.makeModelYearWrapper}>
            <p className={css.makeCarText}>{make}</p>
            <span className={css.ModelBlue}>{model},</span>
            <p className={css.yearCarText}>{year}</p>
          </div>

          <p className={css.CarText}>{rentalPrice}</p>
        </div>

        <div className={css.SecondaryInfo}>
          <p className={css.SecondaryCarText}>
            {city} | {country} | {rentalCompany} | {type} | {make} | {id} |{' '}
            {mainFunction}
          </p>
        </div>

        <button onClick={openModal} className={css.learnMoreBtn}>
          Learn more
        </button>

        {isModalOpen && (
          <Modal
            onClose={closeModal}
            key={id}
            model={model}
            make={make}
            img={img}
            year={year}
            address={address}
            rentalPrice={rentalPrice}
            rentalCompany={rentalCompany}
            functionalities={functionalities}
            id={id}
            type={type}
            fuelConsumption={fuelConsumption}
            engineSize={engineSize}
            description={description}
            accessories={accessories}
            rentalConditions={rentalConditions}
            mileage={mileage}
          />
        )}
      </div>
    </div>
  );
};

export default CarItem;
