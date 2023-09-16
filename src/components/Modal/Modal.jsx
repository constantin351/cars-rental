import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from "./Modal.module.css";

import { MdClose } from 'react-icons/md';

const modalRoot = document.querySelector('#modal-root');

const toggleBodyOverflow = toggle => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

const Modal = ({
  onClose,
  model,
  make,
  img,
  year,
  address,
  rentalPrice,
  rentalCompany,
  functionalities,
  id,
  type,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
}) => {

    useEffect(() => {
        toggleBodyOverflow(true);
        const onKeyDown = event => {
          if (event.code === 'Escape') {
            onClose();
          }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => {
          toggleBodyOverflow(false);
          window.removeEventListener('keydown', onKeyDown);
        };
      }, [onClose]);
    
      const onOverlay = event => {
        if (event.currentTarget === event.target) {
          onClose();
        }
      };

    const addressParts = address.split(', ');
    const city = addressParts[1];
    const country = addressParts[2];
    const rentalConditionsSplitted = rentalConditions.split('\n', 3);
    const firstElement = rentalConditionsSplitted[0];
    const match = firstElement.match(/\d+/);
    const minAge = parseInt(match[0], 10);

    return createPortal(
        <div onClick={onOverlay} className={css.modal}>
            <div className={css.ModalContainer}>
                <div className={css.ContentWrapper}>
                    <button className={css.closeIconBtn} type="button" aria-label="close button" onClick={onClose}>
                        <MdClose className={css.closeIcon}/>
                    </button>

                    <img src={img} alt={make} />

                    <div>
                        <h2 className={css.modelMakeYearText}>{make} <span className={css.blueModelName}>{model},</span> {year}</h2>
                    </div>

                    <p className={css.details}>{city} | {country} | id: {id} | Year: {year} | Type: {type}</p>
                    <p className={css.fuelConsump}>Fuel consumption: {fuelConsumption} | Engine size: {engineSize}</p>

                    <p className={css.description}>{description}</p>

                    <h3 className={css.accessFunct}>Accessories and functionalities:</h3>

                    <ul className={css.accessList}>
                        {accessories.map((accessory, index) => (
                            <li key={index} className={css.accessListItem}>{accessory}</li>
                        ))}
                    </ul>

                    <ul className={css.functionsList}>
                        {functionalities.map((functionality, index) => (
                            <li key={index} className={css.functionListItem}>{functionality}</li>
                        ))}
                    </ul>

                    <h3 className={css.rentalConditions}>Rental Conditions:</h3>
                   
                    <ul className={css.conditionsList}>
                        <li className={css.conditionsListItem}>Minimum age: <span className={css.blueAge}>{minAge}</span></li>
                        <li className={css.conditionsListItem}>{rentalConditionsSplitted[1]}</li>
                        <li className={css.conditionsListItem}>{rentalConditionsSplitted[2]}</li>
                        <li className={css.conditionsListItem}>Mileage: <span className={css.mileage}>{mileage.toLocaleString('en-EN')}</span></li>
                        <li className={css.conditionsListItem}>Price: <span className={css.price}>{rentalPrice}</span></li>
                    </ul>

                    <a href="tel:+380730000000" className={css.rentalBtn}>Rental car</a>

                </div>
            </div>
        </div>,
        modalRoot
      )
};

export default Modal;
