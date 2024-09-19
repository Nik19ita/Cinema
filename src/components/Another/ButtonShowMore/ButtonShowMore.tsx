import { FC } from "react";
import "./ButtonShowMoew.scss";

interface IButonShowMoreProps {
  onClick: () => void;
}

const ButonShowMore: FC<IButonShowMoreProps> = ({ onClick }) => {
  return (
    <button className="button-purple button-center" onClick={onClick}>
      Показать еще
    </button>
  );
};

export default ButonShowMore;
