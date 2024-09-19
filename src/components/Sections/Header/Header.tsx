/// <reference types="vite-plugin-svgr/client" />
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/img/cinema.svg?react";
import { Account } from "../../Another/Account/Account";
import { InputSearch } from "../../Another/InputSearch/InputSearch";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <Logo className="logo" />
      </Link>

      <div className="header__central-block">
        <NavLink to="/" className="header__link">
          Главная
        </NavLink>

        <NavLink to="/genres" className="header__link">
          Жанры
        </NavLink>

        <InputSearch />
      </div>

      <Account />
    </header>
  );
};
