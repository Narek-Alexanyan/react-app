import React from "react";
import cl from "./CustomModal.module.scss";

const CustomModal = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.modal];

  if (visible) rootClasses.push(cl.modal_active);
  return (
    <div onClick={() => setVisible(false)} className={rootClasses.join(" ")}>
      <div onClick={(e) => e.stopPropagation()} className={cl.modal_content}>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
