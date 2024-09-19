import { useParams } from "react-router-dom";
import PosterFilm from "../../components/Sections/PosterFilm/PosterFilm";
import useQueryFilm from "../../hooks/QueryFilm";
import "./AboutFilmPage.scss";

const AboutFilmPage = () => {
  const { movieId } = useParams();
  const { data, isSuccess } = useQueryFilm(Number(movieId));

  if (isSuccess) {
    return (
      <>
        <PosterFilm idFilm={Number(movieId)} />
        <div className="about-film">
          <h2 className="about-film__h2">О фильме</h2>
          <p className="about-film__paragraf">{`Язык оригинала..................... ${data.language ? data.language : "Неизвестно"}`}</p>
          <p className="about-film__paragraf">{`Бюджет....................................  ${data.budget ? data.budget : "Неизвестно"}`}</p>
          <p className="about-film__paragraf">{`Выручка...................................  ${data.revenue ? `${data.revenue} $` : "Неизвестно"}`}</p>
          <p className="about-film__paragraf">{`Режиссер.................................  ${data.director ? data.director : "Неизвестно"}`}</p>
          <p className="about-film__paragraf">{`Продакшен..............................  ${data.production ? data.production : "Неизвестно"}`}</p>
          <p className="about-film__paragraf">{`Награды...................................  ${data.awardsSummary ? data.awardsSummary : "Неизвестно"}`}</p>
        </div>
      </>
    );
  }
};

export default AboutFilmPage;
