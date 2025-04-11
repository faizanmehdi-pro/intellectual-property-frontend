import React from "react";
import "./modal.scss";

interface Props {
  title: string;
  content: any;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ title, content, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="title">{title}</h2>
          <h2 className="close" onClick={onClose}>
            &times;
          </h2>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Modal;
