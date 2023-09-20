import { lazy, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('pages/HomePage'));
const CataloguePage = lazy(() => import('pages/CataloguePage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));

export const App = () => {
  const [allCars, setAllCars] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/catalog"
            element={<CataloguePage cars={allCars} setAllCars={setAllCars} />}
          />

          <Route
            path="/favorites"
            element={<FavoritesPage setAllCars={setAllCars} />}
          />

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
