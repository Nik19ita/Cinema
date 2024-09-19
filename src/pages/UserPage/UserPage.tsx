import { NavLink } from "react-router-dom";
import AsLike from "../../assets/img/aslike.svg?react";
import Name from "../../assets/img/name.svg?react";
import "./UserPage.scss";

const UserPage = () => {
  return (
    <div className="user-page">
      <h2 className="user-page__h2">Мой аккаунт</h2>

      <NavLink to="/user-favorites" className="user-page__navlink">
        <AsLike /> Избранные фильмы
      </NavLink>

      <NavLink to="/user-personal-data" className="user-page__navlink">
        <Name /> Настройка аккаунта
      </NavLink>
    </div>
  );
};

export default UserPage;
