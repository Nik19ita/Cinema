import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import ReactPlayer from "react-player/youtube";
import Close from "../../../assets/img/close.svg?react";
import "./Player.scss";

interface IPlayer {
  openPlayer: boolean;
  closePlayer: () => void;
  videoId: string;
  title: string;
}

export const Player: FC<IPlayer> = ({
  openPlayer,
  closePlayer,
  videoId,
  title,
}) => {
  const [open, setOpen] = useState(true);

  return (
    <AnimatePresence>
      {openPlayer && (
        <motion.div
          className="player"
          key="Player"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1 }}
        >
          <div className="player__container">
            <div
              className="player__content"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <ReactPlayer
                width="100%"
                height="100%"
                url={`<src="https://www.youtube.com/embed/${videoId}`}
                config={{
                  playerVars: {
                    autoplay: 1,
                    controls: 0,
                  },
                }}
              />

              {open && <div className="player__title">{title}</div>}
              <Close className="player__close" onClick={closePlayer} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
