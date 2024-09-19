import { FC, useState } from "react";
import { useWhenOpenModal } from "../../../hooks/UseWhenOpenModal";
import { Player } from "../Player/Player";

interface IButtonTrailer {
  videoId: string;
  title: string;
}

const ButtonTrailer: FC<IButtonTrailer> = ({ videoId, title }) => {
  const [playerOpen, setPlayerOpen] = useState(false);
  useWhenOpenModal(playerOpen);

  const closePlayer = () => {
    setPlayerOpen(false);
  };

  return (
    <>
      <button className="button-purple" onClick={() => setPlayerOpen(true)}>
        Трейлер
      </button>

      <Player
        videoId={videoId}
        openPlayer={playerOpen}
        closePlayer={closePlayer}
        title={title}
      />
    </>
  );
};

export default ButtonTrailer;
