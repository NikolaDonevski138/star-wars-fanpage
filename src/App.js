import * as React from "react";
import style from './App.module.scss'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from './pages'
import { Logo } from './components/logo/Logo';
import { Navbar } from './components/navbar/Navbar';
import { BurgerMenu } from './components/burger-menu/BurgerMenu';

const Film = React.lazy(() => import("./pages/film-page/Films"));
const FilmDetails = React.lazy(() => import("./pages/film-page/FilmDetail"));
const BlogDetails = React.lazy(() => import("./components/latest-news-and-blogs/blog-detail"));
const Shop = React.lazy(() => import('./pages/shop-page/shop'));
const ShopCategoryList = React.lazy(() => import('./components/shop/shop-category-list'));

function App() {

  const isBurgerOpened = true;

  return (
    <BrowserRouter>
      <div className={`${style.app} ${isBurgerOpened ? style.burgerOpened : '' }`}>
        <div className={style.logoLgScreens}>
          <Logo />
        </div>
           <div className={style.header}>
            <Navbar />
            <BurgerMenu />
            <div className={style.logoSmScreens}>
              <Logo />
            </div>
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
          </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
