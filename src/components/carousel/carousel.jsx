import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Video } from '../video/video';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from './carousel.module.scss';
import { carouselVideos } from '../../constants/carousel-videos';


export const CarouselSw = () => {

  const [selectedVideo, setSelectedVideo] = useState(0);

  return (
            <Carousel
              onChange={(idx) => setSelectedVideo(idx)}
              class={style.carouselContainer}
            >
                <div class={style.videoItem}>
                  { selectedVideo === 0 ? <Video
                    video={carouselVideos.sw_episode_IX}
                  /> : <div></div> }
                </div>
                <div class={style.videoItem}>
                  { selectedVideo === 1 ? <Video
                    video={carouselVideos.sw_episode_IX}
                  /> : <div></div> }
                </div>
                <div class={style.videoItem}>
                  { selectedVideo === 2 ? <Video
                    video={carouselVideos.sw_episode_IX}
                  /> : <div></div> }
                </div>
            </Carousel>
    )
}