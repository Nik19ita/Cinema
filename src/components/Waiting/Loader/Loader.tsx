import { FC } from "react";
import "./Loader.scss";

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={`loader ${className || ""}`}>
      <div className="loader-item" />
      <div className="loader-item" />
      <div className="loader-item" />
    </div>
  );
};
