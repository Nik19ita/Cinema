import { FC } from "react";
import { Link } from "react-router-dom";
import { IFilm } from "../../../type/Film";
import RaitingBlock from "../../Common/RaitingBlock/RaitingBlock";
import "./TooltipCard.scss";

interface ITooltipComponentProps {
  film: IFilm;
}

const TooltipCard: FC<ITooltipComponentProps> = ({ film }) => {
  const { id, posterUrl, tmdbRating, releaseYear, genres, runtime } = film;
  return (
    <Link
      className="tooltip-card"
      key={`tooltip-card-${id}`}
      to={`movie/${id}`}
    >
      <img className="tooltip-card__img" src={`${posterUrl}`} alt="обложка" />

      <div className="tooltip-card__content">
        <RaitingBlock
          tmdbRating={tmdbRating}
          releaseYear={releaseYear}
          genres={genres}
          runtime={runtime}
          className="tooltip-card__raiting-block"
          large="small-raiting"
        />
        <h2 className="tooltip-card__h2">{film.title}</h2>
      </div>
    </Link>
  );
};

export default TooltipCard;
