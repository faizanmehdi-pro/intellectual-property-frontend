import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { FormGroup, Input, Label } from "reactstrap";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { changePassword } from "../../../../apis/changePassword";

export interface ModalFormProps {
  setPage: any;
  userID: any;
}

const ChangePasswordES = ({ setPage, userID }: ModalFormProps) => {
  const [resetPassword, setResetPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const queryClient = useQueryClient();
  const { mutate } = useMutation(changePassword, {
    onSuccess: (data) => {
      toast.success("Contraseña cambiada con éxito");
      setPage(1);
    },
    onError: (error: any) => {
      toast.error(error?.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries();
    },
  });

  const handleClick = () => {
    mutate({
      ...resetPassword,
      id: userID,
    });
  };

  const changeHandler = (e: any) => {
    const target = e.target;
    const name = target.name;
    setResetPassword((prev) => {
      return {
        ...prev,
        [name]: target.value,
      };
    });
  };

  return (
    <div className="change-password">
      <h3>CAMBIAR LA CONTRASEÑA</h3>
      <FormGroup className="form-group">
        <Label className="label">Ingrese Nueva Clave</Label>
        <div className="passwordField">
          <Input
            name="newPassword"
            placeholder="*******"
            type={showNewPassword ? "text" : "password"}
            onChange={changeHandler}
            className="password-input"
          />
          <div className="password-icon">
            {showNewPassword ? (
              <AiFillEyeInvisible
                onClick={() => setShowNewPassword(!showNewPassword)}
              />
            ) : (
              <AiFillEye onClick={() => setShowNewPassword(!showNewPassword)} />
            )}
          </div>
        </div>
      </FormGroup>
      <FormGroup className="form-group">
        <Label className="label">Confirmar Contraseña</Label>
        <div className="passwordField">
          <Input
            name="confirmPassword"
            placeholder="*******"
            type={showConfirmPassword ? "text" : "password"}
            onChange={changeHandler}
            className="password-input"
          />
          <div className="password-icon">
            {showConfirmPassword ? (
              <AiFillEyeInvisible
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            ) : (
              <AiFillEye
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            )}
          </div>
        </div>
      </FormGroup>
      <button className="submit-button" onClick={handleClick}>
        Entregar
      </button>
    </div>
  );
};

export default ChangePasswordES;
