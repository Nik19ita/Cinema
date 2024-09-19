import { FC, useEffect } from "react";
import useQueryFilm from "../../../hooks/QueryFilm";
import ButtonAboutFilm from "../../Another/ButtonAboutFilm/ButtonAboutFilm";
import ButtonLike from "../../Another/ButtonLike/ButtonLike";
import ButtonRefetch from "../../Another/ButtonRefetch/ButtonRefetch";
import ButtonTrailer from "../../Another/ButtonTreiler/ButtonTrailer";
import RaitingBlock from "../../Another/RaitingBlock/RaitingBlock";
import "./PosterFilm.scss";

interface IPosterFilmProps {
  idFilm?: number;
}

export const PosterFilm: FC<IPosterFilmProps> = ({ idFilm }) => {
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
