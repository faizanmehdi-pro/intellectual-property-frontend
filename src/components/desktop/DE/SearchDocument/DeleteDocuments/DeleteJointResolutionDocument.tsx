import React, { useState } from "react";
import { deleteDocument } from "../../../../../apis/deleteDocument";
import "./DeleteDocuments.scss";
import { toast } from "react-toastify";

export interface TextProps {
  handleCloseDeleteModal: any;
  deleteID: any;
}

const DeleteJointResolutionDocument: React.FC<TextProps> = ({
  handleCloseDeleteModal,
  deleteID,
}) => {
  const [loading, setLoading] = useState(false);
  const onDeleteDocument = () => {
    setLoading(true);
    deleteDocument(deleteID)
      .then((resp) => {
        toast.success("Document Deleted Successfully");
        setLoading(false);
        handleCloseDeleteModal();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error deleting documents. Please try again.");
      });
  };
  return (
    <div className="delete-document-container">
      <h3>Are you sure to delete ?</h3>
      <div className="delete-buttons">
        <button onClick={onDeleteDocument}>
          {loading ? "Loading..." : "Yes"}{" "}
        </button>
        <button onClick={handleCloseDeleteModal}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteJointResolutionDocument;
