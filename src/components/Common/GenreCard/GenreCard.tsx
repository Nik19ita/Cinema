import { FC } from "react";
import { Link } from "react-router-dom";
import "./GenreCard.scss";

interface IGenreCard {
  genreNameEng: string;
  genreNameRus: string;
}

const GenreCard: FC<IGenreCard> = ({ genreNameEng, genreNameRus }) => {
  return (
    <Link
      className={`genre-card ${genreNameEng}`}
      to={`${genreNameEng}`}
      state={{ genreNameEng: genreNameEng, genreNameRus: genreNameRus }}
    >
      <div className="genre-card__name">{genreNameRus}</div>
    </Link>
  );
};

export default GenreCard;
