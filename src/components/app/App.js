import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import AppSlider from "../appSlider/AppSlider";
import AppPopularMovies from "../appPopularMovies/AppPopularMovies";
import AppFreeMovies from "../appFreeMovies/AppFreeMovies";
import AppNewsletter from "../appNewsletter/AppNewsletter";
import AppSearchSection from "../appSearchSection/AppSearchSection";
import AppSearchByNameSection from "../appSearchByNameSection/AppSearchByNameSection";
import Page404 from "../page404/Page404";
import AppLogin from "../appLogin/AppLogin";
import AppUserPageTemplate from "../appUserPageTemplate/AppUserPageTemplate";

import "./App.scss";
import AppRegistration from "../appRegistration/AppRegistration";
import AppRegistrationConfirmed from "../appRegistrationConfirmed/AppRegistrationConfirmed";
import AppMoviePage from "../appMoviePage/AppMoviePage";

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
            <Route path="/movie/:id" element={<AppMoviePage />} />
            <Route
              path="/account_activation/:code"
              element={<AppRegistrationConfirmed />}
            />
            <Route path="/registration" element={<AppRegistration />} />
            <Route path="/login" element={<AppLogin />} />
            <Route path="/user/:id" element={<AppUserPageTemplate />} />
            <Route path="/movies/:id" element={<AppSearchSection />} />
            <Route path="/tv/:id" element={<AppSearchSection />} />
            <Route path="/search/:id" element={<AppSearchByNameSection />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
