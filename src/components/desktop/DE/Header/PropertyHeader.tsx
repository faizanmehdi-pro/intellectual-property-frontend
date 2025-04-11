import "./Header.scss";
import { Link } from "react-router-dom";
// import logoo from "../../../../assests/images/logoo.png";
import logoo from "../../../../assests/images/newLogo.png";
import small from "../../../../assests/images/small.png";
import Navbar from "./navbar";
import React, { useState } from "react";
import Modal from "../../../ReuseableComponents/Modal/Modal";
import NewUserSignup from "../SignUp/Forms";
import BreadcrumbsEN from "./BreadCrumEN";

type Props = {};

const PropertyHeader = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  let token = localStorage.getItem("token");
  let loginLink = "/en";
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
          <p className="small-haeder-text">
            Official portal of the Government of Puerto Rico
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
              <Link className="logout-link" to="/en" onClick={handleLogout}>
                Log out
              </Link>
            </button>
          ) : (
            <button className="log-out" onClick={handleOpenModal}>
              <Link className="logout-link" to="/en">
                Log in
              </Link>
            </button>
          )}
        </div>
      </div>
      {/* <div className="logoo">
        <BreadcrumbsEN />
        <Link className="logout-link" to="/en">
          <img src={logoo} alt="logo" />
        </Link>
      </div> */}
      <div className="new-logo">
        <BreadcrumbsEN />
        <div className="new-logo-container">
          <div className="logo-text">
            <p className="logo-heading">DEPARTMENT OF</p>
            <h3 className="logo-title">STATE</h3>
          </div>
          <div className="logo-divider"></div>
          <img className="new-logo-img" src={logoo} alt="logo" />
        </div>
      </div>
      <Navbar />

      <div className="col-md-3">
        {showModal && (
          <Modal
            title="Puerto Rican Laws"
            content={
              <NewUserSignup
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

export default PropertyHeader;
