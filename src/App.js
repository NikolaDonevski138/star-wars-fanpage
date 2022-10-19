import * as React from "react";
import { useBurgerMenu } from "./store/useBurgerMenu";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { Home } from "./pages";
import { Navbar } from "./components/navbar/navbar";
import { BurgerMenu } from "./components/burger-menu/burger-menu";
import { SideBar } from "./components/sidebar/sidebar";
import { LoaderWrapper } from "./helpers/ui/loader-wrapper";

import style from "./App.module.scss";

const Film = React.lazy(() => import("./pages/film-page/films"));
const FilmDetails = React.lazy(() => import("./pages/film-page/film-detail"));
const Starships = React.lazy(() => import("./components/starships/starships"));
const Species = React.lazy(() => import("./components/species/species"));
const Planets = React.lazy(() => import("./components/planets/planets"));
const Vehicles = React.lazy(() => import("./components/vehicles/vehicles"));
const BlogDetails = React.lazy(() =>
  import("./components/latest-news-and-blogs/blog-detail")
);
const Shop = React.lazy(() => import("./pages/shop-page/shop"));
const ShopCategoryList = React.lazy(() =>
  import("./components/shop/shop-category-list")
);
const Cart = React.lazy(() => import("./pages/cart/cart"));
const Payment = React.lazy(() => import("./pages/payment/payment"));

function App() {
  const { isOpened } = useBurgerMenu((state) => ({
    isOpened: state.isOpened,
  }));

  return (
    <BrowserRouter>
      <div className={isOpened ? style.appContainerMobileBurgerOpened : ""}>
        <div className={!isOpened ? style.hideSideBar : ""}>
          <SideBar />
        </div>
        <div className={style.app}>
          <Navbar />
          <BurgerMenu />
          <div className={style.body}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="films"
                element={
                  <React.Suspense
                    fallback={
                      <LoaderWrapper>
                        <Circles />
                      </LoaderWrapper>
                    }
                  >
                    <Film />
                  </React.Suspense>
                }
              />
              <Route
                path="filmdetails"
                element={
                  <React.Suspense fallback={<LoaderWrapper>
                    <Circles />
                  </LoaderWrapper>}>
                    <LoaderWrapper>
                      <FilmDetails />
                    </LoaderWrapper>
                  </React.Suspense>
                }
              />
              <Route
                path="filmdetails/vehicles"
                element={
                  <React.Suspense
                    fallback={
                      <LoaderWrapper>
                        <Circles />
                      </LoaderWrapper>
                    }
                  >
                    <Vehicles />
                  </React.Suspense>
                }
              />
              <Route
                path="filmdetails/starships"
                element={
                  <React.Suspense
                    fallback={
                      <LoaderWrapper>
                        <Circles />
                      </LoaderWrapper>
                    }
                  >
                    <Starships />
                  </React.Suspense>
                }
              />
              <Route
                path="filmdetails/planets"
                element={
                  <React.Suspense
                    fallback={
                      <LoaderWrapper>
                        <Circles />
                      </LoaderWrapper>
                    }
                  >
                    <Planets />
                  </React.Suspense>
                }
              />
              <Route
                path="filmdetails/species"
                element={
                  <React.Suspense
                    fallback={
                      <LoaderWrapper>
                        <Circles />
                      </LoaderWrapper>
                    }
                  >
                    <Species />
                  </React.Suspense>
                }
              />
              <Route
                path="blogdetail"
                element={
                  <React.Suspense
                    fallback={
                      <LoaderWrapper>
                        <Circles />
                      </LoaderWrapper>
                    }
                  >
                    <BlogDetails />
                  </React.Suspense>
                }
              />
              <Route
                path="shop"
                element={
                  <React.Suspense
                    fallback={
                      <LoaderWrapper>
                        <Circles />
                      </LoaderWrapper>
                    }
                  >
                    <Shop />
                  </React.Suspense>
                }
              />
              <Route
                path="shop/shop-category-list"
                element={
                  <React.Suspense
                    fallback={
                      <LoaderWrapper>
                        <Circles />
                      </LoaderWrapper>
                    }
                  >
                    <ShopCategoryList />
                  </React.Suspense>
                }
              />
              <Route
                path="cart"
                element={
                  <React.Suspense
                    fallback={
                      <LoaderWrapper>
                        <Circles />
                      </LoaderWrapper>
                    }
                  >
                    <Cart />
                  </React.Suspense>
                }
              />
              <Route
                path="payment"
                element={
                  <React.Suspense
                    fallback={
                      <LoaderWrapper>
                        <Circles />
                      </LoaderWrapper>
                    }
                  >
                    <Payment />
                  </React.Suspense>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
