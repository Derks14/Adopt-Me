import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById('modal');

const Modal = ({ children }) => {

  //used refs here so each modal instance can have its own unique divs

  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect( () => {
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, [] );


  return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;
