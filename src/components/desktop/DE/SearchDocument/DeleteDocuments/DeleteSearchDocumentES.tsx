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

const DeleteSearchDocumentES: React.FC<TextProps> = ({
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
        toast.success("Archivo eliminado con éxito");
        setDeleteLoading(false);
        handleCloseDeleteModal();
        scrollHandler();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error al eliminar archivo. Inténtalo de nuevo.");
        handleCloseDeleteModal();
        setDeleteLoading(false);
      });
  };
  return (
    <div className="delete-document-container">
      <h3>¿Estás seguro de eliminar ?</h3>
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
          {deleteLoading? "Eliminando..." : "Sí"}
        </button>
        <button onClick={handleCloseDeleteModal}>Cancelar</button>
      </div>
    </div>
  );
};

export default DeleteSearchDocumentES;
