import { useEffect } from "react";
import ReactPortal from "./react-portal";

import style from "./modal.module.scss";
import { Avatar } from "@mui/joy";

export const Modal = ({ children, isOpen, handleClose }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className={style.modal} onClick={() => handleClose()}>
        <Avatar
          onClick={() => handleClose()}
          className="hover-zoom"
          src="/assets/images/exit/exit.png"
          sx={{
            zIndex: 1000,
            position: "absolute",
            display: "flex",
            top: 10,
            right: 10,
          }}
        />
        <div
          onClick={(e) => e.stopPropagation()}
          className={style.modalContent}
        >
          {children}
        </div>
      </div>
    </ReactPortal>
  );
};
