import { CarouselSw } from '../../components/carousel/carousel';
import { Galery } from '../../components/galery/Galery';

import style from './Home.module.scss';

export const Home = () => {
    return (
        <>
            <CarouselSw />
            <div className={style.body}>
                <Galery />
            </div>
        </>
    )
}