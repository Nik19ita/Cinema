import useQueryTopFilms from "../../../hooks/QueryTopFilms";
import { CardsList } from "../../Another/CardsList/CardsList";
import "./TopFilms.scss";

export const TopFilms = () => {
  const { data, isSuccess } = useQueryTopFilms();

  return (
    <section className="top-films">
      <h2 className="top-films__h2">Топ 10 фильмов</h2>
      {isSuccess && (
        <CardsList list={data} listName="top-list" countCard={data.length} />
      )}
    </section>
  );
};
