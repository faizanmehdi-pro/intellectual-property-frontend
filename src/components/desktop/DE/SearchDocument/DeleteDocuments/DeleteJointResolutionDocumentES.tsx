import React, { useState } from "react";
import { deleteDocument } from "../../../../../apis/deleteDocument";
import "./DeleteDocuments.scss";
import { toast } from "react-toastify";

export interface TextProps {
  handleCloseDeleteModal: any;
  deleteID: any;
}

const DeleteJointResolutionDocumentES: React.FC<TextProps> = ({
  handleCloseDeleteModal,
  deleteID,
}) => {
  const [loading, setLoading] = useState(false);
  const onDeleteDocument = () => {
    setLoading(true);
    deleteDocument(deleteID)
      .then((resp) => {
        toast.success("Documento eliminado con éxito");
        setLoading(false);
        handleCloseDeleteModal();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error al eliminar documentos. Inténtalo de nuevo.");
      });
  };
  return (
    <div className="delete-document-container">
      <h3>¿Estás segura de eliminar?</h3>
      <div className="delete-buttons">
        <button onClick={onDeleteDocument}>
          {loading ? "Cargando..." : "Sí"}{" "}
        </button>
        <button onClick={handleCloseDeleteModal}>Cancelar</button>
      </div>
    </div>
  );
};

export default DeleteJointResolutionDocumentES;
