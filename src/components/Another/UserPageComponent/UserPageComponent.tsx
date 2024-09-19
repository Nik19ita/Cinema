import { FC } from "react";
import Email from "../../../assets/img/email.svg?react";
import "./UserPageComponent.scss";

interface IAcountComponent {
  className: string;
  params: string;
  text: string;
}

const UserComponent: FC<IAcountComponent> = ({ params, text, className }) => {
  return (
    <div className={`user-component ${className}`}>
      {className === "component-1" && (
        <div className="user-component__circul">
          {text.split(" ")[0].split("")[0]}
          {text.split(" ")[1].split("")[0]}
        </div>
      )}

      {className === "component-2" && (
        <div className="user-component__circul">
          <Email />
        </div>
      )}
      <div className="user-component__content">
        <span className="user-component__params">{params}</span>
        <p className="user-component__text">{text}</p>
      </div>
    </div>
  );
};

export default UserComponent;
