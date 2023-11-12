import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import AppSlider from "../appSlider/AppSlider";
import AppPopularMovies from "../appPopularMovies/AppPopularMovies";
import AppFreeMovies from "../appFreeMovies/AppFreeMovies";
import AppNewsletter from "../appNewsletter/AppNewsletter";
import AppSearchSection from "../appSearchSection/AppSearchSection";
import Page404 from "../page404/Page404";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AppSlider />
                  <AppPopularMovies />
                  <AppFreeMovies />
                  <AppNewsletter />
                </>
              }
            />
            <Route path="/movies" element={<AppSearchSection />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
