import './SearchResultStyles.scss';
import { RiVideoLine } from "react-icons/ri";
import { AiFillAudio } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { MdDescription } from "react-icons/md"; // Add icons for photo and document
import { Link } from 'react-router-dom';
import Modal from '../../../../ReuseableComponents/Modal/Modal';
import DeleteSearchDocumentES from '../DeleteDocuments/DeleteSearchDocumentES';
import { useState } from 'react';
import { FaRegImage } from "react-icons/fa6";

const SearchResultsES = ({ searchResult, scrollHandler }) => {
  const [showDeleteModal, setDeleteModal] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState();
  const [deleteID, setDeleteID] = useState();

  const handleOpenDeleteModal = () => {
    setDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModal(false);
  };

  const getIconForType = (item) => {
    switch (item.type) {
      case 'photo':
        // return <img src={item.file} alt='photo' className="search-result-photo" />;
        return <FaRegImage />;
      case 'video':
        return <RiVideoLine />;
      case 'audio':
        return <AiFillAudio />;
      case 'document':
        return <MdDescription />;
      default:
        return null;
    }
  };

  return (
    <div className="search-results-container">
      <div className="search-results-top-line">
        <h2 className="search-results-title">Resultados de la Búsqueda</h2>
      </div>
      <div className="search-results-cards">
  {searchResult && searchResult.length > 0 ? (
    searchResult.map((item) => (
      <div key={item.id} className="search-results-card">
        <div className="search-results-card-left">
          <div className="search-results-icon">
            {getIconForType(item)}
          </div>
        </div>
        <div className="search-results-card-right">
          <div className="info-row">
            <label>Nombre del Autor:</label>
            <span>{item.author}</span>
          </div>
          <div className="info-row">
            <label>Título:</label>
            <span>{item.title}</span>
          </div>
          <div className="info-row">
            <label>Genre:</label>
            <span>{item.genre}</span>
          </div>
          <div className="info-row">
            <label>Número de Obra:</label>
            <span>{item.work_number}</span>
          </div>
          <div className="info-row">
            <label>Fecha de Inscripción:</label>
            <span>{item.registration_date}</span>
          </div>
        </div>
        <div className="action-icons">
          <Link
            className="update-file-icon"
            to={`/update-file?id=${item.id}&link=/`}
          >
            <FiEdit />
          </Link>
          <AiOutlineDelete
            className="delete-file-icon"
            onClick={() => {
              handleOpenDeleteModal();
              setDeleteID(item?.id);
            }}
          />
        </div>
      </div>
    ))
  ) : (
    <div className="no-results-message">No Result Found</div>
  )}
</div>

      <div className="col-md-3">
        {showDeleteModal && (
          <Modal
            title="Eliminar Archivo"
            content={
              <DeleteSearchDocumentES
                handleCloseDeleteModal={handleCloseDeleteModal}
                deleteID={deleteID}
                deleteLoading={deleteLoading}
                setDeleteLoading={setDeleteLoading}
                scrollHandler={scrollHandler}
              />
            }
            onClose={handleCloseDeleteModal}
          />
        )}
      </div>
    </div>
  );
};

export default SearchResultsES;
