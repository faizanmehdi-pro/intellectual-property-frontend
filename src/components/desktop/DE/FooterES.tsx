import "./DESetup.scss";
import OIG from "../../../assests/images/footer/OIG.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

type Props = {};

const FooterES = (props: Props) => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h3 className="title">Dirección Física</h3>
          <p className="heading">
            Calle San José, Esquina San
            <br />
            Francisco, Viejo San Juan
          </p>
          <p className="heading">OWA / Webmail</p>
        </div>
        <div className="footer-links">
          <h3 className="title">Dirección Postal</h3>
          <p className="heading">
            Apartado 9023271
            <br />
            San Juan, PR 00902-3271
          </p>
        </div>
        <div className="footer-links">
          <h3 className="title">Contáctenos</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/DeptEstadoPR/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="social-icon"/>
            </a>
            <a href="https://twitter.com/DeptEstadoPR" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon"/>
            </a>
            <a href="https://www.linkedin.com/company/departamento-de-estado-de-puerto-rico/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="social-icon"/>
            </a>
            <a href="https://www.instagram.com/DeptEstadoPR/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon"/>
            </a>
          </div>
          <p className="link">
            deptestadopr@estado.pr.gov <br /> Teléfono: (787) 722-2121
          </p>
        </div>
        <div className="footer-links">
          <h3 className="title">PR.gov</h3>
          <div className="pr-gov">
            <p className="heading">
              Número de Accesibilidad-XXX-2019.
              <br />
              Conforme a la Ley 229 de 2003
            </p>
            <div className="oic">
              <img src={OIG} alt="oic" />
              <p className="heading">
                Oficina del Inspector
                <br />
                General de Puerto Rico
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">
        COPYRIGHT ©️ 2023 Department of State Puerto Rico, All rights reserved
        Versión Beta 0.0.1
      </p>
    </div>
  );
};

export default FooterES;
