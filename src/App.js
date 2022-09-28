import * as React from "react";
import style from './App.module.scss'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from './pages'
import { Navbar } from './components/navbar/Navbar';
import { BurgerMenu } from './components/burger-menu/BurgerMenu';

const Film = React.lazy(() => import("./pages/film-page/Films"));
const FilmDetails = React.lazy(() => import("./pages/film-page/FilmDetail"));
const Starships = React.lazy(() => import('./components/starships/starships'));
const Species = React.lazy(() => import('./components/species/species'));
const Planets = React.lazy(() => import('./components/planets/Planets'));
const Vehicles = React.lazy(() => import('./components/vehicles/vehicles'));
const BlogDetails = React.lazy(() => import("./components/latest-news-and-blogs/blog-detail"));
const Shop = React.lazy(() => import('./pages/shop-page/shop'));
const ShopCategoryList = React.lazy(() => import('./components/shop/shop-category-list'));
const Cart = React.lazy(() => import('./pages/cart/Cart'));
const Payment = React.lazy(() => import('./pages/payment/payment'))


function App() {

  const isBurgerOpened = true;

  return (
    <BrowserRouter>
      <div className={`${style.app} ${isBurgerOpened ? style.burgerOpened : '' }`}>
           <div className={style.header}>
            <Navbar />
            <BurgerMenu />
          </div>
          <div className={style.body}>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route
                path="films"
                element={
                <React.Suspense fallback={<>Loading...</>}>
                  <Film />
                </React.Suspense>
                }
              />
              <Route
                path="filmdetails"
                element={
                <React.Suspense fallback={<>Loading....</>}>
                  <FilmDetails />
                </React.Suspense>
                }
              />
              <Route
                path="filmdetails/vehicles"
                element={
                <React.Suspense fallback={<>Loading....</>}>
                  <Vehicles />
                </React.Suspense>
                }
              />
              <Route
                path="filmdetails/starships"
                element={
                <React.Suspense fallback={<>Loading....</>}>
                  <Starships />
                </React.Suspense>
                }
              />
              <Route
                path="filmdetails/planets"
                element={
                <React.Suspense fallback={<>Loading....</>}>
                  <Planets />
                </React.Suspense>
                }
              />
              <Route
                path="filmdetails/species"
                element={
                <React.Suspense fallback={<>Loading....</>}>
                  <Species />
                </React.Suspense>
                }
              />
              <Route
                path="blogdetail"
                element={
                <React.Suspense fallback={<>Loading....</>}>
                  <BlogDetails />
                </React.Suspense>
                }
              />
              <Route
                path="shop"
                element={
                <React.Suspense fallback={<>Loading....</>}>
                  <Shop />
                </React.Suspense>
                }
              />
              <Route
                path="shop/shop-category-list"
                element={
                <React.Suspense fallback={<>Loading....</>}>
                  <ShopCategoryList />
                </React.Suspense>
                }
              />
              <Route
                path="cart"
                element={
                <React.Suspense fallback={<>Loading....</>}>
                  <Cart />
                </React.Suspense>
                }
              />
              <Route
                path="payment"
                element={
                <React.Suspense fallback={<>Loading....</>}>
                  <Payment />
                </React.Suspense>
                }
              />
          </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
