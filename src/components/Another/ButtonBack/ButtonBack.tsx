import { FC } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBack from "../../../assets/img/arrowBack.svg?react";
import "./ButtonBack.scss";

interface IButtonBackProps {
  title: string;
}

const ButtonBack: FC<IButtonBackProps> = ({ title }) => {
  const naigate = useNavigate();
  const goBack = () => naigate(-1);
  return (
    <button className="button-back" onClick={goBack}>
      <ArrowBack className="button-back__arrow-back" />
      <h2 className="button-back__h2">{title}</h2>
    </button>
  );
};

export default ButtonBack;
