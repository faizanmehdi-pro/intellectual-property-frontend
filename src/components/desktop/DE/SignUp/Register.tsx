import { useState } from "react";
import "../DESetup.scss";
import Professions from "./RadioButtons/Professions";
import Motive from "./RadioButtons/Motive";
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

const NewUser = ({ page, setPage }: ModalFormProps) => {
  const [differentProfession, setDifferentProfession] = useState("");
  const [differentMotive, setDifferentMotive] = useState("");
  const [selectedProfession, setSelectedProfession] = useState();
  const [selectedMotive, setSelectedMotive] = useState();
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
      motive: selectedMotive,
      differentProfession: differentProfession,
      differentMotive: differentMotive,
    };
    if (search) {
      register(search);
      toast.success("New User Registered Successfully");
      setPage(page + 1);
    }
  };

  return (
    <div className="new-user-document-form">
      <h3 className="document-title">
      Search for Laws, Joint Resolutions, Agencies Regulations and Municipal Regulation of the Government of Puerto Rico
      </h3>
      <form className="document-form-fields" onSubmit={onSearchDocuments}>
        <input
          type="text"
          name="name"
          value={formValues?.name}
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
          <h5>Profession</h5>
          <Professions
            selectedProfession={selectedProfession}
            setSelectedProfession={setSelectedProfession}
            differentProfession={differentProfession}
            setDifferentProfession={setDifferentProfession}
          />
        </div>
        <div className="radio-field">
          <h5>Motive</h5>
          <Motive
            selectedMotive={selectedMotive}
            setSelectedMotive={setSelectedMotive}
            differentMotive={differentMotive}
            setDifferentMotive={setDifferentMotive}
          />
        </div>
        <h5 className="document-title">
          Note: If you require a certified law, you must go through the
          Department of State, please make an appointment at the following
          link...
        </h5>
        <div className="document-buttons">
          <button className="document-button" type="submit">
            Register
          </button>
          <button className="document-button" onClick={() => setPage(page + 1)}>
            Login
          </button>
          <button
          type="button"
            className="document-button"
            onClick={() => history("/en")}
          >
            Search as a Visitor
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
