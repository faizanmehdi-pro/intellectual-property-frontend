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

const Login = ({
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
      toast.success("Login Successfully");
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
        Law search service, joint resolutions and vetoes of the Government of
        Puerto Rico
      </h3>
      <form className="document-form-fields">
        <FormGroup>
          <Input
            id="email"
            name="email"
            placeholder="E-Mail"
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
              placeholder="Password"
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
          Note: If you require a certified law, you must go through the
          Department of State, please make an appointment at the following
          link...
        </h5>
        <div className="document-buttons">
          <Button
            className="document-button"
            onClick={loginHandler}
            disabled={loading}
          >
            {loading ? "Loading" : "Login"}
          </Button>
        </div>
        <h5
          className="document-register"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Don't have an account? Register
        </h5>
        <h5 className="document-register">OR</h5>
        <h5
          className="document-register"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Forgot Password
        </h5>
      </form>
    </div>
  );
};

export default Login;
