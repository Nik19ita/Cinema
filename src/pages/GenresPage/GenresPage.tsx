import { GenreCard } from "../../components/Another/GenreCard/GenreCard";
import "./GenresPage.scss";

export const GenresPage = () => {
  const genres = [
    ["drama", "Драма"],
    ["comedy", "Комедия"],
    ["crime", "Детектив"],
    ["family", "Семейное"],
    ["history", "Историческое"],
    ["thriller", "Триллер"],
    ["fantasy", "Фантастика"],
    ["action", "Приключения"],
  ];

  return (
    <section className="genres-page">
      <h2 className="genres-page__h2">Жанры фильмов</h2>
      <div className="genres-page__cards-list">
        {genres.map((genre, index) => (
          <GenreCard
            genreNameEng={genre[0]}
            genreNameRus={genre[1]}
            key={`genre-card-${index}`}
          />
        ))}
      </div>
    </section>
  );
};
