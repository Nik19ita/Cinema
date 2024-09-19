import { FC } from "react";
import { IFilm } from "../../../type/Film";
import { CardFilm } from "../CardFilm/CardFilm";
import "./CardsList.scss";

interface ICardListProps {
  list: IFilm[];
  listName: string;
  numberFilm?: true;
  className?: string;
  countCard: number;
}

export const CardsList: FC<ICardListProps> = ({
  list,
  listName,
  numberFilm,
  className,
  countCard,
}) => {
  return (
    <div className={`list-films ${className}`}>
      <div className="list-films__content">
        {list.map((film, index) => {
          if (index < countCard) {
            return (
              <CardFilm
                url={film.posterUrl}
                key={`${listName}${index}`}
                index={numberFilm && index}
                id={film.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
