import css from './HomePage.module.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className={css.heroSection}>
        <div className={css.heroWrapper}>
          <h1 className={css.heroTitle}>
            Unlock {' '}
            <span className={css.span}>the Thrills of the Open Road</span> with Our
            Rentals
          </h1>
          <p className={css.heroText}>
            Welcome! Rent the quality of RentCar Company. Choose the car that
            best suits you and set off on a worry-free journey. Discover the
            offers online and book now!
          </p>
          <button
            type="button"
            className={css.discoverBtn}
            onClick={() => navigate('/catalog')}
          >
            Discover
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;