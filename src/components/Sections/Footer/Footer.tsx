import { Link } from "react-router-dom";
import OK from "../../../assets/img/ok.svg?react";
import TELEGRAMM from "../../../assets/img/telegram.svg?react";
import VK from "../../../assets/img/vk.svg?react";
import YOUTUBE from "../../../assets/img/youtube.svg?react";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <span className="footer__LLC">LLC «Мультимедиа Визион»</span>
        <span className="footer__rights">Все права защищены </span>
      </div>

      <div className="footer__right-block">
        <Link to="/support" onClick={(e) => e.preventDefault()}>
          <VK />
        </Link>
        <Link to="/support" onClick={(e) => e.preventDefault()}>
          <YOUTUBE />
        </Link>
        <Link to="/support" onClick={(e) => e.preventDefault()}>
          <OK />
        </Link>
        <Link to="/support" onClick={(e) => e.preventDefault()}>
          <TELEGRAMM />
        </Link>
      </div>
    </footer>
  );
};
