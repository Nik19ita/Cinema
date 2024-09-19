import useQueryTopFilms from "../../../hooks/QueryTopFilms";
import CardsList from "../../Common/CardsList/CardsList";
import "./TopFilms.scss";

const TopFilms = () => {
  const { data, isSuccess } = useQueryTopFilms();

  return (
    <section className="top-films">
      <h2 className="top-films__h2">Топ 10 фильмов</h2>
      {isSuccess && (
        <CardsList
          list={data}
          listName="top-list"
          countCard={data.length}
          numberFilm
        />
      )}
    </section>
  );
};

export default TopFilms;
