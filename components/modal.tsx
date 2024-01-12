import React, { ReactNode } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isVisible, onClose, children }: ModalProps) => {
  if (!isVisible) return null;
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "wrapper") onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center  "
      id="wrapper"
      onClick={handleClose}
    >
      <div className=" w-96 flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-2 rounded ">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
