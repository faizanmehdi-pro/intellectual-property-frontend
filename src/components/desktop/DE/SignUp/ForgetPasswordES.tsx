import React, { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import { forgetPassword } from "../../../../apis/forgetPassword";
import "../DESetup.scss";
import { toast } from "react-toastify";

export interface ModalFormProps {
  page: any;
  setPage: any;
  setChangePasswordEmail: any;
}

const ForgetPasswordES = ({
  page,
  setPage,
  setChangePasswordEmail,
}: ModalFormProps) => {
  const [state, setState] = useState({ email: "" });
  const [loading, setLoading] = useState(false);

  const getCode = async () => {
    try {
      setLoading(true);
      let result = await forgetPassword({ email: state.email });
      if (result.message === "Mail sent successfully") {
        toast.success("El correo enviado con éxito");
        setChangePasswordEmail(state.email);
        setPage(page + 1);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    setPage(0);
  };

  const changeHandler = (e: any) => {
    const target = e.target;
    const name = target.name;
    setState((prev) => {
      return {
        ...prev,
        [name]: target.value,
      };
    });
  };
  return (
    <div className="forget-password">
      <h2>CONTRASEÑA OLVIDADA</h2>
      <FormGroup className="form-group">
        <Input
          id="email"
          name="email"
          placeholder="nombre@empresa.com"
          type="email"
          value={state.email}
          onChange={changeHandler}
          className="forget-input"
        />
      </FormGroup>
      <button className="getcode-button" onClick={getCode} disabled={loading}>
        {loading ? "Cargando..." : "Obtener Código"}
      </button>
      <h5>O</h5>
      <div className="sign-up">
        <h5>¿No tienes una cuenta?</h5>
        <button className="signup-button" onClick={handleClick}>
          Registro
        </button>
      </div>
    </div>
  );
};

export default ForgetPasswordES;
