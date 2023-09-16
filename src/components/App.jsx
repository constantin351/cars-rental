import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";

const HomePage = lazy(() => import('pages/HomePage'));
const CataloguePage = lazy(() => import('pages/CataloguePage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));


export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework TEMPLATE
    // </div>
    <Routes>
        <Route path="/" element={<SharedLayout/>}>

          <Route index element={<HomePage/>}/>

          <Route path="/catalog" element={<CataloguePage/>}/>

          <Route path="/favorites" element={<FavoritesPage/>}/>

          <Route path="*" element={<HomePage/>}/>

        </Route>
    </Routes>
  );
};
