import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';
import Loader from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.navWrapper}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.navlink)}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.navlink)}
            to="/catalog"
          >
            Catalogue
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.navlink)}
            to="/favorites"
          >
            Favorites
          </NavLink>
        </nav>
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
