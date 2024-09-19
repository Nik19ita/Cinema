import { FC } from "react";
import TooltipComponent from "../TooltipComponent/TooltipComponent";
import "./TooltipContainer.scss";

interface ITooltipProps {
  search: string;
}

const TooltipContainer: FC<ITooltipProps> = ({ search }) => {
  return (
    <div className="tooltip">
      <TooltipComponent search={search} />
    </div>
  );
};

export default TooltipContainer;
