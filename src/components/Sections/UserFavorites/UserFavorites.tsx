import useQueryFavoritesFilms from "../../../hooks/QueryFavoritesFilms";
import CardsList from "../../Common/CardsList/CardsList";
import "./UserFavorites.scss";

const UserFavorites = () => {
  const { data, isSuccess } = useQueryFavoritesFilms();

  if (isSuccess) {
    return (
      <CardsList
        list={data}
        listName="favorites-list"
        className="user-favorites-list"
        countCard={data.length}
      />
    );
  }
};

export default UserFavorites;
