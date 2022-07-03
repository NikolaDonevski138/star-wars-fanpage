import { Carousel } from 'react-responsive-carousel';
import { GaleryListItem } from './galery-list-item';
import { GaleryListImages } from '../../helpers/galery-list-images/galery-list-images';

import style from './galery-list.module.scss';

export const GaleryList = () => {
  return (
      <Carousel className={[style.noSpace]}>
        {
          GaleryListImages.map((el) => {
            return (
              <GaleryListItem image={el} />
            )
          })
        }
      </Carousel>
  )
}