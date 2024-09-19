import { FC } from "react";
import queryFilmsSearch from "../../../hooks/QueryFilmsSearch";
import Spinner from "../../Waiting/Spinner/Spinner";
import TooltipCard from "../TooltipCard/TooltipCard.";
import "./TooltipComponent.scss";

interface ITooltipComponentProps {
  search: string;
}

const TooltipComponent: FC<ITooltipComponentProps> = ({ search }) => {
  const { data, isSuccess, isFetching } = queryFilmsSearch(search);

  if (isSuccess && data.length !== 0) {
    return data.map((film, index) => {
      if (index < 5) {
        return <TooltipCard film={film} key={`tooltoip-card-${index}`} />;
      }
    });
  }

  if (isSuccess && data.length === 0) {
    return <p className="tooltip-notfound">Ничего не найдено</p>;
  }

  if (isFetching) {
    return <Spinner />;
  }
};

export default TooltipComponent;
