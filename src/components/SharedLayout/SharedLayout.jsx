import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import css from "./SharedLayout.module.css";
import Loader from "components/Loader/Loader";

const SharedLayout = () => {
    return (
        <div className={css.container}>
          <header className={css.header}>
            <nav>
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
    
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      );
};

export default SharedLayout;