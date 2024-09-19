import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Layout from "./components/Layout/Layout";
import UserFavorites from "./components/Sections/UserFavorites/UserFavorites";
import UserPersonalData from "./components/Sections/UserPersonalData/UserPersonalData";
import { AboutFilmPage } from "./pages/AboutFilmPage/AboutFilmPage";
import GenrePage from "./pages/GenrePage/GenrePage";
import { GenresPage } from "./pages/GenresPage/GenresPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { UserPage } from "./pages/UserPage/UserPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="genres" element={<GenresPage />} />
        <Route path="genres/:genre" element={<GenrePage />} />
        <Route path="movie/:movieId" element={<AboutFilmPage />} />

        <Route
          path="user-favorites"
          element={
            <section className="app-user-favorites">
              <UserPage />
              <UserFavorites />
            </section>
          }
        />

        <Route
          path="user-personal-data"
          element={
            <section className="app-user-personal-data">
              <UserPage />
              <UserPersonalData />
            </section>
          }
        />
      </Route>
    </Routes>
  );
};
