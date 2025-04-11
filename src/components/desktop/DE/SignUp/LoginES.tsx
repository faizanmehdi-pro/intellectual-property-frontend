import { useState } from "react";
import "../DESetup.scss";
import { Button, FormGroup, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../../../apis/login";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export interface ModalFormProps {
  page: any;
  setPage: any;
  handleCloseModal: any;
  loginLink: any;
}
export interface NewUser {
  email: string;
  name: string;
}

const LoginES = ({
  page,
  setPage,
  handleCloseModal,
  loginLink,
}: ModalFormProps) => {
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [passwordField, setPasswordField] = useState(false);

  const queryClient = useQueryClient();

  const { mutate } = useMutation(login, {
    onSuccess: (data) => {
      setLoading(false);
      localStorage.setItem("token", data?.token);
      localStorage.setItem("refresh_token", data?.refresh_token);
      localStorage.setItem("user_id", data?.user?.id);
      localStorage.setItem("username", data?.user?.username);
      localStorage.setItem("name", data?.user?.name);
      localStorage.setItem("search_hits", data?.user?.search_hits);
      localStorage.setItem("number_of_logins", data?.user?.number_of_logins);
      toast.success("Iniciar sesión con éxito");
      handleCloseModal();
      history(loginLink, {
        state: { id: data?.user?.id },
      });
      setTimeout(function() {
        window.location.reload();
    }, 3000);
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
      setLoading(false);
    },
    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });

  const loginHandler = () => {
    mutate(state);
    setLoading(true);
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
    <div className="new-user-document-form">
      <h3 className="document-title">
        Servicio de búsqueda de leyes, resoluciones conjuntas y vetos del
        Gobierno de Puerto Rico
      </h3>
      <form className="document-form-fields">
        <FormGroup>
          <Input
            id="email"
            name="email"
            placeholder="Correo electrónico"
            type="email"
            value={state.email}
            onChange={changeHandler}
            className="input-field"
          />
        </FormGroup>
        <FormGroup className="form-group password-box">
          <div className="passwordField">
            <Input
              id="examplePassword"
              name="password"
              placeholder="Contraseña"
              type={passwordField ? "text" : "password"}
              value={state.password}
              onChange={changeHandler}
              className="input-field"
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
        </FormGroup>
        <h5 className="document-title">
          Nota: Si requiere una ley certificada, debe pasar por el Departamento
          de Estado, haga una cita en el siguiente enlace...
        </h5>
        <div className="document-buttons">
          <Button
            className="document-button"
            onClick={loginHandler}
            disabled={loading}
          >
            {loading ? "Cargando" : "Acceso"}
          </Button>
        </div>
        <h5
          className="document-register"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          ¿No tienes una cuenta? Registro
        </h5>
        <h5 className="document-register">O</h5>
        <h5
          className="document-register"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Has olvidado tu contraseña
        </h5>
      </form>
    </div>
  );
};

export default LoginES;
