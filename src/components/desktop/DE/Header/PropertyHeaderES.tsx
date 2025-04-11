import "./Header.scss";
import { Link } from "react-router-dom";
// import logoo from "../../../../assests/images/ES_Logo.png";
import logoo from "../../../../assests/images/newLogo.png";
import small from "../../../../assests/images/small.png";
import NavbarES from "./navbarES";
import React, { useState } from "react";
import Modal from "../../../ReuseableComponents/Modal/Modal";
import NewUserSignupES from "../SignUp/FormsES";
import BreadCrumb from "./BreadCrum";

type Props = {};

const PropertyHeaderES = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  let token = localStorage.getItem("token");
  let loginLink = "/";
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="new-header">
      <div className="new-small-header">
        <div className="header-left">
          <div className="small">
            <img src={logoo} alt="small" />
          </div>
          <div className="small-divider"></div>
          <p className="small-haeder-text-diff">
            Portal oficial del Gobierno de Puerto Rico
          </p>
        </div>
        <div className="header-right">
          <Link className="navbar-link" to="/">
            <h5 className="small-header-text-right">ES</h5>
          </Link>
          <div className="small-header-divider"></div>
          <Link className="navbar-link" to="/en">
            <h5 className="small-header-text-right">EN</h5>
          </Link>
          {token ? (
            <button className="log-out">
              <Link className="logout-link" to="/" onClick={handleLogout}>
                Cerrar sesión
              </Link>
            </button>
          ) : (
            <button className="log-out" onClick={handleOpenModal}>
              <Link className="logout-link" to="/">
                Acceso
              </Link>
            </button>
          )}
        </div>
      </div>
      {/* <div className="logoo">
        <BreadCrumb />
        <Link className="logout-link" to="/">
          <img src={logoo} alt="logo" />
        </Link>
      </div> */}
      <div className="new-logo">
        <BreadCrumb />
        <div className="new-logo-container">
          <div className="logo-text">
            <p className="logo-heading">DEPARTAMENTO DE</p>
            <h3 className="logo-title">ESTADO</h3>
          </div>
          <div className="logo-divider"></div>
          <img className="new-logo-img" src={logoo} alt="logo" />
        </div>
      </div>
      <NavbarES />

      <div className="col-md-3">
        {showModal && (
          <Modal
            title="Leyes de Puerto Rico"
            content={
              <NewUserSignupES
                handleCloseModal={handleCloseModal}
                loginLink={loginLink}
              />
            }
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default PropertyHeaderES;
