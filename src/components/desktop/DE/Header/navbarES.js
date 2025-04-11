import React, { useState } from "react";
import "./navbar.scss";

const NavbarES = () => {
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
          <a href="https://www.estado.pr.gov/en/home">Sobre Nosotros</a>
          <div className="dropdown-content">
            <a href="https://www.estado.pr.gov/en/home">
              Departamento de Estado
            </a>
            <a href="https://www.estado.pr.gov/en/home">Secretario de Estado</a>
            <a href="https://www.estado.pr.gov/en/home">Estado el Día</a>
            <a href="https://www.estado.pr.gov/en/home">Impacto Estado</a>
            <a href="https://www.estado.pr.gov/en/home">Misiones Comerciales</a>
          </div>
          <div className="navbar-divider"></div>
        </li>
        <li className="navbar-link">
          <a href="https://www.estado.pr.gov/en/home">Servicios</a>
          <div className="dropdown-content">
            <a href="https://www.estado.pr.gov/en/home">Pasaportes</a>
            <a href="https://www.estado.pr.gov/en/home">
              Registro de Corporaciones
            </a>
            <a href="https://www.estado.pr.gov/en/home">
              Registro de Marcas y Nombres Comerciales
            </a>
            <a href="https://www.estado.pr.gov/en/home">
              Transacciones Comerciales
            </a>
            <a href="https://www.estado.pr.gov/en/home">
              Certificación de Documentos y Radicación de Reglamentos
            </a>
            <a href="https://www.estado.pr.gov/en/home">Licencia de Bingo</a>
            <a href="https://www.estado.pr.gov/en/home">
              Propiedad Intelectual
            </a>
            <a href="https://www.estado.pr.gov/en/home">Juntas Examinadoras</a>
            <a href="https://www.estado.pr.gov/en/home">
              Oficina de Registro y Licenciamiento
            </a>
            <a href="https://www.estado.pr.gov/en/home">Apostillas</a>
            <a href="https://www.estado.pr.gov/en/home">
              Servicios para Inmigrantes
            </a>
            <a href="https://www.estado.pr.gov/en/home">
              Registro de Personas Jurídicas
            </a>
            <a href="https://www.estado.pr.gov/en/home">Leyes de Puerto Rico</a>
            <a href="https://www.estado.pr.gov/en/home">
              Centro de Servicios Integrados
            </a>
          </div>
          <div className="navbar-divider"></div>
        </li>
        <li className="navbar-link">
          <a href="https://www.estado.pr.gov/en/home">Información</a>
          <div className="dropdown-content">
            <a href="https://www.estado.pr.gov/en/home">Extranjeros</a>
            <a href="https://www.estado.pr.gov/en/home">Empresarios</a>
            <a href="https://www.estado.pr.gov/en/home">
              Relaciones Exteriores
            </a>
            <a href="https://www.estado.pr.gov/en/home">Viajeros</a>
            <a href="https://www.estado.pr.gov/en/home">Recursos y Enlaces</a>
            <a href="https://www.estado.pr.gov/en/home">
              Transición del Gobierno
            </a>
            <a href="https://www.estado.pr.gov/en/home">Área de Interés</a>
            <a href="https://www.estado.pr.gov/en/home">
              Programa de Visitantes de Intercambio (Visa J-1)
            </a>
          </div>
          <div className="navbar-divider"></div>
        </li>
        <li className="navbar-link">
          <a href="https://www.estado.pr.gov/en/home">
            Documentos <br /> Administrativos
          </a>
          <div className="dropdown-content">
            <a href="https://www.estado.pr.gov/en/home">
              Reglamentos Registrados
            </a>
            <a href="https://www.estado.pr.gov/en/home">Ordenes Ejecutivas</a>
            <a href="https://www.estado.pr.gov/en/home">
              Informes del Consejo de Reconstrucción
            </a>
            <a href="https://www.estado.pr.gov/en/home">Convocatorias</a>
            <a href="https://www.estado.pr.gov/en/home">
              Reglamentos Propuestos
            </a>
            <a href="https://www.estado.pr.gov/en/home">Decretos</a>
            <a href="https://www.estado.pr.gov/en/home">Proclamas</a>
          </div>
          <div className="navbar-divider"></div>
        </li>
        <li className="navbar-link">
          <a href="https://www.estado.pr.gov/en/home">
            Oportunidad <br /> Estudiantiles
          </a>
          <div className="dropdown-content">
            <a href="https://www.estado.pr.gov/en/home">Internados</a>
            <a href="https://www.estado.pr.gov/en/home">
              Programas de Intercambio
            </a>
          </div>
          <div className="navbar-divider"></div>
        </li>
        <li className="navbar-link">
          <a href="https://www.estado.pr.gov/en/home">Prensa</a>
          <div className="dropdown-content">
            <a href="https://www.estado.pr.gov/en/home">Noticias</a>
            <a href="https://www.estado.pr.gov/en/home">Eventos</a>
            <a href="https://www.estado.pr.gov/en/home">
              Comunicados de Prensa
            </a>
            <a href="https://www.estado.pr.gov/en/home">
              Ley de Transparencia (Ley 141-2019)
            </a>
            <a href="https://www.estado.pr.gov/en/home">
              Nombramientos del Gobernador
            </a>
            <a href="https://www.estado.pr.gov/en/home">Columnas</a>
          </div>
          <div className="navbar-divider"></div>
        </li>
        <li className="navbar-link">
          <a href="https://www.estado.pr.gov/en/home">Contáctenos</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarES;
