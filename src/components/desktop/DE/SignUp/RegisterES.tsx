import { useState } from "react";
import "../DESetup.scss";
import ProfessionsES from "./RadioButtons/ProfessionsES";
import MotiveES from "./RadioButtons/MotiveES";
import { register } from "../../../../apis/register";
import { toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export interface ModalFormProps {
  page: any;
  setPage: any;
}
interface FormValues {
  name: string;
  password: string;
  email: string;
  profession: string;
  motive: string;
}

const NewUserES = ({ page, setPage }: ModalFormProps) => {
  const [differentProfession, setDifferentProfession] = useState("");
  const [differentMotive, setDifferentMotive] = useState("");
  const [selectedProfession, setSelectedProfession] = useState();
  const [selectedMotiveES, setSelectedMotiveES] = useState();
  const [passwordField, setPasswordField] = useState(false);

  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    password: "",
    email: "",
    profession: "",
    motive: "",
  });

  const history = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSearchDocuments = () => {
    const search = {
      email: formValues?.email,
      name: formValues?.name,
      password: formValues?.password,
      profession: selectedProfession,
      motive: selectedMotiveES,
      differentProfession: differentProfession,
      differentMotive: differentMotive,
    };

    if (search) {
      register(search);
      toast.success("Nuevo usuario registrado con éxito");
      setPage(page + 1);
    }
  };

  return (
    <div className="new-user-document-form">
      <h3 className="document-title">
      Búsqueda de Leyes, Resoluciones Conjuntas, Reglamentos de Agencias y Reglamento Municipal del Gobierno de Puerto Rico
      </h3>
      <form className="document-form-fields" onSubmit={onSearchDocuments}>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
          required
          className="input-field"
          placeholder="Name"
        />
        <input
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          required
          className="input-field"
          placeholder="E-Mail"
        />
        <div className="passwordField">
          <input
            name="password"
            placeholder="*******"
            required
            type={passwordField ? "text" : "password"}
            value={formValues.password}
            onChange={handleInputChange}
          />
          <div className="password-icon">
            {passwordField ? (
              <AiFillEyeInvisible
                onClick={() => setPasswordField(!passwordField)}
              />
            ) : (
              <AiFillEye onClick={() => setPasswordField(!passwordField)} />
            )}
          </div>
        </div>
        <div className="radio-field">
          <h5>Profesión</h5>
          <ProfessionsES
            selectedProfession={selectedProfession}
            setSelectedProfession={setSelectedProfession}
            differentProfession={differentProfession}
            setDifferentProfession={setDifferentProfession}
          />
        </div>
        <div className="radio-field">
          <h5>Motivo</h5>
          <MotiveES
            selectedMotiveES={selectedMotiveES}
            setSelectedMotiveES={setSelectedMotiveES}
            differentMotive={differentMotive}
            setDifferentMotive={setDifferentMotive}
          />
        </div>
        <h4 className="document-title">
          Nota: Si requiere una ley certificada, debe pasar por el Departamento
          de Estado, haga una cita en el siguiente enlace...
        </h4>
        <div className="document-buttons">
          <button className="document-button" type="submit">
            Registro
          </button>
          <button className="document-button" onClick={() => setPage(page + 1)}>
            Acceso
          </button>
          <button
          type="button"
            className="document-button"
            onClick={() => history("/")}
          >
            Buscar como visitante
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUserES;
