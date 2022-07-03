import { useState } from 'react';
import { filmImages } from '../../constants/film-images'
import { Modal } from '../../helpers/ui/modal';

import style from './Galery.module.scss';

export const Galery = () => {

  const [ isModalOpen, setOpenModal ] = useState(false);

  const openModal = () => {
    setOpenModal(true);
  }

  return (
    <>
      <div className={style.galeryContainer}>
        <div className={style.contentContainer} onClick={openModal}>
          <div className={style.imageContainer}>
            <img className={style.img} src={filmImages[0]['A New Hope']} alt="Skills Galery" />
          </div>
          <div className={style.descriptionContainer}>
            <p className={style.descriptionItem}>Obi-Wan Kenobi | Skills Gallery</p>
          </div>
        </div>
        <div className={style.angleDivContainer}>
              <div className={style.shortenDiv}></div>
              <div className={style.transparentDiv}></div>
              <div className={style.angleDiv}></div>
        </div>
      </div>
      <Modal handleClose={() => setOpenModal(false)} isOpen={isModalOpen}>
          This is Modal Content!
      </Modal>
    </>
  )
}