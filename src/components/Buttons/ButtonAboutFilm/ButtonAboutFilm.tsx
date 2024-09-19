import { FC } from "react";
import { Link } from "react-router-dom";
import "./ButtonAbouFilm.scss";

interface IButtonAboutFilm {
  id: number;
}

const ButtonAboutFilm: FC<IButtonAboutFilm> = ({ id }) => {
  return (
    <Link to={`/movie/${id}`} className="button-about-film button-purple ">
      О фильме
    </Link>
  );
};

export default ButtonAboutFilm;
