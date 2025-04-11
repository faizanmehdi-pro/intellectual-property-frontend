import React, { useState } from "react";
import { FormGroup, Input } from "reactstrap";
import { forgetPassword } from "../../../../apis/forgetPassword";
import { toast } from "react-toastify";
import "../DESetup.scss";

export interface ModalFormProps {
  page: any;
  setPage: any;
  setChangePasswordEmail: any;
}

const ForgetPassword = ({
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
        toast.success("Mail sent successfully");
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

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="forget-password">
      <h2>FORGET PASSWORD</h2>
      <FormGroup className="form-group"> 
        <Input
          id="email"
          name="email"
          placeholder="name@company.com"
          type="email"
          value={state.email}
          onChange={changeHandler}
          className="forget-input"
        />
      </FormGroup>
      <button className="getcode-button" onClick={getCode} disabled={loading}>
        {loading ? "Loading..." : "Get Code"}
      </button>
      <h5>OR</h5>
      <div className="sign-up">
        <h5>Don’t have an Account ?</h5>
        <button className="signup-button" onClick={handleClick}>
          Register
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
