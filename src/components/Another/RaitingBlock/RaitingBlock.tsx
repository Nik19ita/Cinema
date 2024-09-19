import { FC } from "react";
import Star from "../../../assets/img/star.svg?react";
import getColorRaitng from "../../../helpers/GetColorRaiting.ts";
import "./RaitingBlock.scss";

interface IRaitingProps {
  tmdbRating: number;
  releaseYear: number;
  genres: Array<string>;
  runtime: number;
  large: "big-raiting" | "small-raiting";
  className: string;
}

const RaitingBlock: FC<IRaitingProps> = ({
  tmdbRating,
  releaseYear,
  genres,
  className,
  runtime,
  large,
}) => {
  return (
    <div className={`raiting-block ${large} ${className}`}>
      <span
        className="raiting"
        style={{
          backgroundColor: getColorRaitng(Math.floor(tmdbRating)),
        }}
      >
        <Star />
        {tmdbRating.toFixed(1)}
      </span>

      <span>{releaseYear}</span>

      <span>{genres[0]}</span>

      <span>{`${Math.floor(runtime / 60)} ч ${runtime % 60} мин`}</span>
    </div>
  );
};

export default RaitingBlock;
