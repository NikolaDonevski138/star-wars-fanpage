import { useEffect, useState } from "react";
import ReactPlayer from 'react-player'

import style from "./video.module.scss";

export const Video = ({ video, isMuted, filmName }) => {
  const [isPlaying, setPlaying] = useState(false);
  const [toggleMuted, setToggleMuted] = useState(isMuted)

  useEffect(() => {
    setPlaying(false);
  }, [])

  const toggleIsPlaying = () => {
    setToggleMuted(!toggleMuted);
  }

  return (
    <div
      className={style.videoContainer}
      onClick={() => {toggleIsPlaying()}}
    >
      <ReactPlayer
        url={video}
        playing={true}
        muted={toggleMuted}
        width="100%"
        height="100%"
      />
      <p className={style.videoTitle}>{filmName}</p>
    </div>
  );
};
