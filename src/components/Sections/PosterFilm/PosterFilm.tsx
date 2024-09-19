import { FC, useEffect } from "react";
import useQueryFilm from "../../../hooks/QueryFilm";
import ButtonAboutFilm from "../../Buttons/ButtonAboutFilm/ButtonAboutFilm";
import ButtonLike from "../../Buttons/ButtonLike/ButtonLike";
import ButtonRefetch from "../../Buttons/ButtonRefetch/ButtonRefetch";
import ButtonTrailer from "../../Buttons/ButtonTreiler/ButtonTrailer";
import RaitingBlock from "../../Common/RaitingBlock/RaitingBlock";
import "./PosterFilm.scss";

interface IPosterFilmProps {
  idFilm?: number;
}

const PosterFilm: FC<IPosterFilmProps> = ({ idFilm }) => {
  const { data, isSuccess, refetch, isFetching } = useQueryFilm(idFilm);

  useEffect(() => {}, []);

  if (isSuccess && data) {
    const {
      id,
      backdropUrl,
      tmdbRating,
      releaseYear,
      trailerYouTubeId,
      genres,
      runtime,
      title,
      plot,
    } = data;
    return (
      <div
        className="film-poster"
        style={{
          backgroundImage: `url(${backdropUrl})`,
        }}
      >
        <RaitingBlock
          className="film-poster__raiting-block"
          tmdbRating={tmdbRating}
          releaseYear={releaseYear}
          genres={genres}
          runtime={runtime}
          large="big-raiting"
        />

        <h1 className="film-poster__h1">{title}</h1>
        <p className="film-poster__paragraf">{plot}</p>

        <div className="film-poster__block-buttons">
          <ButtonTrailer videoId={trailerYouTubeId} title={title} />

          {!idFilm && <ButtonAboutFilm id={id} />}

          <ButtonLike id={id} />

          {!idFilm && (
            <ButtonRefetch refetch={refetch} isFetching={isFetching} />
          )}
        </div>
      </div>
    );
  }
};

export default PosterFilm;
