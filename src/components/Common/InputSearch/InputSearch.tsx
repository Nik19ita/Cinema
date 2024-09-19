import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Remove from "../../../assets/img/remove.svg?react";
import { useAppSelector } from "../../../hooks/ReduxHook";
import TooltipContainer from "../../Tooltip/TooltipContainer/TooltipContainer";
import "./InputSearch.scss";

const InputSearch = () => {
  const [value, setValue] = useState("");
  const { key } = useLocation();
  const openModal = useAppSelector((state) => state.project.modal.open);
  const isOpenTooltip = value !== "" && openModal === false;

  useEffect(() => {
    setValue("");
  }, [key, openModal]);

  return (
    <div className="div-for-tooltip">
      <input
        className="input-search"
        type="text"
        placeholder="Поиск"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {isOpenTooltip && <TooltipContainer search={value} />}
      {value !== "" && (
        <Remove className="remove" onClick={() => setValue("")} />
      )}
    </div>
  );
};

export default InputSearch;
