import * as React from "react";
import style from './App.module.scss'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from './components/navbar/Navbar';
import { BurgerMenu } from './components/burger-menu/BurgerMenu';
import { Home } from './pages'

const Film = React.lazy(() => import("./pages/film-page/Films"));

function App() {
  return (
    <BrowserRouter>
      <div className={style.app}>
          <Navbar />
          <BurgerMenu />
          <div className={style.pages}>
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
          </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
