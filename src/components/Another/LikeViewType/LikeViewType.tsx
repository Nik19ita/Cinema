import { FC } from "react";
import AsLike from "../../../assets/img/aslike.svg?react";
import Like from "../../../assets/img/like.svg?react";
import { useAppDispatch } from "../../../hooks/ReduxHook";
import { changeLikeView } from "../../../store/slice";
import { IFilm } from "../../../type/Film";
import Spinner from "../../Waiting/Spinner/Spinner";
import "./LikeViewType.scss";

interface ILikeViewType {
  id: number;
  data: IFilm[] | undefined;
  isSuccess: boolean;
  isError: boolean;
  spinner: boolean;
}

const LikeViewType: FC<ILikeViewType> = ({
  id,
  data,
  isSuccess,
  isError,
  spinner,
}) => {
  const dispatch = useAppDispatch();

  if (spinner) {
    return <Spinner />;
  }

  if (isSuccess && data?.some((film) => film.id === id)) {
    dispatch(changeLikeView("like"));
    return <Like className="like" />;
  }

  if (isError || data?.some((film) => film.id !== id) || data?.length === 0) {
    dispatch(changeLikeView("aslike"));
    return <AsLike className="aslike" />;
  }
};

export default LikeViewType;
