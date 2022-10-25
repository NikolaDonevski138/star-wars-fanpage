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
              className={style.carouselContainer}
            >
                <div className={style.videoItem}>
                  { selectedVideo === 0 ? <Video
                    video={carouselVideos.sw_episode_IX}
                    filmName={"Star Wars: The Rise of Skywalker"}
                    isMuted={true}
                  /> : <div>asdasds</div> }
                </div>
                <div className={style.videoItem}>
                  { selectedVideo === 1 ? <Video
                    video={carouselVideos.sw_last_jedi}
                    filmName={"Star Wars: The Last Jedi"}
                    isMuted={false}
                  /> : <div></div> }
                </div>
                <div className={style.videoItem}>
                  { selectedVideo === 2 ? <Video
                    video={carouselVideos.sw_force_awakens}
                    filmName={"Star Wars: The Force Awakens"}
                    isMuted={false}
                  /> : <div></div> }
                </div>
            </Carousel>
    )
}