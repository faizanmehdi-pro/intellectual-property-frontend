import React from "react";
import { deleteDocument } from "../../../../../apis/deleteDocument";
import "./DeleteDocuments.scss";
import { toast } from "react-toastify";

export interface TextProps {
  handleCloseDeleteModal: any;
  deleteID: any;
  deleteLoading: any;
  setDeleteLoading: any;
  scrollHandler: any;
}

const DeleteSearchDocument: React.FC<TextProps> = ({
  handleCloseDeleteModal,
  deleteID,
  deleteLoading,
  setDeleteLoading,
  scrollHandler
}) => {
  const onDeleteDocument = () => {
    setDeleteLoading(true);
    deleteDocument(deleteID)
      .then((resp) => {
        toast.success("File Deleted Successfully");
        setDeleteLoading(false);
        handleCloseDeleteModal();
        scrollHandler();
      })
      .catch((err) => {
        setDeleteLoading(false);
        console.log(err);
        toast.error("Error deleting file. Please try again.");
        handleCloseDeleteModal();
      });
  };
  return (
    <div className="delete-document-container">
      <h3>Are you sure to delete ?</h3>
      <div className="delete-buttons">
        <button 
          onClick={onDeleteDocument} 
          disabled={deleteLoading}
          style={{
            cursor: deleteLoading ? "not-allowed" : "pointer",
            background: deleteLoading ? "#000" : "#1869b3",
            opacity: deleteLoading ? 0.6 : 1
          }}
          >
            {deleteLoading? "Deleting..." : "Yes"}
          </button>
        <button onClick={handleCloseDeleteModal}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteSearchDocument;
