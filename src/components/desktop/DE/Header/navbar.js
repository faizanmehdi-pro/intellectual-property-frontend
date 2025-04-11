import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <button className="navbar-toggle" onClick={toggleNavbar}>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
      </button>
      <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
        <li className="navbar-link">
          <a href="https://www.estado.pr.gov/en/home">About Us</a>
          <div className="dropdown-content">
            <a href="https://www.estado.pr.gov/en/home">Department of State</a>
            <a href="https://www.estado.pr.gov/en/home">Secretary of State</a>
            <a href="https://www.estado.pr.gov/en/home">Estado el Dia</a>
            <a href="https://www.estado.pr.gov/en/home">Impacto Estado</a>
            <a href="https://www.estado.pr.gov/en/home">Trade Missions</a>
          </div>
          <div className="navbar-divider"></div>
        </li>
        <li className="navbar-link">
          <a href="https://www.estado.pr.gov/en/home">Services</a>
          <div className="dropdown-content">
            <a href="https://www.estado.pr.gov/en/home">Passports</a>
            <a href="https://www.estado.pr.gov/en/home">
              Registry of Corporations
            </a>
            <a href="https://www.estado.pr.gov/en/home">
              Registration of Trademarks and Commercial Names
            </a>
            <a href="https://www.estado.pr.gov/en/home">
              Commercial Transactions
            </a>
            <a href="https://www.estado.pr.gov/en/home">
              Certification of Documents and Filing of Bylaws
            </a>
            <a href="https://www.estado.pr.gov/en/home">Bingo License</a>
            <a href="https://www.estado.pr.gov/en/home">
              Intellectual Property
            </a>
            <a href="https://www.estado.pr.gov/en/home">Examining Boards</a>
            <a href="https://www.estado.pr.gov/en/home">
              Registration and Licensing Office
            </a>
            <a href="https://www.estado.pr.gov/en/home">Apostilles</a>
            <a href="https://www.estado.pr.gov/en/home">Immigrant Services</a>
            <a href="https://www.estado.pr.gov/en/home">
              Registration of Legal Entities
            </a>
            <a href="https://www.estado.pr.gov/en/home">Puerto Rico Bylaws</a>
            <a href="https://www.estado.pr.gov/en/home">Integrated Services</a>
          </div>
          <div className="navbar-divider"></div>
        </li>
        <li className="navbar-link">
          <a href="https://www.estado.pr.gov/en/home">Information</a>
          <div className="dropdown-content">
            <a href="https://www.estado.pr.gov/en/home">Foreigners</a>
            <a href="https://www.estado.pr.gov/en/home">Businessmen</a>
            <a href="https://www.estado.pr.gov/en/home">Foreign Affairs</a>
            <a href="https://www.estado.pr.gov/en/home">Travelers</a>
            <a href="https://www.estado.pr.gov/en/home">Resources and Links</a>
            <a href="https://www.estado.pr.gov/en/home">
              Government Transition
            </a>
            <a href="https://www.estado.pr.gov/en/home">Area of Interest</a>
            <a href="https://www.estado.pr.gov/en/home">
              Exchange Visitor Program (J-1 Visa)
            </a>
          </div>
          <div className="navbar-divider"></div>
        </li>
        <li className="navbar-link">
          <a href="https://www.estado.pr.gov/en/home">
            Administrative <br /> Documents
          </a>
          <div className="dropdown-content">
            <a href="https://www.estado.pr.gov/en/home">
              Registered Regulations
            </a>
            <a href="https://www.estado.pr.gov/en/home">Executive Orders</a>
            <a href="https://www.estado.pr.gov/en/home">
              Reconstruction Council Reports
            </a>
            <a href="https://www.estado.pr.gov/en/home">Solicitations</a>
            <a href="https://www.estado.pr.gov/en/home">Proposed Bylaws</a>
            <a href="https://www.estado.pr.gov/en/home">Bylaws</a>
            <a href="https://www.estado.pr.gov/en/home">Proclamations</a>
          </div>
          <div className="navbar-divider"></div>
        </li>
        <li className="navbar-link">
          <a href="https://www.estado.pr.gov/en/home">
            Student <br /> Opportunities
          </a>
          <div className="dropdown-content">
            <a href="https://www.estado.pr.gov/en/home">Internships</a>
            <a href="https://www.estado.pr.gov/en/home">
              Student Opportunities
            </a>
          </div>
          <div className="navbar-divider"></div>
        </li>
        <li className="navbar-link">
          <a href="https://www.estado.pr.gov/en/home">Press</a>
          <div className="dropdown-content">
            <a href="https://www.estado.pr.gov/en/home">News</a>
            <a href="https://www.estado.pr.gov/en/home">Events</a>
            <a href="https://www.estado.pr.gov/en/home">Press Releases</a>
            <a href="https://www.estado.pr.gov/en/home">
              Transparency Law (Ley 141-2019)
            </a>
            <a href="https://www.estado.pr.gov/en/home">
              Governor's Appointments
            </a>
            <a href="https://www.estado.pr.gov/en/home">Columns</a>
          </div>
          <div className="navbar-divider"></div>
        </li>
        <li className="navbar-link">
          <a href="https://www.estado.pr.gov/en/home">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
