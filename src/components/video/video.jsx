import { useEffect, useState } from "react";
import ReactPlayer from 'react-player'

import style from "./video.module.scss";

export const Video = ({ video }) => {
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(false);
  }, [])

  const toggleIsPlaying = () => {
    setPlaying(!isPlaying);
  }

  return (
    <div
      className={style.videoContainer}
      onClick={() => {toggleIsPlaying()}}
    >
      <ReactPlayer
        url={video}
        playing={isPlaying}
        width="100%"
        height="100%"
      />
      <p className={style.videoTitle}>Test</p>
    </div>
  );
};
