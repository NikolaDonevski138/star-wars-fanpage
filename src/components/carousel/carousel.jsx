import { Carousel } from 'react-responsive-carousel';
import { Video } from '../video/video';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from './carousel.module.scss';
import { carouselVideos } from '../../constants/carousel-videos';


export const CarouselSw = () => {
  return (
            <Carousel class={style.carouselContainer}>
                <div class={style.videoItem}>
                  <Video video={carouselVideos.babyYoda}/>
                </div>
                <div class={style.videoItem}>
                  <Video video={carouselVideos.pesna}/>
                </div>
                <div class={style.videoItem}>
                  <Video video={carouselVideos.babyYoda}/>
                </div>
            </Carousel>
    )
}