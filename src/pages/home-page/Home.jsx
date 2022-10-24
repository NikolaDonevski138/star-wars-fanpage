import { CarouselSw } from '../../components/carousel/carousel';
import { GaleryContainer } from '../../components/galery/galery-container';
import { LatestNewsAndBlogs } from '../../components/latest-news-and-blogs/latest-news-and-blogs';
import { Footer } from '../../components/footer/footer';

import style from './home.module.scss';

export const Home = () => {
    return (
        <>
            <CarouselSw />
            <div className={style.body}>
                <GaleryContainer />
                <LatestNewsAndBlogs />
            </div>
            <Footer />
        </>
    )
}