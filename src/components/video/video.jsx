import { useRef, useEffect } from 'react';
import { useElementSize } from 'usehooks-ts'

import style from './video.module.scss';


export const Video = ({ video }) => {

  const [squareRef, { width, height }] = useElementSize()
  const videoRef = useRef();

  // useEffect(() => {
  //   return () => {
  //     videoRef.
  //   }
  // })

  return (
    <div className={style.videoContainer}>
          <div className={style.overlay}></div>
          <video
            src={video}
            loop
            autoPlay
            controls={true}
            muted
            style={{
              width: '100%',
              height: '100%'
            }}
          />
          <p className={style.videoTitle}>Test</p>
    </div>
  )
}