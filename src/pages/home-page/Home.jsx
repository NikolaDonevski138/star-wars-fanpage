import { CarouselSw } from '../../components/carousel/carousel';
import { Galery } from '../../components/galery/Galery';
import { LatestNewsAndBlogs } from '../../components/latest-news-and-blogs/latest-news-and-blogs';

import style from './Home.module.scss';

export const Home = () => {
    return (
        <>
            <CarouselSw />
            <div className={style.body}>
                <Galery />
                <LatestNewsAndBlogs />
            </div>
        </>
    )
}