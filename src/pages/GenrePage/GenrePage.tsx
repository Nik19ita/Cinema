import { useState } from "react";
import { useLocation } from "react-router-dom";
import ButtonBack from "../../components/Another/ButtonBack/ButtonBack";
import ButtonShowMore from "../../components/Another/ButtonShowMore/ButtonShowMore";
import { CardsList } from "../../components/Another/CardsList/CardsList";
import QueryGenreFilms from "../../hooks/QueryGenreFilms";
import "./GenrePage.scss";

export const GenrePage = () => {
  const [countFilmOnPage, setCountFilmOnPage] = useState(15);
  const {
    state: { genreNameEng, genreNameRus },
  } = useLocation();
  const { data, isSuccess } = QueryGenreFilms(genreNameEng);
  const clickButton = () => setCountFilmOnPage(countFilmOnPage + 10);

  return (
    <section className="genre">
      <ButtonBack title={genreNameRus} />
      {isSuccess && (
        <>
          <CardsList
            className="genre__card-list"
            list={data}
            listName="genre-list"
            countCard={countFilmOnPage}
          />
          {data?.length <= countFilmOnPage || (
            <ButtonShowMore onClick={clickButton} />
          )}
        </>
      )}
    </section>
  );
};

export default GenrePage;
