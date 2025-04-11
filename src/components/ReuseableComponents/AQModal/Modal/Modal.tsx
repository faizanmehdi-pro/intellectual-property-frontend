import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const AQModal = ({
  children,
  modalTitle,
  nextBtnText,
  cancelBtnText,
  onConfirm,
  onExitModal,
}: any) => {
  return (
    <div className="alert-modal">
      {modalTitle && <ModalHeader></ModalHeader>}
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        {nextBtnText}
        {cancelBtnText}
      </ModalFooter>
    </div>
  );
};

export default AQModal;
