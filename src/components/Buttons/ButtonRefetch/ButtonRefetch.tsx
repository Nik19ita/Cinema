import { FC } from "react";
import Refetch from "../../../assets/img/refetch.svg?react";
import Spinner from "../../Waiting/Spinner/Spinner";
import "./ButtonRefetch.scss";

interface IButtonRefetch {
  refetch: () => void;
  isFetching: boolean;
}

const ButtonRefetch: FC<IButtonRefetch> = ({ refetch, isFetching }) => {
  return (
    <button className="button-refetch" onClick={refetch} disabled={isFetching}>
      {isFetching ? <Spinner /> : <Refetch className="button-refetch__svg" />}
    </button>
  );
};

export default ButtonRefetch;
