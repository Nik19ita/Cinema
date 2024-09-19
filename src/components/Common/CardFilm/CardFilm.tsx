import { FC } from "react";
import { Link } from "react-router-dom";
import "./CardFilm.scss";

interface ICardFilmProps {
  url: string;
  id: number;
  index?: number;
}

const CardFilm: FC<ICardFilmProps> = ({ url, id, index }) => {
  return (
    <Link className="card" to={`/movie/${id}`}>
      <img className="card-img" src={url} alt="poster" loading="lazy" />
      {index !== undefined && <div className="number-card">{index + 1}</div>}
    </Link>
  );
};

export default CardFilm;
