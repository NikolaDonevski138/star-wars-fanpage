import { useEffect } from 'react';
import ReactPortal from "./react-portal";

import style from './modal.module.scss';

export const Modal = ({ children, isOpen, handleClose }) => {

  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    }

  }, [handleClose])

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className={style.modal}>
        <button onClick={handleClose} className={style.closeBtn}>
          Close
        </button>
        <div className={style.modalContent}>
          {children}
        </div>
      </div>
    </ReactPortal>
  )

}